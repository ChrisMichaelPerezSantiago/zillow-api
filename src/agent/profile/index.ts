import cheerio from 'cheerio'
import _ from 'lodash'

import { makeRequest } from '../../MakeRequest'
import { config } from '../../config'
import type { AgentProfile } from './types'

const { get, omit } = _

type ReturnType = Promise<AgentProfile | null>

export async function getAgentProfile(profileLink: string): ReturnType {
  try {
    if (!profileLink) {
      return null
    }

    const url = `${config.baseURL}${profileLink}`
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
    const pageProps = get(result, 'props.pageProps', null)
    const propertiesToRemove = [
      'ab',
      'currentUser',
      'clientProfilerConfig',
      'map',
      'profileDisplay',
      'seoFooters',
      'shouldShowAgentProfileRefresh',
      'teamDisplayInformation',
      'zillowWebHostName',
      'zGuid',
    ]

    const filteredObject: ReturnType = omit(pageProps, propertiesToRemove) as any

    return filteredObject
  }
  catch (error) {
    console.error('[GetAgentProfile] Error fetching data:', error)
    return null
  }
}
