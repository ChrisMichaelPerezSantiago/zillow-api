import cheerio from 'cheerio'
import _ from 'lodash'

import { makeRequest } from '../../MakeRequest'
import { config } from '../../config'
import type { HomeDetails } from './types'

const { get, omit } = _

type ReturnType = Promise<HomeDetails | null>

function parseGdpClientCacheRootProperty(response: string): ReturnType {
  const cleanedString = response.replace(/"NotForSaleShopperPlatformFullRenderQuery\{[^}]+\}":\s*\{/, '')
  const validJsonString = cleanedString.replace(/\}\s*$/, '')
  return JSON.parse(validJsonString)
}

export async function getCurrentHomeDetails(listingURL: string): ReturnType {
  try {
    if (!listingURL) {
      return null
    }

    const url = `${config.baseURL}${listingURL}`
    const response = await makeRequest(url, 'text', { method: 'get' })

    if (!response) {
      return null
    }

    const $ = cheerio.load(response)
    const script = $('script#__NEXT_DATA__').text()

    if (!script) {
      return null
    }

    const result = JSON.parse(script)
    const pageProps = get(result, 'props.pageProps.componentProps.gdpClientCache', null)
    const propertiesToRemove: string[] = [
      'abTests',
      'viewer',
      'property.topNavJson',
      'property.NFSHDPBottomSlot',
    ]

    if (!pageProps) {
      return null
    }

    const gdpClientCache = JSON.parse(pageProps)
    const gdpClientCacheResultCleaned = parseGdpClientCacheRootProperty(JSON.stringify(gdpClientCache))

    const filteredObject = omit(gdpClientCacheResultCleaned, propertiesToRemove) as any

    return filteredObject
  }
  catch (error) {
    console.error('[GetCurrentHomeDetails] Error fetching data:', error)
    return null
  }
}
