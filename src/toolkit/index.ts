import _ from 'lodash'

const { toNumber } = _

export default {
  extractNumber: (str: string): number | null => {
    if (!str) {
      return null
    }

    // Use a regular expression to match the first sequence of digits
    const match = str.match(/\d+/)

    // If a match is found, convert it to a number; otherwise, return null
    return match ? toNumber(match[0]) : null
  },
}
