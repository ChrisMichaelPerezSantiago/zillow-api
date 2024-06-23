interface FeaturedAgent {
  fullName: string
  profileLink: string
  profilePhotoSrc: string
  phoneNumber: string
  reviewRating: number
  numReviews: number
  reviewLink: string
  isTopAgent: boolean
}

interface ProfessionalAgent {
  agentLicense: string
  businessName: string
  encodedZuid: string
  fullName: string
  location: string
  phoneNumber: string
  profileLink: string
  profilePhotoSrc: string
  reviewExcerpt: string | null
  reviewExcerptDate: string | null
  reviewLink: string
  numTotalReviews: number
  reviews: string
  reviewStarsRating: number
  saleCountAllTime: number
  saleCountLastYear: number
  salePriceRangeThreeYearMin: number
  salePriceRangeThreeYearMax: number
  isTeamLead: boolean
  isTopAgent: boolean
}

interface Results {
  professionals: ProfessionalAgent[]
  total: number
}

export interface Agent {
  featuredAgents: FeaturedAgent[]
  mapUrl: string
  results: Results
}
