# ✓ Custom Zillow API Scraper
> The Custom Zillow API Scraper is a tool designed to collect real estate data from Zillow. It fetches property details, location data, photos, and historical prices, ideal for real estate analysis, market research, and investment opportunities.

# In Development ... 

## 📦 Installation
```shell
npm install zillow-api
yarn add zillow-api
```

# 📚 Documentation

# `fn agentFilter({query}: Filter)`
|  @interface          | @member             |     @type     |  @values                                                               |
|----------------------|---------------------|:-------------:|-----------------------------------------------------------------------:|
|  Filter              | query.page          |  number       |                                                                        |
|                      | query.locationText  |  string       | Neighborhood/City/Zip                                                                       |
|                      | query.language      |  Language     |  'english-speaking', 'arabic-speaking', 'bengali-speaking', 'cantonese-speaking', 'farsi-speaking', 'french-speaking', 'german-speaking', 'greek-speaking', 'hebrew-speaking', 'hindi-speaking', 'hungarian-speaking', 'italian-speaking', 'japanese-speaking', 'korean-speaking', 'mandarin-speaking', 'polish-speaking', 'portuguese-speaking', 'russian-speaking', 'spanish-speaking', 'filipino-speaking', 'thai-speaking', 'turkish-speaking', 'vietnamese-speaking'|
|                      | query.specialty     |  Specialty    |  'any', 'buyersagent-agent', 'listingagent-agent', 'relocation-agent', 'foreclosure-agent', 'shortsale-agent', 'consulting-agent' |

## Example
```typescript
const result = await agentFilter({
  query: {
    page: 1,
    locationText: '00729',
    language: 'spanish-speaking',
    specialty: 'buyersagent-agent',
  },
})
```

## Response
```json
{
  "featuredAgents": [
    {
      "fullName": "Ricardo Garcia Jay Dean Nelson Team",
      "profileLink": "/profile/jaynelson25359753/",
      "profilePhotoSrc": "https://photos.zillowstatic.com/fp/05ec7385d6564fc21ad593f2adc58872-h_g.jpg",
      "phoneNumber": "(240) 898-4337",
      "reviewRating": 5,
      "numReviews": 82,
      "reviewLink": "/profile/jaynelson25359753/#reviews",
      "isTopAgent": false
    }
  ],
  "mapUrl": "https://maps.googleapis.com/maps/api/staticmap?center=18.369479,-65.903507&zoom=9&size=400x160&maptype=roadmap&key=AIzaSyCadFmqeT-wY9jYJ9TJi5x8J1GzggZ5oFQ&style=feature%3Aadministrative.land_parcel%7Celement%3Aall%7Cvisibility%3Aoff%7C&style=feature%3Aadministrative.locality%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Aadministrative.neighborhood%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Aadministrative.province%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Alandscape%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Alandscape.man_made%7Celement%3Ageometry%7Csaturation%3A-100%7C&style=feature%3Alandscape.man_made%7Celement%3Ageometry.stroke%7Ccolor%3A0xdcdcdc%7C&style=feature%3Alandscape.natural%7Celement%3Aall%7Ccolor%3A0xe6e6e6%7C&style=feature%3Alandscape.natural%7Celement%3Alabels.text.fill%7Ccolor%3A0x7f7f7f%7C&style=feature%3Alandscape.natural.landcover%7Celement%3Aall%7Ccolor%3A0xe6e6e6%7C&style=feature%3Alandscape.natural.terrain%7Celement%3Aall%7Ccolor%3A0xe6e6e6%7C&style=feature%3Apoi%7Celement%3Ageometry.fill%7Ccolor%3A0xd6d6d6%7C&style=feature%3Apoi%7Celement%3Alabels.text%7Cvisibility%3Aoff%7C&style=feature%3Apoi.attraction%7Celement%3Aall%7Cvisibility%3Aoff%7C&style=feature%3Apoi.business%7Celement%3Aall%7Cvisibility%3Aoff%7C&style=feature%3Apoi.government%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Apoi.medical%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Apoi.medical%7Celement%3Alabels.text%7Cvisibility%3Aon%7C&style=feature%3Apoi.park%7Celement%3Aall%7Ccolor%3A0xb0d896%7C&style=feature%3Apoi.park%7Celement%3Alabels%7Cvisibility%3Aon%7Cweight%3A2.5%7C&style=feature%3Apoi.park%7Celement%3Alabels.text.fill%7Ccolor%3A0x787878%7Cinvert_lightness%3Atrue%7C&style=feature%3Apoi.park%7Celement%3Alabels.text.stroke%7Ccolor%3A0xffffff%7C&style=feature%3Apoi.place_of_worship%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Apoi.school%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Apoi.sports_complex%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Aroad%7Celement%3Ageometry%7Ccolor%3A0xf8f8f8%7C&style=feature%3Aroad%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Atransit%7Celement%3Alabels.text%7Cvisibility%3Aoff%7C&style=feature%3Awater%7Celement%3Ageometry%7Ccolor%3A0xb1bdd7%7C&style=feature%3Awater%7Celement%3Alabels.text.fill%7Ccolor%3A0xffffff%7C&style=feature%3Awater%7Celement%3Alabels.text.stroke%7Ccolor%3A0xa0aecc%7C&signature=cTapAZw-GBO6v06hWvrJI7CnwSE=",
  "results": {
    "professionals": [
      {
        "agentLicense": "",
        "businessName": "Conrad Realty",
        "encodedZuid": "X1-ZUtnfvqnx5t7nt_1wtuu",
        "fullName": "Debby Conrad",
        "location": "Rio Grande, PR",
        "phoneNumber": "(787) 462-9919",
        "profileLink": "/profile/conradrealtypr/",
        "profilePhotoSrc": "https://photos.zillowstatic.com/h_g/ISvggwaum6k3f00000000000.jpg",
        "reviewExcerpt": "Al time she call me yo up day every situation.",
        "reviewExcerptDate": "2021-09-01 22:07:00",
        "reviewLink": "/profile/conradrealtypr/#reviews",
        "numTotalReviews": 1,
        "reviews": "1 reviews",
        "reviewStarsRating": 5,
        "saleCountAllTime": 0,
        "saleCountLastYear": 0,
        "salePriceRangeThreeYearMin": 0,
        "salePriceRangeThreeYearMax": 0,
        "isTeamLead": false,
        "isTopAgent": false
      }
      /// ...
    ],
    "total": 135
  }
}
```

# `fn getAgentProfile(profileLink: string)`

## Example
```typescript
const profileLink = '/profile/arrietarealtypr'
const result = await getAgentProfile(profileLink)
```

## Response
```json
{
  "about": {
    "title": null,
    "specialties": [
      "Buyer's agent",
      "Listing agent",
      "Short sale specialist",
      "Consulting/advice",
      "Property Management"
    ],
    "description": "<p>We provide real estate services throughout Puerto Rico. Call us today at (787) 963-5043.</p>\n",
    "yearsExperience": "2006"
  },
  "breadcrumbs": [
    {
      "text": "Puerto Rico",
      "url": "/professionals/real-estate-agent-reviews/pr/"
    },
    {
      "text": "San Juan PR 00926",
      "url": "/professionals/real-estate-agent-reviews/san-juan-pr-00926-pr/"
    },
    {
      "text": "Carolyn Arrieta"
    }
  ],
  "currentUrl": "www.zillow.com/profile/arrietarealtypr",
  "displayUser": {
    "encodedZuid": "X1-ZU10orcwon9whe1_aau4d",
    "screenName": "arrietarealtypr",
    "inCanada": false,
    "name": "Carolyn Arrieta",
    "flag": 50575858,
    "profileTypeIds": [
      1,
      2
    ],
    "profileTypes": [
      "consumer",
      "agent"
    ],
    "sidebarVideoUrl": null,
    "businessAddress": {
      "city": "San Juan PR 00926",
      "state": "PR"
    },
    "businessName": "Arrieta Realty",
    "cpdUserPronouns": "She/Her/Hers",
    "isTopAgent": false,
    "profilePhotoSrc": "https://photos.zillowstatic.com/h_l/IS2bxvjwtg95ng0000000000.jpg",
    "isPremierAgent": false,
    "ratings": {
      "count": 1,
      "average": 5
    }
  },
  "lastYearPastSalesTotal": {
    "count": 0
  },
  "forSaleListings": {
    "listings": [
      {
        "zpid": 352404908,
        "home_type": "singleFamily",
        "address": {
          "line1": "(undisclosed Address)",
          "line2": "Cidra, PR 00739",
          "city": "Cidra",
          "stateOrProvince": "PR",
          "postalCode": "00739"
        },
        "bedrooms": 3,
        "bathrooms": 3,
        "openHouses": "",
        "hasOpenHouse": false,
        "primary_photo_url": "https://photos.zillowstatic.com/fp/cbc5f9e0d0bafa0c4a6fd12f506e08b9-a_a.jpg",
        "price": 575000,
        "price_currency": "usd",
        "status": "fsba",
        "latitude": null,
        "longitude": null,
        "brokerage_name": "CAROLYN ARRIETA",
        "home_marketing_status": "active",
        "home_marketing_type": "forSale",
        "has_vr_model": false,
        "listing_url": "/homedetails/Cidra-PR-00739/352404908_zpid/"
      },
      {
        "zpid": 352317040,
        "home_type": "singleFamily",
        "address": {
          "line1": "844 Cuper Bajo",
          "line2": "San Juan, PR 00926",
          "city": "San Juan",
          "stateOrProvince": "PR",
          "postalCode": "00926"
        },
        "bedrooms": 3,
        "bathrooms": 2,
        "openHouses": "",
        "hasOpenHouse": false,
        "primary_photo_url": "https://photos.zillowstatic.com/fp/fef71aa7aed1a3916a2167d15765b992-a_a.jpg",
        "price": 320000,
        "price_currency": "usd",
        "status": "fsba",
        "latitude": 18.362183,
        "longitude": -66.04165,
        "brokerage_name": "CAROLYN ARRIETA",
        "home_marketing_status": "active",
        "home_marketing_type": "forSale",
        "has_vr_model": false,
        "listing_url": "/homedetails/844-Cuper-Bajo-San-Juan-PR-00926/352317040_zpid/"
      },
      {
        "zpid": 352309902,
        "home_type": "condo",
        "address": {
          "line1": "Carr 115 Cond Mar Azul #7F",
          "line2": "Aguada, PR 00602",
          "city": "Aguada",
          "stateOrProvince": "PR",
          "postalCode": "00602"
        },
        "bedrooms": 3,
        "bathrooms": 2,
        "openHouses": "",
        "hasOpenHouse": false,
        "primary_photo_url": "https://photos.zillowstatic.com/fp/d9fa3b9b2a5fcc67437c5592949d3bc6-a_a.jpg",
        "price": 415000,
        "price_currency": "usd",
        "status": "fsba",
        "latitude": 18.38208,
        "longitude": -67.18203,
        "brokerage_name": "CAROLYN ARRIETA",
        "home_marketing_status": "active",
        "home_marketing_type": "forSale",
        "has_vr_model": false,
        "listing_url": "/homedetails/Carr-115-Cond-Mar-Azul-7F-Aguada-PR-00602/352309902_zpid/"
      },
      {
        "zpid": 352229254,
        "home_type": "multiFamily",
        "address": {
          "line1": "Extension Borinquen Gardens Violeta #TT4B",
          "line2": "San Juan, PR 00926",
          "city": "San Juan",
          "stateOrProvince": "PR",
          "postalCode": "00926"
        },
        "bedrooms": 3,
        "bathrooms": 3,
        "openHouses": "",
        "hasOpenHouse": false,
        "primary_photo_url": "https://photos.zillowstatic.com/fp/21c5ca78c78b5215f342aa90e8a14a9d-a_a.jpg",
        "price": 264500,
        "price_currency": "usd",
        "status": "fsba",
        "latitude": 18.356277,
        "longitude": -66.07607,
        "brokerage_name": "CAROLYN ARRIETA",
        "home_marketing_status": "active",
        "home_marketing_type": "forSale",
        "has_vr_model": false,
        "listing_url": "/homedetails/Extension-Borinquen-Gardens-Violeta-TT4B-San-Juan-PR-00926/352229254_zpid/"
      },
      {
        "zpid": 352173572,
        "home_type": "singleFamily",
        "address": {
          "line1": "Urb San Francisco Violeta #1684",
          "line2": "San Juan, PR 00927",
          "city": "San Juan",
          "stateOrProvince": "PR",
          "postalCode": "00927"
        },
        "bedrooms": 4,
        "bathrooms": 2,
        "openHouses": "",
        "hasOpenHouse": false,
        "primary_photo_url": "https://photos.zillowstatic.com/fp/757bebd5a0870c525d1883de11daad7a-a_a.jpg",
        "price": 575000,
        "price_currency": "usd",
        "status": "fsba",
        "latitude": 18.381872,
        "longitude": -66.08332,
        "brokerage_name": "CAROLYN ARRIETA",
        "home_marketing_status": "active",
        "home_marketing_type": "forSale",
        "has_vr_model": false,
        "listing_url": "/homedetails/Urb-San-Francisco-Violeta-1684-San-Juan-PR-00927/352173572_zpid/"
      }
    ],
    "listing_count": 8
  },
  "forRentListings": {
    "listings": [],
    "listing_count": 0
  },
  "getToKnowMe": {
    "title": null,
    "description": "<p>We provide real estate services throughout Puerto Rico. Call us today at (787) 963-5043.</p>\n",
    "inBusinessSince": "2006",
    "videoUrl": null,
    "specialties": [
      "Buyer's agent",
      "Listing agent",
      "Short sale specialist",
      "Consulting/advice",
      "Property Management"
    ],
    "languages": [
      "Spanish"
    ],
    "facebookUrl": "https://www.facebook.com/arrietarealestate/"
  },
  "isImpersonating": false,
  "isReviewModerator": false,
  "pastSales": {
    "total": 0,
    "past_sales": []
  },
  "preferredLenders": {
    "lenders": []
  },
  "professionalInformation": [
    {
      "term": "Broker address",
      "lines": [
        "Arrieta Realty",
        "Montehiedra Office Center Suite 301",
        "San Juan PR 00926, PR 00926"
      ]
    },
    {
      "term": "Cell phone",
      "description": "(787) 963-5043"
    },
    {
      "term": "Broker phone",
      "description": "(787) 645-5068"
    },
    {
      "term": "Websites",
      "links": [
        {
          "text": "Facebook",
          "url": "https://www.facebook.com/arrietarealestate/"
        }
      ]
    },
    {
      "term": "Screenname",
      "description": "arrietarealtypr"
    },
    {
      "term": "Member since",
      "description": "02/02/2016"
    },
    {
      "term": "Real Estate Licenses",
      "lines": [
        "C-20942 (PR)"
      ]
    },
    {
      "term": "Languages",
      "description": "English, Spanish"
    }
  ],
  "reviewsData": {
    "reviews": [
      {
        "reviewComment": "I recently had the pleasure of working with Carolyn when buying my apartment , and I couldn’t be happier with the experience. From start to finish, she was professional, knowledgeable, and dedicated to ensuring that I found the perfect home.\n\nFrom our first meeting, it was clear that Carolyn was not just interested in making a sale but in finding a property that truly met my needs and preferences.",
        "reviewId": 8339742,
        "subRatings": [
          {
            "description": "Local knowledge",
            "score": 5
          },
          {
            "description": "Process expertise",
            "score": 5
          },
          {
            "description": "Responsiveness",
            "score": 5
          },
          {
            "description": "Negotiation skills",
            "score": 5
          }
        ],
        "reviewee": {
          "screenName": "arrietarealtypr",
          "firstName": "Carolyn",
          "lastName": "Arrieta",
          "suffix": null,
          "showName": true,
          "encodedZuid": "X1-ZU10orcwon9whe1_aau4d"
        },
        "reviewer": {
          "screenName": "sama1018",
          "firstName": null,
          "lastName": null,
          "suffix": null,
          "showName": true,
          "encodedZuid": "X1-ZU16qi292qhfv9l_3fm19"
        },
        "rating": 5,
        "createDate": "2024-06-12T09:15:00",
        "rebuttal": null,
        "workDescription": "South fork, Eagle river, AK."
      }
    ],
    "filters": [
      {
        "prompt": "All reviews",
        "count": 1,
        "serviceTypeIds": null
      }
    ]
  },
  "serviceAreas": [
    {
      "regionId": 5011,
      "text": "Guaynabo, PR",
      "url": "/guaynabo-pr/"
    },
    {
      "regionId": 10656,
      "text": "Caguas, PR",
      "url": "/caguas-pr/"
    },
    {
      "regionId": 15403,
      "text": "Gurabo, PR",
      "url": "/gurabo-pr/"
    },
    {
      "regionId": 20334,
      "text": "San Juan, PR",
      "url": "/san-juan-pr/"
    },
    {
      "regionId": 25208,
      "text": "Humacao, PR",
      "url": "/humacao-pr/"
    },
    {
      "regionId": 31247,
      "text": "Dorado, PR",
      "url": "/dorado-pr/"
    },
    {
      "regionId": 44452,
      "text": "Carolina, PR",
      "url": "/carolina-pr/"
    },
    {
      "regionId": 44495,
      "text": "Cayey, PR",
      "url": "/cayey-pr/"
    },
    {
      "regionId": 51522,
      "text": "Condado, San Juan, PR",
      "url": "/condado-san-juan-pr/"
    },
    {
      "regionId": 217567,
      "text": "Bayamon, PR",
      "url": "/bayamon-pr/"
    }
  ]
}
```

# `fn getCurrentHomeDetails(listing_url: string)`

## Example
```typescript
const listing_url = '/homedetails/2435-Aspen-Rd-UNIT-104-Ames-IA-50010/114303858_zpid/'
const result = await getCurrentHomeDetails(listing_url)
```

## Response
```json
{
  "property": {
    "zpid": 114303858,
    "listingSource": null,
    "listingAccount": null,
    "ownerAccount": null,
    "lfaViewPropertyPageUrl": null,
    "listingOwnerConfigIDs": null,
    "postingPresentationTypes": null,
    "maloneId": "2052867991",
    "city": "Ames",
    "state": "IA",
    "homeStatus": "RECENTLY_SOLD",
    "address": {
      "streetAddress": "2435 Aspen Rd UNIT 104",
      "city": "Ames",
      "state": "IA",
      "zipcode": "50010",
      "neighborhood": null,
      "community": null,
      "subdivision": null
    },
    "isListingClaimedByCurrentSignedInUser": false,
    "isCurrentSignedInAgentResponsible": false,
    "bedrooms": 2,
    "bathrooms": 2,
    "price": 195000,
    "yearBuilt": 2004,
    "streetAddress": "2435 Aspen Rd UNIT 104",
    "zipcode": "50010",
    "isCurrentSignedInUserVerifiedOwner": false,
    "propertyUpdatePageLink": null,
    "moveHomeMapLocationLink": null,
    "propertyEventLogLink": null,
    "editPropertyHistorylink": null,
    "isVerifiedClaimedByCurrentSignedInUser": false,
    "listingDataSource": "Phoenix",
    "responsivePhotos": [
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "subjectType": null,
        "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-p_d.jpg",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_192.jpg",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_384.jpg",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_576.jpg",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_768.jpg",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_960.jpg",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_1152.jpg",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_1344.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_1536.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_192.webp",
              "width": 192
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_384.webp",
              "width": 384
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_576.webp",
              "width": 576
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_768.webp",
              "width": 768
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_960.webp",
              "width": 960
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_1152.webp",
              "width": 1152
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_1344.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-cc_ft_1536.webp",
              "width": 1536
            }
          ]
        }
      }
    ],
    "longitude": -93.64204,
    "latitude": 42.050488,
    "hasBadGeocode": false,
    "isCamo": null,
    "listing_sub_type": {
      "is_FSBA": false,
      "is_newHome": false,
      "is_FSBO": false,
      "is_pending": false,
      "is_bankOwned": false,
      "is_openHouse": false,
      "is_forAuction": false,
      "is_comingSoon": false,
      "is_foreclosure": false
    },
    "streetViewMetadataUrlMediaWallLatLong": "https://maps.googleapis.com/maps/api/streetview/metadata?location=42.050488,-93.64204&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=tEiFYysUxwdD3uysijg0Hv0rqnU=",
    "streetViewMetadataUrlMediaWallAddress": "https://maps.googleapis.com/maps/api/streetview/metadata?location=2435%20Aspen%20Rd%2C%20Ames%2C%20IA%2050010&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=oI7eEKOhP-QADXB2tk0F2XLEjuI=",
    "streetViewServiceUrl": "https://street-view-url.prod.zgk-partner.zillowapi.com?zpid=114303858&address=2435%20Aspen%20Rd%2C%20Ames%2C%20IA%2050010&width=512&height=234&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&maxdistance=5280&lat=42.050488&lon=-93.64204&ttloverrides=%7B%22yesAddressSeconds%22:604800%7D&signature=B1bcQuyiVXqLL-pZ2-VUzsljv6U=",
    "streetView": {
      "addressSources": [
        {
          "width": 192,
          "url": "https://maps.googleapis.com/maps/api/streetview?location=2435%20Aspen%20Rd%2C%20Ames%2C%20IA%2050010&size=192x72&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=rsW1LPNsDVLbm4W3v7u00REzV1U="
        },
        {
          "width": 384,
          "url": "https://maps.googleapis.com/maps/api/streetview?location=2435%20Aspen%20Rd%2C%20Ames%2C%20IA%2050010&size=384x144&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=ID4YGRNjuDP81NhDUY6LF_JMZPg="
        },
        {
          "width": 768,
          "url": "https://maps.googleapis.com/maps/api/streetview?location=2435%20Aspen%20Rd%2C%20Ames%2C%20IA%2050010&size=768x288&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=0BvXXG_poX_W_ZxsxaR6vxfijP4="
        }
      ],
      "latLongSources": [
        {
          "width": 192,
          "url": "https://maps.googleapis.com/maps/api/streetview?location=42.050488,-93.64204&size=192x72&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=RFyReF0CCmxw4XEDtfoXnhp6_GI="
        },
        {
          "width": 384,
          "url": "https://maps.googleapis.com/maps/api/streetview?location=42.050488,-93.64204&size=384x144&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=310bLOFsJ0grY4wMMSfaYGKnkK8="
        },
        {
          "width": 768,
          "url": "https://maps.googleapis.com/maps/api/streetview?location=42.050488,-93.64204&size=768x288&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=ESHUQP7sUQQVCNTVKqDZbvxb8xQ="
        }
      ]
    },
    "staticMap": {
      "sources": [
        {
          "width": 192,
          "url": "https://maps.googleapis.com/maps/api/staticmap?center=42.050488,-93.64204&zoom=13&size=192x144&maptype=roadmap&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&signature=Ud0TJo7WRbhppRnimG3RBjtMJl8=",
          "isHighResolutionStaticMap": null
        },
        {
          "width": 192,
          "url": "https://maps.googleapis.com/maps/api/staticmap?center=42.050488,-93.64204&zoom=15&size=192x144&maptype=roadmap&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&scale=2&signature=k2oGcRlIgaaRNA-YKwcna5b7bE0=",
          "isHighResolutionStaticMap": true
        },
        {
          "width": 384,
          "url": "https://maps.googleapis.com/maps/api/staticmap?center=42.050488,-93.64204&zoom=14&size=384x288&maptype=roadmap&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&signature=O95Ix1t9vqS5bQ39fE107lNw_UQ=",
          "isHighResolutionStaticMap": null
        },
        {
          "width": 384,
          "url": "https://maps.googleapis.com/maps/api/staticmap?center=42.050488,-93.64204&zoom=15&size=384x288&maptype=roadmap&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&scale=2&signature=_RGRNqH44DpFt9KkB5v7tcRlSd0=",
          "isHighResolutionStaticMap": true
        },
        {
          "width": 768,
          "url": "https://maps.googleapis.com/maps/api/staticmap?center=42.050488,-93.64204&zoom=15&size=768x576&maptype=roadmap&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&signature=xSJllpIglcIu3WMn8_CB5TyrdDY=",
          "isHighResolutionStaticMap": null
        },
        {
          "width": 768,
          "url": "https://maps.googleapis.com/maps/api/staticmap?center=42.050488,-93.64204&zoom=15&size=768x576&maptype=roadmap&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&scale=2&signature=XcZsH40mLBlsCAozv-MqaBhEvdY=",
          "isHighResolutionStaticMap": true
        }
      ]
    },
    "livingArea": 1133,
    "homeType": "CONDO",
    "lotSize": null,
    "lotAreaValue": null,
    "lotAreaUnits": "sqft",
    "livingAreaValue": 1133,
    "livingAreaUnitsShort": "sqft",
    "resoFacts": {
      "bathroomsFull": 2,
      "bathroomsThreeQuarter": null,
      "bathroomsHalf": null,
      "bathroomsOneQuarter": null,
      "accessibilityFeatures": null,
      "additionalFeeInfo": null,
      "associations": [
        {
          "feeFrequency": "$276 annually",
          "name": "BRIAN REICHERT",
          "phone": null
        }
      ],
      "associationFee": "$276 annually",
      "associationAmenities": [
        "Clubhouse",
        "Maintenance Grounds",
        "Snow Removal",
        "Pool",
        "Trash"
      ],
      "associationFee2": null,
      "associationFeeIncludes": null,
      "associationName": "BRIAN REICHERT",
      "associationName2": null,
      "associationPhone": null,
      "associationPhone2": null,
      "basementYN": null,
      "buildingName": null,
      "buyerAgencyCompensation": "2.5",
      "buyerAgencyCompensationType": "%",
      "appliances": [
        "Dishwasher",
        "Disposal",
        "Dryer",
        "Microwave",
        "Range",
        "Refrigerator",
        "Washer"
      ],
      "atAGlanceFacts": [
        {
          "factLabel": "Type",
          "factValue": "Condominium, Residential"
        },
        {
          "factLabel": "Year Built",
          "factValue": "2004"
        },
        {
          "factLabel": "Heating",
          "factValue": "Forced Air"
        },
        {
          "factLabel": "Cooling",
          "factValue": "Central Air"
        },
        {
          "factLabel": "Parking",
          "factValue": "Garage"
        },
        {
          "factLabel": "HOA",
          "factValue": "$276 annually"
        },
        {
          "factLabel": "Buyers Agency Fee",
          "factValue": "2.5"
        },
        {
          "factLabel": "Offer Review Date",
          "factValue": null
        }
      ],
      "attic": null,
      "availabilityDate": null,
      "basement": null,
      "bathrooms": 2,
      "bathroomsPartial": null,
      "bathroomsFloat": 2,
      "bedrooms": 2,
      "bodyType": null,
      "canRaiseHorses": false,
      "carportParkingCapacity": null,
      "cityRegion": "Ames",
      "commonWalls": null,
      "communityFeatures": null,
      "cooling": [
        "Central Air"
      ],
      "coveredParkingCapacity": null,
      "cropsIncludedYN": null,
      "developmentStatus": null,
      "doorFeatures": null,
      "electric": null,
      "elevation": null,
      "elevationUnits": null,
      "entryLevel": null,
      "entryLocation": null,
      "exclusions": null,
      "feesAndDues": [
        {
          "type": "HOA",
          "fee": "$276 annually",
          "name": "BRIAN REICHERT",
          "phone": null
        },
        {
          "type": "HOA",
          "fee": null,
          "name": null,
          "phone": null
        }
      ],
      "fencing": null,
      "fireplaceFeatures": null,
      "fireplaces": null,
      "flooring": null,
      "foundationArea": null,
      "furnished": false,
      "garageParkingCapacity": null,
      "gas": null,
      "greenBuildingVerificationType": null,
      "greenEnergyEfficient": null,
      "greenIndoorAirQuality": null,
      "greenSustainability": null,
      "greenWaterConservation": null,
      "hasAssociation": true,
      "hasAttachedGarage": null,
      "hasAttachedProperty": false,
      "hasCooling": true,
      "hasCarport": null,
      "hasElectricOnProperty": null,
      "hasFireplace": null,
      "hasGarage": true,
      "hasHeating": true,
      "hasLandLease": false,
      "hasOpenParking": null,
      "hasSpa": false,
      "hasPrivatePool": null,
      "hasView": false,
      "hasWaterfrontView": null,
      "heating": [
        "Forced Air"
      ],
      "highSchool": null,
      "highSchoolDistrict": "Ames",
      "hoaFee": "$276 annually",
      "hoaFeeTotal": "$276 annually",
      "homeType": "Condo",
      "horseAmenities": null,
      "horseYN": null,
      "interiorFeatures": [
        "Ceiling Fan(s)"
      ],
      "irrigationWaterRightsAcres": null,
      "irrigationWaterRightsYN": null,
      "isSeniorCommunity": null,
      "landLeaseAmount": null,
      "landLeaseExpirationDate": null,
      "laundryFeatures": [
        "Main Level"
      ],
      "levels": "One",
      "listingId": null,
      "lotFeatures": [
        "Level"
      ],
      "lotSize": null,
      "livingQuarters": [],
      "mainLevelBathrooms": null,
      "mainLevelBedrooms": null,
      "marketingType": null,
      "middleOrJuniorSchool": null,
      "middleOrJuniorSchoolDistrict": null,
      "municipality": null,
      "numberOfUnitsInCommunity": null,
      "offerReviewDate": null,
      "onMarketDate": 1706659200000,
      "openParkingCapacity": null,
      "otherEquipment": null,
      "otherFacts": [],
      "otherParking": null,
      "ownershipType": null,
      "parkingCapacity": 0,
      "parkingFeatures": [
        "Garage"
      ],
      "patioAndPorchFeatures": null,
      "poolFeatures": [
        "Association"
      ],
      "pricePerSquareFoot": 172,
      "roadSurfaceType": [
        "Hard Surface"
      ],
      "roofType": null,
      "rooms": [
        {
          "area": null,
          "description": null,
          "dimensions": null,
          "level": null,
          "features": null,
          "roomArea": null,
          "roomAreaSource": null,
          "roomAreaUnits": null,
          "roomDescription": null,
          "roomDimensions": null,
          "roomFeatures": null,
          "roomLength": null,
          "roomLengthWidthSource": null,
          "roomLengthWidthUnits": null,
          "roomLevel": "Main",
          "roomType": "Kitchen",
          "roomWidth": null
        },
        {
          "area": null,
          "description": null,
          "dimensions": null,
          "level": null,
          "features": null,
          "roomArea": null,
          "roomAreaSource": null,
          "roomAreaUnits": null,
          "roomDescription": null,
          "roomDimensions": null,
          "roomFeatures": null,
          "roomLength": null,
          "roomLengthWidthSource": null,
          "roomLengthWidthUnits": null,
          "roomLevel": "Main",
          "roomType": null,
          "roomWidth": null
        },
        {
          "area": null,
          "description": null,
          "dimensions": null,
          "level": null,
          "features": null,
          "roomArea": null,
          "roomAreaSource": null,
          "roomAreaUnits": null,
          "roomDescription": null,
          "roomDimensions": null,
          "roomFeatures": null,
          "roomLength": null,
          "roomLengthWidthSource": null,
          "roomLengthWidthUnits": null,
          "roomLevel": "Main",
          "roomType": "Laundry",
          "roomWidth": null
        },
        {
          "area": null,
          "description": null,
          "dimensions": null,
          "level": null,
          "features": null,
          "roomArea": null,
          "roomAreaSource": null,
          "roomAreaUnits": null,
          "roomDescription": null,
          "roomDimensions": null,
          "roomFeatures": null,
          "roomLength": null,
          "roomLengthWidthSource": null,
          "roomLengthWidthUnits": null,
          "roomLevel": "Main",
          "roomType": "MasterBedroom",
          "roomWidth": null
        },
        {
          "area": null,
          "description": null,
          "dimensions": null,
          "level": null,
          "features": null,
          "roomArea": null,
          "roomAreaSource": null,
          "roomAreaUnits": null,
          "roomDescription": null,
          "roomDimensions": null,
          "roomFeatures": null,
          "roomLength": null,
          "roomLengthWidthSource": null,
          "roomLengthWidthUnits": null,
          "roomLevel": "Main",
          "roomType": "MasterBathroom",
          "roomWidth": null
        },
        {
          "area": null,
          "description": null,
          "dimensions": null,
          "level": null,
          "features": null,
          "roomArea": null,
          "roomAreaSource": null,
          "roomAreaUnits": null,
          "roomDescription": null,
          "roomDimensions": null,
          "roomFeatures": null,
          "roomLength": null,
          "roomLengthWidthSource": null,
          "roomLengthWidthUnits": null,
          "roomLevel": "Main",
          "roomType": "Bedroom2",
          "roomWidth": null
        },
        {
          "area": null,
          "description": null,
          "dimensions": null,
          "level": null,
          "features": null,
          "roomArea": null,
          "roomAreaSource": null,
          "roomAreaUnits": null,
          "roomDescription": null,
          "roomDimensions": null,
          "roomFeatures": null,
          "roomLength": null,
          "roomLengthWidthSource": null,
          "roomLengthWidthUnits": null,
          "roomLevel": "Main",
          "roomType": "LivingRoom",
          "roomWidth": null
        },
        {
          "area": null,
          "description": null,
          "dimensions": null,
          "level": null,
          "features": null,
          "roomArea": null,
          "roomAreaSource": null,
          "roomAreaUnits": null,
          "roomDescription": null,
          "roomDimensions": null,
          "roomFeatures": null,
          "roomLength": null,
          "roomLengthWidthSource": null,
          "roomLengthWidthUnits": null,
          "roomLevel": "Main",
          "roomType": null,
          "roomWidth": null
        }
      ],
      "securityFeatures": null,
      "sewer": [
        "Public Sewer"
      ],
      "spaFeatures": null,
      "specialListingConditions": "Standard",
      "stories": null,
      "storiesTotal": null,
      "subdivisionName": null,
      "totalActualRent": null,
      "utilities": null,
      "view": [],
      "waterSource": [
        "Public"
      ],
      "waterBodyName": null,
      "waterfrontFeatures": null,
      "waterView": null,
      "waterViewYN": null,
      "windowFeatures": null,
      "yearBuilt": 2004,
      "zoning": "F-VR",
      "zoningDescription": null,
      "aboveGradeFinishedArea": "1,133",
      "additionalParcelsDescription": null,
      "architecturalStyle": null,
      "belowGradeFinishedArea": null,
      "builderModel": null,
      "builderName": null,
      "buildingArea": "1,133",
      "buildingAreaSource": null,
      "buildingFeatures": null,
      "constructionMaterials": [],
      "exteriorFeatures": [],
      "foundationDetails": [],
      "frontageLength": null,
      "frontageType": null,
      "hasAdditionalParcels": false,
      "hasPetsAllowed": null,
      "hasRentControl": null,
      "hasHomeWarranty": false,
      "inclusions": null,
      "incomeIncludes": null,
      "isNewConstruction": null,
      "listingTerms": null,
      "livingAreaRange": null,
      "livingAreaRangeUnits": null,
      "livingArea": "1,133 sqft",
      "lotSizeDimensions": null,
      "numberOfUnitsVacant": null,
      "otherStructures": null,
      "ownership": null,
      "parcelNumber": "0528490915",
      "propertyCondition": null,
      "propertySubType": [
        "Condominium",
        "Residential"
      ],
      "structureType": null,
      "topography": null,
      "vegetation": null,
      "woodedArea": null,
      "yearBuiltEffective": null,
      "listAOR": null,
      "elementarySchool": null,
      "elementarySchoolDistrict": null
    },
    "isUndisclosedAddress": false,
    "formattedChip": {
      "location": [
        {
          "fullValue": "2435 Aspen Rd UNIT 104"
        },
        {
          "fullValue": "Ames, IA 50010"
        }
      ]
    },
    "zestimate": 195000,
    "rentZestimate": 1220,
    "currency": "USD",
    "hideZestimate": false,
    "dateSoldString": "2024-06-17",
    "taxAssessedValue": 158700,
    "taxAssessedYear": 2023,
    "contingentListingType": null,
    "attributionInfo": {
      "trueStatus": null,
      "listingAgreement": null,
      "agentEmail": null,
      "agentLicenseNumber": null,
      "agentName": "Tyler/Megan Frederiksen",
      "agentPhoneNumber": "515-733-2922",
      "attributionTitle": null,
      "brokerName": "Norsemen Realty Team - Friedrich Iowa Realty",
      "brokerPhoneNumber": "515-733-2922",
      "buyerAgentMemberStateLicense": "S597830",
      "buyerAgentName": "Gina Marie McAndrews",
      "buyerBrokerageName": "CENTURY 21 SIGNATURE-Ames",
      "coAgentLicenseNumber": null,
      "coAgentName": null,
      "coAgentNumber": null,
      "lastChecked": "2024-06-23 15:56:05",
      "lastUpdated": "2024-06-18 10:52:09",
      "listingOffices": [
        {
          "associatedOfficeType": "listOffice",
          "officeName": "Norsemen Realty Team - Friedrich Iowa Realty"
        },
        {
          "associatedOfficeType": "buyerOffice",
          "officeName": "CENTURY 21 SIGNATURE-Ames"
        }
      ],
      "listingAgents": [
        {
          "associatedAgentType": "listAgent",
          "memberFullName": "Tyler/Megan Frederiksen",
          "memberStateLicense": "S6306700"
        },
        {
          "associatedAgentType": "buyerAgent",
          "memberFullName": "Gina Marie McAndrews",
          "memberStateLicense": "S597830"
        }
      ],
      "mlsDisclaimer": "Information being provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data is deemed reliable but not accurate.\n\nThe listing broker’s offer of compensation is made only to participants of the MLS where the listing is filed. ",
      "mlsId": "63651",
      "mlsName": "CIBR",
      "providerLogo": "https://photos.zillowstatic.com/fp/68f4b3adb7d0fb85b60cdedd5127bf8b-zillow_web_95_35.jpg"
    },
    "country": "USA",
    "monthlyHoaFee": 23,
    "mortgageZHLRates": {
      "thirtyYearFixedBucket": {
        "rate": null,
        "rateSource": "ZGMI",
        "lastUpdated": 1719185159391
      }
    },
    "propertyTaxRate": 1.4,
    "listingMetadata": {
      "FlexibleLayoutAB": true,
      "mustAttributeOfficeNameBeforeAgentName": false,
      "mustDisplayAttributionListAgentEmail": false,
      "mustDisplayAttributionListAgentPhone": true,
      "mustDisplayAttributionListingOfficePhone": false,
      "mustDisplayDisclaimerBelowAttribution": false,
      "mustHighlightAgentName": null,
      "mustHighlightListOfficeName": false,
      "mustMakeListingAgentContactable": false,
      "FlexibleLayoutB": true,
      "FlexibleLayoutC": true,
      "FlexibleLayoutD": true,
      "FlexibleLayoutE": true,
      "FlexibleLayoutF": false,
      "FlexibleLayoutG": false,
      "FlexibleLayoutH": true,
      "FlexibleLayoutI": true,
      "FlexibleLayoutJ": false,
      "FlexibleLayoutK": false,
      "FlexibleLayoutL": false,
      "FlexibleLayoutM": true,
      "FlexibleLayoutN": true,
      "FlexibleLayoutO": true,
      "FlexibleLayoutP": true,
      "FlexibleLayoutQ": false,
      "FlexibleLayoutR": true,
      "FlexibleLayoutS": false,
      "FlexibleLayoutT": false,
      "FlexibleLayoutU": false,
      "FlexibleLayoutV": false,
      "FlexibleLayoutW": false,
      "FlexibleLayoutX": false,
      "FlexibleLayoutY": false,
      "FlexibleLayoutZ": false,
      "FlexibleLayoutAA": true,
      "passwordRequiredForZestimateMarketAnalysis": false,
      "canShowAutomatedValuationDisplay": true,
      "canShowTaxHistory": true,
      "canShowPriceHistory": true,
      "canShowUserGeneratedContent": true,
      "isAdsRestricted": false,
      "hidePriceAdjustmentFlexField": false,
      "canCommingleComparables": true,
      "canShowComparables": true,
      "isSuperTrafficOptimized": false,
      "mustDisplayFeedLogoInContactBox": false,
      "canShowCroppedPhotos": true,
      "canShowNonIDXMedia": true,
      "canShowOnMap": true,
      "comminglingCategory": true,
      "mustDisplayAttributionAboveLocalFacts": false,
      "mustDisplayAuctionStatusAsSold": false,
      "mustHighlightMlsId": null,
      "mustHighlightMlsStatus": false,
      "mustHighlightMarketingType": false,
      "canShowZillowLogoInHeader": true,
      "canShowPrequalifiedLinkInChip": true,
      "comminglingCategoryIsRulesApplicable": true,
      "mustPreferMlsPhotos": false
    },
    "photoCount": 17,
    "isPremierBuilder": false,
    "isShowcaseListing": false,
    "postingUrl": null,
    "ssid": 529,
    "brokerId": null,
    "listingSubType": {
      "isFSBA": false,
      "isPending": false,
      "isNewHome": false,
      "isForeclosure": false,
      "isBankOwned": false,
      "isForAuction": false,
      "isOpenHouse": false,
      "isComingSoon": false,
      "isFSBO": false
    },
    "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-104-Ames-IA-50010/114303858_zpid/",
    "tourViewCount": 0,
    "postingContact": {
      "name": "Tyler/Megan Frederiksen",
      "photo": null
    },
    "vrModel": {
      "vrModelGuid": null,
      "revisionId": null
    },
    "richMedia": null,
    "isZillowOwned": false,
    "hasPublicVideo": false,
    "primaryPublicVideo": null,
    "richMediaVideos": null,
    "lastSoldPrice": 195000,
    "livingAreaUnits": "Square Feet",
    "newConstructionType": null,
    "thirdPartyVirtualTour": {
      "lightboxUrl": null,
      "approved": false,
      "providerKey": null
    },
    "hasApprovedThirdPartyVirtualTourUrl": false,
    "isHousingConnector": false,
    "responsivePhotosOriginalRatio": [
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      }
    ],
    "streetViewTileImageUrlMediumLatLong": "https://maps.googleapis.com/maps/api/streetview?location=42.050488,-93.64204&size=400x250&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=TDxFgQWBtuVHrFB8NgpaOF1Y3kY=",
    "streetViewTileImageUrlMediumAddress": "https://maps.googleapis.com/maps/api/streetview?location=2435%20Aspen%20Rd%2C%20Ames%2C%20IA%2050010&size=400x250&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=iOgC5KWuO0aHIiC2LmMqRu6pRnA=",
    "streetViewMetadataUrlMapLightboxAddress": "https://maps.googleapis.com/maps/api/streetview/metadata?location=2435%20Aspen%20Rd%2C%20Ames%2C%20IA%2050010&key=AIzaSyBV4lXhV-qzQOegyA3m0_AvGy9F21HIyOQ&source=outdoor&signature=lOqYq16UyHpA_ZAZFTVaaQ7nv8w=",
    "thumb": [
      {
        "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-p_a.jpg"
      }
    ],
    "neighborhoodMapThumb": [
      {
        "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-p_c.jpg"
      }
    ],
    "stateId": 19,
    "countyId": 735,
    "cityId": 30210,
    "isNonOwnerOccupied": false,
    "forecast": null,
    "zestimateMinus30": "197240",
    "restimateMinus30": "1200",
    "zestimateLowPercent": "5",
    "zestimateHighPercent": "5",
    "restimateLowPercent": "6",
    "restimateHighPercent": "5",
    "adTargets": {
      "aamgnrc2": "Unit 104",
      "aamgnrc1": "2435 Aspen Rd UNIT 104",
      "bd": "2",
      "fsbid": "529",
      "city": "Ames",
      "proptp": "cnd",
      "pid": "114303858",
      "zestibuck": "150-199k",
      "listtp": "buy_sold",
      "sqftrange": "1000-1499",
      "price": "195000",
      "sqft": "1133",
      "state": "IA",
      "mlong": "-93.64204",
      "cnty": "Story",
      "prange": "150-199k",
      "zip": "50010",
      "mlat": "42.050488",
      "zusr": "true",
      "price_band": "z100",
      "yrblt": "2000-2009",
      "zestimate": "195000",
      "premieragent": "no",
      "dma": "65",
      "guid": "fb4b4460-f86e-4c5a-a3a4-aeb3d5149bbe",
      "ssid": "529"
    },
    "description": "This is convenient living at its finest.  Main floor condo living that comes with a detached single car garage.  Many updates in this unit including appliances and flooring.  Fresh paint and great blinds so you can move right in and make it your own.  HOA includes clubhouse, pool, common area maintenance, lawn, snow, and garbage.",
    "whatILove": null,
    "pals": [],
    "listedBy": [
      {
        "id": "LISTING_AGENT",
        "elements": [
          {
            "id": "NAME",
            "text": "Tyler/Megan Frederiksen",
            "action": null
          },
          {
            "id": "PHONE",
            "text": "515-733-2922",
            "action": null
          }
        ],
        "textStyle": null
      },
      {
        "id": "BROKER",
        "elements": [
          {
            "id": "NAME",
            "text": "Norsemen Realty Team - Friedrich Iowa Realty",
            "action": null
          }
        ],
        "textStyle": null
      }
    ],
    "countyFIPS": "19169",
    "parcelId": "0528490915",
    "taxHistory": [
      {
        "time": 1687562759358,
        "taxPaid": 2534,
        "taxIncreaseRate": 0.012789768,
        "value": 158700,
        "valueIncreaseRate": -0.005015674
      },
      {
        "time": 1656026759358,
        "taxPaid": 2502,
        "taxIncreaseRate": 0.053030305,
        "value": 159500,
        "valueIncreaseRate": 0
      },
      {
        "time": 1624490759358,
        "taxPaid": 2376,
        "taxIncreaseRate": -0.046533637,
        "value": 159500,
        "valueIncreaseRate": 0.10995129
      },
      {
        "time": 1592954759358,
        "taxPaid": 2491.96,
        "taxIncreaseRate": -0.033472206,
        "value": 143700,
        "valueIncreaseRate": 0
      },
      {
        "time": 1561332359358,
        "taxPaid": 2578.26,
        "taxIncreaseRate": 0.09601263,
        "value": 143700,
        "valueIncreaseRate": 0
      },
      {
        "time": 1529796359358,
        "taxPaid": 2352.4,
        "taxIncreaseRate": 0.07024563,
        "value": 143700,
        "valueIncreaseRate": 0
      },
      {
        "time": 1498260359358,
        "taxPaid": 2198,
        "taxIncreaseRate": 0.024231128,
        "value": 143700,
        "valueIncreaseRate": 0.10030628
      },
      {
        "time": 1466724359358,
        "taxPaid": 2146,
        "taxIncreaseRate": 0,
        "value": 130600,
        "valueIncreaseRate": 0
      },
      {
        "time": 1435101959358,
        "taxPaid": 2146,
        "taxIncreaseRate": 0.0046816478,
        "value": 130600,
        "valueIncreaseRate": 0
      },
      {
        "time": 1403565959358,
        "taxPaid": 2136,
        "taxIncreaseRate": 0,
        "value": 130600,
        "valueIncreaseRate": 0
      },
      {
        "time": 1372029959358,
        "taxPaid": null,
        "taxIncreaseRate": 0,
        "value": 130600,
        "valueIncreaseRate": 0
      },
      {
        "time": 1340493959358,
        "taxPaid": null,
        "taxIncreaseRate": 0,
        "value": 130600,
        "valueIncreaseRate": 0
      },
      {
        "time": 1308871559358,
        "taxPaid": 1948,
        "taxIncreaseRate": 0.026343519,
        "value": null,
        "valueIncreaseRate": 0
      },
      {
        "time": 1277335559358,
        "taxPaid": 1898,
        "taxIncreaseRate": 0.06989853,
        "value": null,
        "valueIncreaseRate": 0
      },
      {
        "time": 1245799559358,
        "taxPaid": 1774,
        "taxIncreaseRate": 0.03259604,
        "value": null,
        "valueIncreaseRate": 0
      },
      {
        "time": 1214263559358,
        "taxPaid": 1718,
        "taxIncreaseRate": 0,
        "value": null,
        "valueIncreaseRate": 0
      }
    ],
    "priceHistory": [
      {
        "date": "2024-06-17",
        "time": 1718582400000,
        "price": 195000,
        "pricePerSquareFoot": 172,
        "priceChangeRate": -0.02451225612806403,
        "event": "Sold",
        "source": "CIBR",
        "buyerAgent": {
          "photo": {
            "url": "https://photos.zillowstatic.com/h_e/ISalrrcqux1zfn.jpg"
          },
          "profileUrl": "/profile/Gina-McAndrews/",
          "name": "Gina McAndrews"
        },
        "sellerAgent": {
          "photo": {
            "url": "https://photos.zillowstatic.com/h_e/ISpxa8suwlcv5q0000000000.jpg"
          },
          "profileUrl": "/profile/Tyler-Frederiksen/",
          "name": "Tyler Frederiksen"
        },
        "showCountyLink": false,
        "postingIsRental": false,
        "attributeSource": {
          "infoString1": "63651",
          "infoString2": "CIBR",
          "infoString3": "https://photos.zillowstatic.com/fp/68f4b3adb7d0fb85b60cdedd5127bf8b-zillow_web_logo_inf_11.jpg"
        }
      },
      {
        "date": "2024-01-19",
        "time": 1705622400000,
        "price": 199900,
        "pricePerSquareFoot": 176,
        "priceChangeRate": 0.26518987341772154,
        "event": "Listed for sale",
        "source": "CIBR",
        "buyerAgent": null,
        "sellerAgent": null,
        "showCountyLink": false,
        "postingIsRental": false,
        "attributeSource": {
          "infoString1": "63651",
          "infoString2": "CIBR",
          "infoString3": "https://photos.zillowstatic.com/fp/68f4b3adb7d0fb85b60cdedd5127bf8b-zillow_web_logo_inf_11.jpg"
        }
      },
      {
        "date": "2017-06-28",
        "time": 1498608000000,
        "price": 158000,
        "pricePerSquareFoot": 139,
        "priceChangeRate": 0.17037037037037037,
        "event": "Sold",
        "source": "CIBR",
        "buyerAgent": null,
        "sellerAgent": {
          "photo": {
            "url": "https://photos.zillowstatic.com/h_e/ISek02egs70fet0000000000.jpg"
          },
          "profileUrl": "/profile/LaraHallgrimsdottir/",
          "name": "Lara Hallgrimsdottir"
        },
        "showCountyLink": false,
        "postingIsRental": false,
        "attributeSource": {
          "infoString1": "47293",
          "infoString2": "CIBR",
          "infoString3": "https://photos.zillowstatic.com/fp/68f4b3adb7d0fb85b60cdedd5127bf8b-zillow_web_logo_inf_11.jpg"
        }
      },
      {
        "date": "2010-06-23",
        "time": 1277251200000,
        "price": 135000,
        "pricePerSquareFoot": 119,
        "priceChangeRate": 0.034482758620689655,
        "event": "Sold",
        "source": "CIBR",
        "buyerAgent": {
          "photo": {
            "url": "https://photos.zillowstatic.com/h_e/ISek02egs70fet0000000000.jpg"
          },
          "profileUrl": "/profile/LaraHallgrimsdottir/",
          "name": "Lara Hallgrimsdottir"
        },
        "sellerAgent": {
          "photo": {
            "url": "https://photos.zillowstatic.com/h_e/ISek02egs70fet0000000000.jpg"
          },
          "profileUrl": "/profile/LaraHallgrimsdottir/",
          "name": "Lara Hallgrimsdottir"
        },
        "showCountyLink": false,
        "postingIsRental": false,
        "attributeSource": {
          "infoString1": "29759",
          "infoString2": "CIBR",
          "infoString3": "https://photos.zillowstatic.com/fp/68f4b3adb7d0fb85b60cdedd5127bf8b-zillow_web_logo_inf_11.jpg"
        }
      },
      {
        "date": "2006-02-09",
        "time": 1139443200000,
        "price": 130500,
        "pricePerSquareFoot": 115,
        "priceChangeRate": 0,
        "event": "Sold",
        "source": "Public Record",
        "buyerAgent": null,
        "sellerAgent": null,
        "showCountyLink": false,
        "postingIsRental": false,
        "attributeSource": {
          "infoString1": null,
          "infoString2": "Public Record",
          "infoString3": null
        }
      }
    ],
    "homeValues": null,
    "parentRegion": {
      "name": "Somerset Village"
    },
    "nearbyHomes": [
      {
        "zpid": 93953862,
        "miniCardPhotos": [
          {
            "url": "https://photos.zillowstatic.com/fp/12498a1a6b825293cc88b767ab2ee462-p_c.jpg"
          }
        ],
        "price": 178000,
        "currency": "USD",
        "bedrooms": 2,
        "bathrooms": 2,
        "livingArea": 988,
        "livingAreaValue": 988,
        "livingAreaUnits": "Square Feet",
        "livingAreaUnitsShort": "sqft",
        "listingMetadata": {
          "comminglingCategoryIsRulesApplicable": false
        },
        "lotSize": 2792,
        "lotAreaValue": 2792,
        "lotAreaUnits": "Square Feet",
        "address": {
          "streetAddress": "2435 Aspen Rd UNIT 101",
          "city": "Ames",
          "state": "IA",
          "zipcode": "50010"
        },
        "parentRegion": null,
        "formattedChip": {
          "location": [
            {
              "fullValue": "2435 Aspen Rd UNIT 101"
            },
            {
              "fullValue": null
            }
          ]
        },
        "latitude": 42.05055,
        "longitude": -93.64186,
        "homeStatus": "OTHER",
        "homeType": "CONDO",
        "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-101-Ames-IA-50010/93953862_zpid/",
        "hdpTypeDimension": "Zestimate",
        "propertyTypeDimension": "Condo",
        "listingTypeDimension": "Unknown Listed By",
        "listing_sub_type": {
          "is_newHome": false,
          "is_forAuction": false,
          "is_bankOwned": false,
          "is_foreclosure": false,
          "is_FSBO": false,
          "is_comingSoon": false,
          "is_FSBA": false
        },
        "providerListingID": null,
        "attributionInfo": {
          "mlsId": null,
          "mlsName": null,
          "providerLogo": null,
          "agentName": null,
          "agentPhoneNumber": null,
          "brokerName": null,
          "brokerPhoneNumber": null,
          "trueStatus": null
        },
        "isShowcaseListing": false,
        "isPremierBuilder": false,
        "state": "IA",
        "newConstructionType": null
      },
      {
        "zpid": 93953866,
        "miniCardPhotos": [
          {
            "url": "https://maps.googleapis.com/maps/api/streetview?location=2435+Aspen+Rd%2C+Ames%2C+IA+50010&size=316x234&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=MdJkXIGqv7a1gC77laxLPrIdPd0="
          }
        ],
        "price": 175800,
        "currency": "USD",
        "bedrooms": 2,
        "bathrooms": 2,
        "livingArea": 988,
        "livingAreaValue": 988,
        "livingAreaUnits": "Square Feet",
        "livingAreaUnitsShort": "sqft",
        "listingMetadata": {
          "comminglingCategoryIsRulesApplicable": false
        },
        "lotSize": 2787,
        "lotAreaValue": 2787,
        "lotAreaUnits": "Square Feet",
        "address": {
          "streetAddress": "2435 Aspen Rd UNIT 205",
          "city": "Ames",
          "state": "IA",
          "zipcode": "50010"
        },
        "parentRegion": null,
        "formattedChip": {
          "location": [
            {
              "fullValue": "2435 Aspen Rd UNIT 205"
            },
            {
              "fullValue": null
            }
          ]
        },
        "latitude": 42.05055,
        "longitude": -93.64186,
        "homeStatus": "OTHER",
        "homeType": "CONDO",
        "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-205-Ames-IA-50010/93953866_zpid/",
        "hdpTypeDimension": "Zestimate",
        "propertyTypeDimension": "Condo",
        "listingTypeDimension": "Unknown Listed By",
        "listing_sub_type": {
          "is_newHome": false,
          "is_forAuction": false,
          "is_bankOwned": false,
          "is_foreclosure": false,
          "is_FSBO": false,
          "is_comingSoon": false,
          "is_FSBA": false
        },
        "providerListingID": null,
        "attributionInfo": {
          "mlsId": null,
          "mlsName": null,
          "providerLogo": null,
          "agentName": null,
          "agentPhoneNumber": null,
          "brokerName": null,
          "brokerPhoneNumber": null,
          "trueStatus": null
        },
        "isShowcaseListing": false,
        "isPremierBuilder": false,
        "state": "IA",
        "newConstructionType": null
      },
      {
        "zpid": 114303857,
        "miniCardPhotos": [
          {
            "url": "https://photos.zillowstatic.com/fp/1f35751fdabe96e9e28d3fec2e95fd0a-p_c.jpg"
          }
        ],
        "price": 187900,
        "currency": "USD",
        "bedrooms": 2,
        "bathrooms": 2,
        "livingArea": 1111,
        "livingAreaValue": 1111,
        "livingAreaUnits": "Square Feet",
        "livingAreaUnitsShort": "sqft",
        "listingMetadata": {
          "comminglingCategoryIsRulesApplicable": false
        },
        "lotSize": 3049,
        "lotAreaValue": 3049.2,
        "lotAreaUnits": "Square Feet",
        "address": {
          "streetAddress": "2435 Aspen Rd UNIT 103",
          "city": "Ames",
          "state": "IA",
          "zipcode": "50010"
        },
        "parentRegion": null,
        "formattedChip": {
          "location": [
            {
              "fullValue": "2435 Aspen Rd UNIT 103"
            },
            {
              "fullValue": null
            }
          ]
        },
        "latitude": 42.05055,
        "longitude": -93.64186,
        "homeStatus": "OTHER",
        "homeType": "CONDO",
        "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-103-Ames-IA-50010/114303857_zpid/",
        "hdpTypeDimension": "Zestimate",
        "propertyTypeDimension": "Condo",
        "listingTypeDimension": "Unknown Listed By",
        "listing_sub_type": {
          "is_newHome": false,
          "is_forAuction": false,
          "is_bankOwned": false,
          "is_foreclosure": false,
          "is_FSBO": false,
          "is_comingSoon": false,
          "is_FSBA": false
        },
        "providerListingID": null,
        "attributionInfo": {
          "mlsId": null,
          "mlsName": null,
          "providerLogo": null,
          "agentName": null,
          "agentPhoneNumber": null,
          "brokerName": null,
          "brokerPhoneNumber": null,
          "trueStatus": null
        },
        "isShowcaseListing": false,
        "isPremierBuilder": false,
        "state": "IA",
        "newConstructionType": null
      },
      {
        "zpid": 114303859,
        "miniCardPhotos": [
          {
            "url": "https://photos.zillowstatic.com/fp/fa1b24d33c1c37bae3e71320e4b6c27f-p_c.jpg"
          }
        ],
        "price": 182500,
        "currency": "USD",
        "bedrooms": 2,
        "bathrooms": 2,
        "livingArea": 988,
        "livingAreaValue": 988,
        "livingAreaUnits": "Square Feet",
        "livingAreaUnitsShort": "sqft",
        "listingMetadata": {
          "comminglingCategoryIsRulesApplicable": false
        },
        "lotSize": 2792,
        "lotAreaValue": 2792,
        "lotAreaUnits": "Square Feet",
        "address": {
          "streetAddress": "2435 Aspen Rd UNIT 105",
          "city": "Ames",
          "state": "IA",
          "zipcode": "50010"
        },
        "parentRegion": null,
        "formattedChip": {
          "location": [
            {
              "fullValue": "2435 Aspen Rd UNIT 105"
            },
            {
              "fullValue": null
            }
          ]
        },
        "latitude": 42.05055,
        "longitude": -93.64186,
        "homeStatus": "OTHER",
        "homeType": "MULTI_FAMILY",
        "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-105-Ames-IA-50010/114303859_zpid/",
        "hdpTypeDimension": "Zestimate",
        "propertyTypeDimension": "Multi Family",
        "listingTypeDimension": "Unknown Listed By",
        "listing_sub_type": {
          "is_newHome": false,
          "is_forAuction": false,
          "is_bankOwned": false,
          "is_foreclosure": false,
          "is_FSBO": false,
          "is_comingSoon": false,
          "is_FSBA": false
        },
        "providerListingID": null,
        "attributionInfo": {
          "mlsId": null,
          "mlsName": null,
          "providerLogo": null,
          "agentName": null,
          "agentPhoneNumber": null,
          "brokerName": null,
          "brokerPhoneNumber": null,
          "trueStatus": null
        },
        "isShowcaseListing": false,
        "isPremierBuilder": false,
        "state": "IA",
        "newConstructionType": null
      },
      {
        "zpid": 114303861,
        "miniCardPhotos": [
          {
            "url": "https://photos.zillowstatic.com/fp/a6030290a4705811e482c3e5780bd86c-p_c.jpg"
          }
        ],
        "price": 195500,
        "currency": "USD",
        "bedrooms": 2,
        "bathrooms": 2,
        "livingArea": 1133,
        "livingAreaValue": 1133,
        "livingAreaUnits": "Square Feet",
        "livingAreaUnitsShort": "sqft",
        "listingMetadata": {
          "comminglingCategoryIsRulesApplicable": false
        },
        "lotSize": 3217,
        "lotAreaValue": 3217,
        "lotAreaUnits": "Square Feet",
        "address": {
          "streetAddress": "2435 Aspen Rd UNIT 202",
          "city": "Ames",
          "state": "IA",
          "zipcode": "50010"
        },
        "parentRegion": null,
        "formattedChip": {
          "location": [
            {
              "fullValue": "2435 Aspen Rd UNIT 202"
            },
            {
              "fullValue": null
            }
          ]
        },
        "latitude": 42.05055,
        "longitude": -93.64186,
        "homeStatus": "OTHER",
        "homeType": "CONDO",
        "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-202-Ames-IA-50010/114303861_zpid/",
        "hdpTypeDimension": "Zestimate",
        "propertyTypeDimension": "Condo",
        "listingTypeDimension": "Unknown Listed By",
        "listing_sub_type": {
          "is_newHome": false,
          "is_forAuction": false,
          "is_bankOwned": false,
          "is_foreclosure": false,
          "is_FSBO": false,
          "is_comingSoon": false,
          "is_FSBA": false
        },
        "providerListingID": null,
        "attributionInfo": {
          "mlsId": null,
          "mlsName": null,
          "providerLogo": null,
          "agentName": null,
          "agentPhoneNumber": null,
          "brokerName": null,
          "brokerPhoneNumber": null,
          "trueStatus": null
        },
        "isShowcaseListing": false,
        "isPremierBuilder": false,
        "state": "IA",
        "newConstructionType": null
      },
      {
        "zpid": 114303862,
        "miniCardPhotos": [
          {
            "url": "https://photos.zillowstatic.com/fp/0d40792b4371674df784c1022e51cb20-p_c.jpg"
          }
        ],
        "price": 191800,
        "currency": "USD",
        "bedrooms": 2,
        "bathrooms": 2,
        "livingArea": 1111,
        "livingAreaValue": 1111,
        "livingAreaUnits": "Square Feet",
        "livingAreaUnitsShort": "sqft",
        "listingMetadata": {
          "comminglingCategoryIsRulesApplicable": false
        },
        "lotSize": 3157,
        "lotAreaValue": 3157,
        "lotAreaUnits": "Square Feet",
        "address": {
          "streetAddress": "2435 Aspen Rd UNIT 203",
          "city": "Ames",
          "state": "IA",
          "zipcode": "50010"
        },
        "parentRegion": null,
        "formattedChip": {
          "location": [
            {
              "fullValue": "2435 Aspen Rd UNIT 203"
            },
            {
              "fullValue": null
            }
          ]
        },
        "latitude": 42.05055,
        "longitude": -93.64186,
        "homeStatus": "OTHER",
        "homeType": "CONDO",
        "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-203-Ames-IA-50010/114303862_zpid/",
        "hdpTypeDimension": "Zestimate",
        "propertyTypeDimension": "Condo",
        "listingTypeDimension": "Unknown Listed By",
        "listing_sub_type": {
          "is_newHome": false,
          "is_forAuction": false,
          "is_bankOwned": false,
          "is_foreclosure": false,
          "is_FSBO": false,
          "is_comingSoon": false,
          "is_FSBA": false
        },
        "providerListingID": null,
        "attributionInfo": {
          "mlsId": null,
          "mlsName": null,
          "providerLogo": null,
          "agentName": null,
          "agentPhoneNumber": null,
          "brokerName": null,
          "brokerPhoneNumber": null,
          "trueStatus": null
        },
        "isShowcaseListing": false,
        "isPremierBuilder": false,
        "state": "IA",
        "newConstructionType": null
      },
      {
        "zpid": 114303863,
        "miniCardPhotos": [
          {
            "url": "https://maps.googleapis.com/maps/api/streetview?location=2435+Aspen+Rd%2C+Ames%2C+IA+50010&size=316x234&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=MdJkXIGqv7a1gC77laxLPrIdPd0="
          }
        ],
        "price": 197800,
        "currency": "USD",
        "bedrooms": 2,
        "bathrooms": 2,
        "livingArea": 1133,
        "livingAreaValue": 1133,
        "livingAreaUnits": "Square Feet",
        "livingAreaUnitsShort": "sqft",
        "listingMetadata": {
          "comminglingCategoryIsRulesApplicable": false
        },
        "lotSize": 3223,
        "lotAreaValue": 3223,
        "lotAreaUnits": "Square Feet",
        "address": {
          "streetAddress": "2435 Aspen Rd UNIT 204",
          "city": "Ames",
          "state": "IA",
          "zipcode": "50010"
        },
        "parentRegion": null,
        "formattedChip": {
          "location": [
            {
              "fullValue": "2435 Aspen Rd UNIT 204"
            },
            {
              "fullValue": null
            }
          ]
        },
        "latitude": 42.05055,
        "longitude": -93.64186,
        "homeStatus": "OTHER",
        "homeType": "CONDO",
        "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-204-Ames-IA-50010/114303863_zpid/",
        "hdpTypeDimension": "Zestimate",
        "propertyTypeDimension": "Condo",
        "listingTypeDimension": "Unknown Listed By",
        "listing_sub_type": {
          "is_newHome": false,
          "is_forAuction": false,
          "is_bankOwned": false,
          "is_foreclosure": false,
          "is_FSBO": false,
          "is_comingSoon": false,
          "is_FSBA": false
        },
        "providerListingID": null,
        "attributionInfo": {
          "mlsId": null,
          "mlsName": null,
          "providerLogo": null,
          "agentName": null,
          "agentPhoneNumber": null,
          "brokerName": null,
          "brokerPhoneNumber": null,
          "trueStatus": null
        },
        "isShowcaseListing": false,
        "isPremierBuilder": false,
        "state": "IA",
        "newConstructionType": null
      },
      {
        "zpid": 114303865,
        "miniCardPhotos": [
          {
            "url": "https://photos.zillowstatic.com/fp/e15c3754004e7f681eac21b881b379ca-p_c.jpg"
          }
        ],
        "price": 195100,
        "currency": "USD",
        "bedrooms": 2,
        "bathrooms": 2,
        "livingArea": 1133,
        "livingAreaValue": 1133,
        "livingAreaUnits": "Square Feet",
        "livingAreaUnitsShort": "sqft",
        "listingMetadata": {
          "comminglingCategoryIsRulesApplicable": false
        },
        "lotSize": 3217,
        "lotAreaValue": 3217,
        "lotAreaUnits": "Square Feet",
        "address": {
          "streetAddress": "2435 Aspen Rd UNIT 102",
          "city": "Ames",
          "state": "IA",
          "zipcode": "50010"
        },
        "parentRegion": null,
        "formattedChip": {
          "location": [
            {
              "fullValue": "2435 Aspen Rd UNIT 102"
            },
            {
              "fullValue": null
            }
          ]
        },
        "latitude": 42.05055,
        "longitude": -93.64186,
        "homeStatus": "OTHER",
        "homeType": "CONDO",
        "hdpUrl": "/homedetails/2435-Aspen-Rd-UNIT-102-Ames-IA-50010/114303865_zpid/",
        "hdpTypeDimension": "Zestimate",
        "propertyTypeDimension": "Condo",
        "listingTypeDimension": "Unknown Listed By",
        "listing_sub_type": {
          "is_newHome": false,
          "is_forAuction": false,
          "is_bankOwned": false,
          "is_foreclosure": false,
          "is_FSBO": false,
          "is_comingSoon": false,
          "is_FSBA": false
        },
        "providerListingID": null,
        "attributionInfo": {
          "mlsId": null,
          "mlsName": null,
          "providerLogo": null,
          "agentName": null,
          "agentPhoneNumber": null,
          "brokerName": null,
          "brokerPhoneNumber": null,
          "trueStatus": null
        },
        "isShowcaseListing": false,
        "isPremierBuilder": false,
        "state": "IA",
        "newConstructionType": null
      }
    ],
    "schools": [
      {
        "distance": 0.9,
        "name": "Fellows Elementary School",
        "rating": 8,
        "level": "Elementary",
        "studentsPerTeacher": null,
        "assigned": null,
        "grades": "K-5",
        "link": "https://www.greatschools.org/iowa/ames/93-Fellows-Elementary-School/",
        "type": "Public",
        "size": null,
        "totalCount": null,
        "isAssigned": null
      },
      {
        "distance": 3,
        "name": "Ames Middle School",
        "rating": 4,
        "level": "Middle",
        "studentsPerTeacher": null,
        "assigned": null,
        "grades": "6-8",
        "link": "https://www.greatschools.org/iowa/ames/99-Ames-Middle-School/",
        "type": "Public",
        "size": null,
        "totalCount": null,
        "isAssigned": null
      },
      {
        "distance": 0.9,
        "name": "Ames High School",
        "rating": 5,
        "level": "High",
        "studentsPerTeacher": null,
        "assigned": null,
        "grades": "9-12",
        "link": "https://www.greatschools.org/iowa/ames/91-Ames-High-School/",
        "type": "Public",
        "size": null,
        "totalCount": null,
        "isAssigned": null
      }
    ],
    "citySearchUrl": {
      "text": "Homes in Ames",
      "path": "/ames-ia/"
    },
    "NFSHDPTopSlot": {
      "eventId": "7a5dc524-fd25-49de-bedd-4d1fafeb39ba",
      "decisionContext": {},
      "messages": [
        {
          "skipDisplayReason": null,
          "shouldDisplay": true,
          "isGlobalHoldout": false,
          "isPlacementHoldout": false,
          "placementName": "NFSHDPTopSlot",
          "testPhase": "PORTFOLIO_INTEGRATION",
          "bucket": "PORTFOLIO_INTEGRATION_CTRL",
          "placementId": 1123,
          "passThrottle": true,
          "lastModified": "1713446990000",
          "eventId": "3927c857-fae0-4b41-8b98-46d22e5a86d5",
          "decisionContext": {
            "guid": "45fb82c3-d111-4ba9-9761-2fede2d012ce",
            "operatingSystem": "unknown",
            "homeStatus": "recentlySold",
            "isZillowOwned": false,
            "zpid": "114303858",
            "zipcode": "50010",
            "homeType": "CONDO",
            "listPrice": 195000,
            "zestimate": "195000",
            "zestimateLowPercent": "5",
            "zestimateHighPercent": "5",
            "countyId": "735",
            "stateId": "19",
            "isAdsRestricted": false,
            "shouldDisplayUpsell": false,
            "zoMarketCode": "NO_MARKET",
            "placementId": "wow-top",
            "surfaceId": "omhdp",
            "isEligibleZOFullCriteria": false,
            "leadType": "",
            "leadTypes": []
          },
          "selectedTreatment": {
            "id": 5585,
            "name": "mortgages-zhl_omhdp_top_purchase_zhl-pre-qual-corner-logo",
            "component": "UpsellWrapper",
            "status": "PORTFOLIO",
            "renderingProps": "{\"actionLink\":\"https://www.zillow.com/homeloans/eligibility/?source=Zillow&channel=OMHDP&utm_source=OMP&utm_medium=OMP&utm_campaign=omp_mortgages-zhl_omhdp_top_purchase_zhl-pre-qual-corner-logo\",\"actionText\":\"Start now\",\"actionType\":\"url_link\",\"background\":\"backgroundBlue\",\"bodyMarkdownText\":\"At Zillow Home Loans, we can pre-qualify you in as little as 3 minutes with no impact to your credit score.   <p class=\\\"zg-mls-note\\\">An equal housing lender. NMLS #10287.</p><style> div[class*=Upsell-] .zg-mls-note{ font-size: 10px; font-weight: 400; position: absolute; right: 4px; bottom: 0; margin-bottom: -4px; color: grey; } span[class*=UpsellWrapper__StyledTag] { height: auto; max-width:100%; width: 127px; }</style>\",\"headingMarkdownText\":\"Get pre-qualified for a loan\",\"icon\":\"houseWithDollarSign\",\"showAdvertisement\":true,\"adTagImage\":{\"alt\":\"\",\"id\":4748,\"link\":\"https://cms-bedrock-prod.int.zgcp-consumer-prod-k8s.zg-int.net/krang/?attachment_id=4748\",\"caption\":\"\",\"width\":2000,\"height\":217,\"src\":\"https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2023/03/Zillow-Home-Loans_Horizontal_NMLS_Large_Blue_RGB-1024x111.png\",\"sizeSlug\":\"large\"},\"gaImpressionCategory\":\"Homes\",\"gaImpressionAction\":\"ZHL Purchase Upsell\",\"gaImpressionLabel\":\"Display|omhdp|top|zhl-purchase|zhl-pre-qual-corner-logo|omp\",\"gaEngagementCategory\":\"Homes\",\"gaEngagementAction\":\"ZHL Purchase Upsell\",\"gaEngagementLabel\":\"Click|omhdp|top|zhl-purchase|zhl-pre-qual-corner-logo|omp\",\"gaHoverCategory\":\"Homes\",\"gaHoverAction\":\"ZHL Purchase Upsell\",\"gaHoverLabel\":\"Hover|omhdp|top|zhl-purchase|zhl-pre-qual-corner-logo|omp\"}",
            "lastModified": "1699442281000"
          },
          "qualifiedTreatments": [
            {
              "id": 3045,
              "name": "zgm_refinance_omhdp_top_your-homes-equity-v1",
              "status": "PORTFOLIO",
              "lastModified": "1682506588000"
            },
            {
              "id": 5585,
              "name": "mortgages-zhl_omhdp_top_purchase_zhl-pre-qual-corner-logo",
              "status": "PORTFOLIO",
              "lastModified": "1699442281000"
            }
          ]
        }
      ]
    },
    "hoaFee": 276,
    "mortgageRates": {
      "thirtyYearFixedRate": null
    },
    "isInstantOfferEnabled": false,
    "zillowOfferMarket": null,
    "dateSold": 1718582400000,
    "county": "Story County",
    "isRentalListingOffMarket": false,
    "nearbyCities": [
      {
        "regionUrl": {
          "path": "/ames-ia/"
        },
        "name": "Ames",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/cambridge-ia/"
        },
        "name": "Cambridge",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/colo-ia/"
        },
        "name": "Colo",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/huxley-ia/"
        },
        "name": "Huxley",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/kelley-ia/"
        },
        "name": "Kelley",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/maxwell-ia/"
        },
        "name": "Maxwell",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/nevada-ia/"
        },
        "name": "Nevada",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/roland-ia/"
        },
        "name": "Roland",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/slater-ia/"
        },
        "name": "Slater",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/story-city-ia/"
        },
        "name": "Story City",
        "body": null
      }
    ],
    "nearbyNeighborhoods": [
      {
        "regionUrl": {
          "path": "/bloomington-heights-ames-ia/"
        },
        "name": "Bloomington Heights",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/brookside-ames-ia/"
        },
        "name": "Brookside",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/college-creek-old-ames-ames-ia/"
        },
        "name": "College Creek/Old Ames",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/edwards-ames-ia/"
        },
        "name": "Edwards",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/north-old-town-ames-ia/"
        },
        "name": "North Old Town",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/oak-riverside-ames-ia/"
        },
        "name": "Oak-Riverside",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/oak-wood-forest-ames-ia/"
        },
        "name": "Oak-Wood-Forest",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/somerset-village-ames-ia/"
        },
        "name": "Somerset Village",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/south-campus-area-ames-ia/"
        },
        "name": "South Campus Area",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/top-o-hollow-ames-ia/"
        },
        "name": "Top-O-Hollow",
        "body": null
      }
    ],
    "nearbyZipcodes": [
      {
        "regionUrl": {
          "path": "/ames-ia-50010/"
        },
        "name": "50010",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/ames-ia-50011/"
        },
        "name": "50011",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/ames-ia-50012/"
        },
        "name": "50012",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/ames-ia-50013/"
        },
        "name": "50013",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/ames-ia-50014/"
        },
        "name": "50014",
        "body": null
      },
      {
        "regionUrl": {
          "path": "/ames-ia-50105/"
        },
        "name": "50105",
        "body": null
      }
    ],
    "zipcodeSearchUrl": {
      "path": "/ames-ia-50010/"
    },
    "apartmentsForRentInZipcodeSearchUrl": {
      "path": "/ames-ia-50010/apartments/"
    },
    "housesForRentInZipcodeSearchUrl": {
      "path": "/ames-ia-50010/rent-houses/"
    },
    "abbreviatedAddress": "2435 Aspen Rd UNIT 104",
    "neighborhoodRegion": {
      "name": "Somerset Village"
    },
    "building": null,
    "boroughId": null,
    "providerListingID": null,
    "neighborhoodSearchUrl": {
      "path": "/somerset-village-ames-ia/"
    },
    "stateSearchUrl": {
      "path": "/ia/"
    },
    "countySearchUrl": {
      "text": "Homes in Story County",
      "path": "/story-county-ia/"
    },
    "boroughSearchUrl": null,
    "communityUrl": null,
    "homeValuation": {
      "comparables": {
        "comps": [
          {
            "property": {
              "zestimate": 177000,
              "lastSoldPrice": 177000,
              "price": 177000,
              "daysOnZillow": 64,
              "dateSold": 1713484800000,
              "currency": "USD",
              "bedrooms": 2,
              "bathrooms": 2,
              "livingAreaValue": 1133,
              "livingAreaUnits": "Square Feet",
              "livingAreaUnitsShort": "sqft",
              "lotAreaValue": 4356,
              "lotAreaUnits": "Square Feet",
              "address": {
                "streetAddress": "2316 Aspen Rd UNIT 202",
                "city": "Ames",
                "state": "IA",
                "zipcode": "50010"
              },
              "latitude": 42.04934,
              "longitude": -93.64034,
              "zpid": 114303821,
              "homeStatus": "RECENTLY_SOLD",
              "homeType": "CONDO",
              "hdpUrl": "/homedetails/2316-Aspen-Rd-UNIT-202-Ames-IA-50010/114303821_zpid/",
              "listing_sub_type": {
                "is_newHome": false,
                "is_forAuction": false,
                "is_bankOwned": false,
                "is_foreclosure": false,
                "is_FSBO": false,
                "is_comingSoon": false
              },
              "isUndisclosedAddress": false,
              "attributionInfo": {
                "mlsId": "63648",
                "mlsName": null,
                "providerLogo": "https://photos.zillowstatic.com/fp/68f4b3adb7d0fb85b60cdedd5127bf8b-zillow_web_48_23.jpg",
                "agentName": "Jason Jennings",
                "agentPhoneNumber": null,
                "brokerName": "Friedrich Realty",
                "brokerPhoneNumber": null
              },
              "compsCarouselPropertyPhotos": [
                {
                  "mixedSources": {
                    "jpeg": [
                      {
                        "url": "https://photos.zillowstatic.com/fp/2a5e2924a32738934555b6eb13ecbf4b-cc_ft_192.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/2a5e2924a32738934555b6eb13ecbf4b-cc_ft_384.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/2a5e2924a32738934555b6eb13ecbf4b-cc_ft_576.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/2a5e2924a32738934555b6eb13ecbf4b-cc_ft_768.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/2a5e2924a32738934555b6eb13ecbf4b-cc_ft_960.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/2a5e2924a32738934555b6eb13ecbf4b-cc_ft_1152.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/2a5e2924a32738934555b6eb13ecbf4b-cc_ft_1344.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/2a5e2924a32738934555b6eb13ecbf4b-cc_ft_1536.jpg"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "property": {
              "zestimate": 175000,
              "lastSoldPrice": 175000,
              "price": 175000,
              "daysOnZillow": 29,
              "dateSold": 1716508800000,
              "currency": "USD",
              "bedrooms": 2,
              "bathrooms": 2,
              "livingAreaValue": 988,
              "livingAreaUnits": "Square Feet",
              "livingAreaUnitsShort": "sqft",
              "lotAreaValue": 3484.8,
              "lotAreaUnits": "Square Feet",
              "address": {
                "streetAddress": "2316 Aspen Rd UNIT 201",
                "city": "Ames",
                "state": "IA",
                "zipcode": "50010"
              },
              "latitude": 42.04934,
              "longitude": -93.64034,
              "zpid": 93953851,
              "homeStatus": "RECENTLY_SOLD",
              "homeType": "CONDO",
              "hdpUrl": "/homedetails/2316-Aspen-Rd-UNIT-201-Ames-IA-50010/93953851_zpid/",
              "listing_sub_type": {
                "is_newHome": false,
                "is_forAuction": false,
                "is_bankOwned": false,
                "is_foreclosure": false,
                "is_FSBO": false,
                "is_comingSoon": false
              },
              "isUndisclosedAddress": false,
              "attributionInfo": {
                "mlsId": "63955",
                "mlsName": null,
                "providerLogo": "https://photos.zillowstatic.com/fp/68f4b3adb7d0fb85b60cdedd5127bf8b-zillow_web_48_23.jpg",
                "agentName": "Brenda Pedigo-Weigel",
                "agentPhoneNumber": null,
                "brokerName": "Hunziker & Assoc.-Ames",
                "brokerPhoneNumber": null
              },
              "compsCarouselPropertyPhotos": [
                {
                  "mixedSources": {
                    "jpeg": [
                      {
                        "url": "https://photos.zillowstatic.com/fp/9e354d31f97fbdc720908a41e37c5b29-cc_ft_192.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/9e354d31f97fbdc720908a41e37c5b29-cc_ft_384.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/9e354d31f97fbdc720908a41e37c5b29-cc_ft_576.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/9e354d31f97fbdc720908a41e37c5b29-cc_ft_768.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/9e354d31f97fbdc720908a41e37c5b29-cc_ft_960.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/9e354d31f97fbdc720908a41e37c5b29-cc_ft_1152.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/9e354d31f97fbdc720908a41e37c5b29-cc_ft_1344.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/9e354d31f97fbdc720908a41e37c5b29-cc_ft_1536.jpg"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "property": {
              "zestimate": 172400,
              "lastSoldPrice": 172000,
              "price": 172000,
              "daysOnZillow": 162,
              "dateSold": 1705017600000,
              "currency": "USD",
              "bedrooms": 2,
              "bathrooms": 2,
              "livingAreaValue": 988,
              "livingAreaUnits": "Square Feet",
              "livingAreaUnitsShort": "sqft",
              "lotAreaValue": 3598.056,
              "lotAreaUnits": "Square Feet",
              "address": {
                "streetAddress": "2316 Aspen Rd UNIT 205",
                "city": "Ames",
                "state": "IA",
                "zipcode": "50010"
              },
              "latitude": 42.049347,
              "longitude": -93.64035,
              "zpid": 114303825,
              "homeStatus": "RECENTLY_SOLD",
              "homeType": "CONDO",
              "hdpUrl": "/homedetails/2316-Aspen-Rd-UNIT-205-Ames-IA-50010/114303825_zpid/",
              "listing_sub_type": {
                "is_newHome": false,
                "is_forAuction": false,
                "is_bankOwned": false,
                "is_foreclosure": false,
                "is_FSBO": false,
                "is_comingSoon": false
              },
              "isUndisclosedAddress": false,
              "attributionInfo": {
                "mlsId": "682370",
                "mlsName": null,
                "providerLogo": null,
                "agentName": "Stephen Patel",
                "agentPhoneNumber": null,
                "brokerName": "Pella Real Estate Services",
                "brokerPhoneNumber": null
              },
              "compsCarouselPropertyPhotos": [
                {
                  "mixedSources": {
                    "jpeg": [
                      {
                        "url": "https://photos.zillowstatic.com/fp/31d3962e972c36729164126ea9153f50-cc_ft_192.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/31d3962e972c36729164126ea9153f50-cc_ft_384.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/31d3962e972c36729164126ea9153f50-cc_ft_576.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/31d3962e972c36729164126ea9153f50-cc_ft_768.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/31d3962e972c36729164126ea9153f50-cc_ft_960.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/31d3962e972c36729164126ea9153f50-cc_ft_1152.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/31d3962e972c36729164126ea9153f50-cc_ft_1344.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/31d3962e972c36729164126ea9153f50-cc_ft_1536.jpg"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "property": {
              "zestimate": 181000,
              "lastSoldPrice": 180000,
              "price": 180000,
              "daysOnZillow": 211,
              "dateSold": 1700784000000,
              "currency": "USD",
              "bedrooms": 2,
              "bathrooms": 2,
              "livingAreaValue": 988,
              "livingAreaUnits": "Square Feet",
              "livingAreaUnitsShort": "sqft",
              "lotAreaValue": 3598.056,
              "lotAreaUnits": "Square Feet",
              "address": {
                "streetAddress": "2316 Aspen Rd UNIT 101",
                "city": "Ames",
                "state": "IA",
                "zipcode": "50010"
              },
              "latitude": 42.049347,
              "longitude": -93.64035,
              "zpid": 114303824,
              "homeStatus": "RECENTLY_SOLD",
              "homeType": "CONDO",
              "hdpUrl": "/homedetails/2316-Aspen-Rd-UNIT-101-Ames-IA-50010/114303824_zpid/",
              "listing_sub_type": {
                "is_newHome": false,
                "is_forAuction": false,
                "is_bankOwned": false,
                "is_foreclosure": false,
                "is_FSBO": false,
                "is_comingSoon": false
              },
              "isUndisclosedAddress": false,
              "attributionInfo": {
                "mlsId": "684453",
                "mlsName": null,
                "providerLogo": null,
                "agentName": "Stephen Patel",
                "agentPhoneNumber": null,
                "brokerName": "Pella Real Estate Services",
                "brokerPhoneNumber": null
              },
              "compsCarouselPropertyPhotos": [
                {
                  "mixedSources": {
                    "jpeg": [
                      {
                        "url": "https://photos.zillowstatic.com/fp/c142295c4687a15fc51dfb12838e60cd-cc_ft_192.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/c142295c4687a15fc51dfb12838e60cd-cc_ft_384.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/c142295c4687a15fc51dfb12838e60cd-cc_ft_576.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/c142295c4687a15fc51dfb12838e60cd-cc_ft_768.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/c142295c4687a15fc51dfb12838e60cd-cc_ft_960.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/c142295c4687a15fc51dfb12838e60cd-cc_ft_1152.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/c142295c4687a15fc51dfb12838e60cd-cc_ft_1344.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/c142295c4687a15fc51dfb12838e60cd-cc_ft_1536.jpg"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "property": {
              "zestimate": 200000,
              "lastSoldPrice": 200000,
              "price": 200000,
              "daysOnZillow": 113,
              "dateSold": 1709251200000,
              "currency": "USD",
              "bedrooms": 2,
              "bathrooms": 2,
              "livingAreaValue": 1258,
              "livingAreaUnits": "Square Feet",
              "livingAreaUnitsShort": "sqft",
              "lotAreaValue": null,
              "lotAreaUnits": "sqft",
              "address": {
                "streetAddress": "4144 Eisenhower Ln",
                "city": "Ames",
                "state": "IA",
                "zipcode": "50010"
              },
              "latitude": 42.062096,
              "longitude": -93.639206,
              "zpid": 2064738258,
              "homeStatus": "RECENTLY_SOLD",
              "homeType": "CONDO",
              "hdpUrl": "/homedetails/4144-Eisenhower-Ln-Ames-IA-50010/2064738258_zpid/",
              "listing_sub_type": {
                "is_newHome": false,
                "is_forAuction": false,
                "is_bankOwned": false,
                "is_foreclosure": false,
                "is_FSBO": false,
                "is_comingSoon": false
              },
              "isUndisclosedAddress": false,
              "attributionInfo": {
                "mlsId": "687683",
                "mlsName": null,
                "providerLogo": null,
                "agentName": "Hasbrouck, Rebecca",
                "agentPhoneNumber": null,
                "brokerName": "RE/MAX REC",
                "brokerPhoneNumber": null
              },
              "compsCarouselPropertyPhotos": [
                {
                  "mixedSources": {
                    "jpeg": [
                      {
                        "url": "https://photos.zillowstatic.com/fp/3d8763f2293144ddcd667f0e5426e3e3-cc_ft_192.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/3d8763f2293144ddcd667f0e5426e3e3-cc_ft_384.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/3d8763f2293144ddcd667f0e5426e3e3-cc_ft_576.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/3d8763f2293144ddcd667f0e5426e3e3-cc_ft_768.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/3d8763f2293144ddcd667f0e5426e3e3-cc_ft_960.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/3d8763f2293144ddcd667f0e5426e3e3-cc_ft_1152.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/3d8763f2293144ddcd667f0e5426e3e3-cc_ft_1344.jpg"
                      },
                      {
                        "url": "https://photos.zillowstatic.com/fp/3d8763f2293144ddcd667f0e5426e3e3-cc_ft_1536.jpg"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    "daysOnZillow": 5,
    "compsCarouselPropertyPhotos": [
      {
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_192.jpg"
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_384.jpg"
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_576.jpg"
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_768.jpg"
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_960.jpg"
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1152.jpg"
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1344.jpg"
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-cc_ft_1536.jpg"
            }
          ]
        }
      }
    ],
    "isConfirmedClaimedByCurrentSignedInUser": false,
    "isRecentStatusChange": false,
    "buildingId": "2052867987",
    "foreclosureTypes": {
      "isBankOwned": false,
      "wasNonRetailAuction": false,
      "wasDefault": null
    },
    "isFeatured": false,
    "rentalApplicationsAcceptedType": "REQUEST_TO_APPLY",
    "brokerageName": "Norsemen Realty Team - Friedrich Iowa Realty",
    "propertyTypeDimension": "Condo",
    "hdpTypeDimension": "RecentlySold",
    "listingTypeDimension": "Unknown Listed By",
    "featuredListingTypeDimension": "organic",
    "brokerIdDimension": "Unknown Listed By",
    "keystoneHomeStatus": "RecentlySold",
    "pageUrlFragment": "RecentlySold",
    "isRentalsLeadCapMet": false,
    "isPaidMultiFamilyBrokerId": false,
    "timeZone": "America/Chicago",
    "tourEligibility": {
      "isPropertyTourEligible": false
    },
    "virtualTourUrl": null,
    "selfTour": {
      "hasSelfTour": false
    },
    "originalPhotos": [
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b69539a82c1009299e770f7dac1101d-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/acb7b9bc8ecf65d6c000215bf283eebd-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/fd885ec570a4eb8c0fdb6e71218863b8-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/5e507fd543ef4fd376f3dfa446853b65-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/6b4fa8ac6fc6fd17e1f625191c785652-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/a4981ad3ee52d200f9d7e9c62b318f79-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/3785f1d783f0b4efe0f5434bcfbe3b4a-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/bacd3cfa00932e4711ac2b58f71a90b9-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/67fdb8c0f6d0b05436428607b40393da-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/8146d2ef5ae9814045495c8c3e292bc0-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/9625098ac73a8f9a77f55cfef95b1e49-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/356a6c50d415598357cbc5f44e3b6b16-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/4a248bf5efa82d2e15557f3249a3b0d8-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/d47464aab2bc225cdfd6c5e1daa0bdb3-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/b4eb160cd6f365e229c442bd761f8af0-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/563a8b2de57f3773c46f173ead313977-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      },
      {
        "caption": "",
        "mixedSources": {
          "jpeg": [
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-d_d.jpg",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-o_a.jpg",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-uncropped_scaled_within_1344_1008.jpg",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-uncropped_scaled_within_1536_1152.jpg",
              "width": 1536
            }
          ],
          "webp": [
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-d_d.webp",
              "width": 800
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-o_a.webp",
              "width": 1024
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-uncropped_scaled_within_1344_1008.webp",
              "width": 1344
            },
            {
              "url": "https://photos.zillowstatic.com/fp/61edb682d24e8641098f231a885c6cec-uncropped_scaled_within_1536_1152.webp",
              "width": 1536
            }
          ]
        }
      }
    ],
    "listingAccountUserId": "X1-ZU10c3cc8zvoq2x_6jzj1"
  }
}
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2024 [zillow-api](https://github.com/ChrisMichaelPerezSantiago/zillow-api).
