import { writeFileSync } from 'node:fs'
import { getCurrentHomeDetails } from '../src'

// (async () => {
//   const result = await agentFilter({
//     query: {
//       page: 1,
//       locationText: '00729',
//       language: 'spanish-speaking',
//       specialty: 'buyersagent-agent',
//     },
//   })
//   console.log(JSON.stringify(result, null, 2))
// })()

// (async () => {
//   const profileLink = '/profile/arrietarealtypr'
//   const result = await getAgentProfile(profileLink)

//   console.log(JSON.stringify(result, null, 2))
// })()

(async () => {
  const listing_url = '/homedetails/2435-Aspen-Rd-UNIT-104-Ames-IA-50010/114303858_zpid/'
  const result = await getCurrentHomeDetails(listing_url)

  console.log(JSON.stringify(result, null, 2))
  writeFileSync('result.json', JSON.stringify(result, null, 2))
})()
