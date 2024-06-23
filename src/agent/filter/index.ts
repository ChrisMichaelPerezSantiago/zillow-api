import _ from 'lodash'
import cheerio from 'cheerio'

import { config } from '../../config'
import { makeRequest } from '../../MakeRequest'
import type { Agent } from './types'
import type { AGENT_FILTER_LANGUAGES_OPTIONS, AGENT_FILTER_SPECIALTIES_OPTIONS } from './constants'
import { AGENT_FILTER_BASE_URL } from './constants'

const { forEach, get, includes, omit, pull } = _

type language = typeof AGENT_FILTER_LANGUAGES_OPTIONS[number]
type Specialty = typeof AGENT_FILTER_SPECIALTIES_OPTIONS[number]

interface Filter {
  page?: number
  locationText?: string
  specialty?: Specialty
  language?: language
}

interface AgentFilterProps {
  query?: Filter
}

type ReturnType = Promise<Agent | undefined | null>

type FilterStrategy = (query: Filter, filterParts: string[]) => void

const applyLanguageFilter: FilterStrategy = (query, filterParts) => {
  const { language } = query
  if (language)
    filterParts.push(language)
}

const applySpecialtyFilter: FilterStrategy = (query, filterParts) => {
  const { specialty } = query
  if (specialty)
    filterParts.push(specialty)
}

const applyLocationFilter: FilterStrategy = (query, filterParts) => {
  const { locationText } = query
  if (locationText)
    filterParts.push(locationText)
}

const filterStrategies: FilterStrategy[] = [
  applyLanguageFilter,
  applySpecialtyFilter,
  applyLocationFilter,
]

function buildNextPageLink(baseURL: string, filterParts: string[], locationText?: string, page: number = 1): string {
  let nextPageLink = `${baseURL}professionals/`

  if (filterParts.length > 0) {
    nextPageLink += `${filterParts.join('--')}--`
  }

  nextPageLink += AGENT_FILTER_BASE_URL

  if (locationText) {
    nextPageLink += `/${locationText}`
  }

  nextPageLink += `/?page=${page}`

  return nextPageLink
}

async function requestFilter({ query }: AgentFilterProps): ReturnType {
  if (!query)
    return null

  const filterParts: string[] = []

  forEach(filterStrategies, (strategy) => {
    strategy(query, filterParts)
  })

  const locationText = get(query, 'locationText', '')
  if (includes(filterParts, locationText)) {
    pull(filterParts, locationText)
  }

  const nextPageLink = buildNextPageLink(config.baseURL, filterParts, locationText, query.page)

  try {
    const response = await makeRequest(nextPageLink, 'text', { method: 'get' })
    if (!response) {
      return null
    }

    const $ = cheerio.load(response)
    const script = $('script#__NEXT_DATA__').text()

    if (!script) {
      return null
    }

    const result = JSON.parse(script)
    const pageProps = get(result, 'props.pageProps.proResults', null)
    const propertiesToRemove = [
      'breadcrumbs',
      'search',
      'seoFooters',
    ]

    const filteredObject: ReturnType = omit(pageProps, propertiesToRemove) as any

    return filteredObject
  }
  catch (error) {
    console.error('[RequestFilter] Error fetching data:', error)
  }
}

export async function agentFilter({ query }: AgentFilterProps): ReturnType {
  return await requestFilter({ query })
}
