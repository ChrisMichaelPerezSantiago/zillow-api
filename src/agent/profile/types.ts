export interface AgentProfile {
  about: AboutSection
  breadcrumbs: Breadcrumb[]
  currentUrl: string
  displayUser: DisplayUser
  lastYearPastSalesTotal: {
    count: number
  }
  forSaleListings: ListingSection
  forRentListings: {
    listings: any[]
    listing_count: number
  }
  getToKnowMe: GetToKnowMeSection
  isImpersonating: boolean
  isReviewModerator: boolean
  pastSales: {
    total: number
    past_sales: any[]
  }
  preferredLenders: {
    lenders: any[]
  }
  professionalInformation: ProfessionalInfo[]
  reviewsData: ReviewsData
  serviceAreas: ServiceArea[]
}

interface AboutSection {
  title: null | string
  specialties: string[]
  description: string
  yearsExperience: string
}

interface Breadcrumb {
  text: string
  url?: string
}

interface DisplayUser {
  encodedZuid: string
  screenName: string
  inCanada: boolean
  name: string
  flag: number
  profileTypeIds: number[]
  profileTypes: string[]
  sidebarVideoUrl: null | string
  businessAddress: {
    city: string
    state: string
  }
  businessName: string
  cpdUserPronouns: string
  isTopAgent: boolean
  profilePhotoSrc: string
  isPremierAgent: boolean
  ratings: {
    count: number
    average: number
  }
}

interface ListingSection {
  listings: Listing[]
  listing_count: number
}

interface Listing {
  zpid: number
  home_type: string
  address: {
    line1: string
    line2: string
    city: string
    stateOrProvince: string
    postalCode: string
  }
  bedrooms: number
  bathrooms: number
  openHouses: string
  hasOpenHouse: boolean
  primary_photo_url: string
  price: number
  price_currency: string
  status: string
  latitude: number | null
  longitude: number | null
  brokerage_name: string
  home_marketing_status: string
  home_marketing_type: string
  has_vr_model: boolean
  listing_url: string
}

interface GetToKnowMeSection {
  title: null | string
  description: string
  inBusinessSince: string
  videoUrl: null | string
  specialties: string[]
  languages: string[]
  facebookUrl: string
}

interface ProfessionalInfo {
  term: string
  lines?: string[]
  description?: string
  links?: {
    text: string
    url: string
  }[]
}

interface ReviewsData {
  reviews: Review[]
  filters: {
    prompt: string
    count: number
    serviceTypeIds: any
  }[]
}

interface Review {
  reviewComment: string
  reviewId: number
  subRatings: {
    description: string
    score: number
  }[]
  reviewee: UserInfo
  reviewer: UserInfo
  rating: number
  createDate: string
  rebuttal: null | string
  workDescription: string
}

interface UserInfo {
  screenName: string
  firstName: string | null
  lastName: string | null
  suffix: string | null
  showName: boolean
  encodedZuid: string
}

interface ServiceArea {
  regionId: number
  text: string
  url: string
}
