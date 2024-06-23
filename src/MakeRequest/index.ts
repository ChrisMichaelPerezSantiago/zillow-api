import type { Options } from 'ky'
import ky from 'ky'

class CustomHTTPError extends Error {}

type ResponseType = 'text' | 'json'

type RequestOptions = Options

const headers = {
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'accept-encoding': 'gzip, deflate, sdch, br',
  'accept-language': 'en-GB,en;q=0.8,en-US;q=0.6,ml;q=0.4',
  'cache-control': 'max-age=0',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
}

export async function makeRequest(url: string, responseType: ResponseType = 'json', options: RequestOptions = {}): Promise<any> {
  try {
    const response = await ky(url, { ...options, headers })

    if (!response.ok)
      throw new CustomHTTPError(`Fetch error: ${response.statusText}`)

    return await response[`${responseType}`]()
  }
  catch (error) {
    throw new Error(`Error making request to ${url}: ${(error)}`)
  }
}
