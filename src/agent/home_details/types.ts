export interface HomeDetails {
  property: Property
}

interface Property {
  zpid: number
  listingSource: any
  listingAccount: any
  ownerAccount: any
  lfaViewPropertyPageUrl: any
  listingOwnerConfigIDs: any
  postingPresentationTypes: any
  maloneId: string
  city: string
  state: string
  homeStatus: string
  address: Address
  isListingClaimedByCurrentSignedInUser: boolean
  isCurrentSignedInAgentResponsible: boolean
  bedrooms: number
  bathrooms: number
  price: number
  yearBuilt: number
  streetAddress: string
  zipcode: string
  isCurrentSignedInUserVerifiedOwner: boolean
  propertyUpdatePageLink: any
  moveHomeMapLocationLink: any
  propertyEventLogLink: any
  editPropertyHistorylink: any
  isVerifiedClaimedByCurrentSignedInUser: boolean
  listingDataSource: string
  responsivePhotos: ResponsivePhoto[]
  longitude: number
  latitude: number
  hasBadGeocode: boolean
  isCamo: any
  listing_sub_type: ListingSubType
  streetViewMetadataUrlMediaWallLatLong: string
  streetViewMetadataUrlMediaWallAddress: string
  streetViewServiceUrl: string
  streetView: StreetView
  staticMap: StaticMap
  livingArea: number
  homeType: string
  lotSize: any
  lotAreaValue: any
  lotAreaUnits: string
  livingAreaValue: number
  livingAreaUnitsShort: string
  resoFacts: ResoFacts
  isUndisclosedAddress: boolean
  formattedChip: FormattedChip
  zestimate: number
  rentZestimate: number
  currency: string
  hideZestimate: boolean
  dateSoldString: string
  taxAssessedValue: number
  taxAssessedYear: number
  contingentListingType: any
  attributionInfo: AttributionInfo
  country: string
  monthlyHoaFee: number
  mortgageZHLRates: MortgageZhlrates
  propertyTaxRate: number
  listingMetadata: ListingMetadata
  photoCount: number
  isPremierBuilder: boolean
  isShowcaseListing: boolean
  postingUrl: any
  ssid: number
  brokerId: any
  listingSubType: ListingSubType2
  hdpUrl: string
  tourViewCount: number
  postingContact: PostingContact
  vrModel: VrModel
  richMedia: any
  isZillowOwned: boolean
  hasPublicVideo: boolean
  primaryPublicVideo: any
  richMediaVideos: any
  lastSoldPrice: number
  livingAreaUnits: string
  newConstructionType: any
  thirdPartyVirtualTour: ThirdPartyVirtualTour
  hasApprovedThirdPartyVirtualTourUrl: boolean
  isHousingConnector: boolean
  responsivePhotosOriginalRatio: ResponsivePhotosOriginalRatio[]
  streetViewTileImageUrlMediumLatLong: string
  streetViewTileImageUrlMediumAddress: string
  streetViewMetadataUrlMapLightboxAddress: string
  thumb: Thumb[]
  neighborhoodMapThumb: NeighborhoodMapThumb[]
  stateId: number
  countyId: number
  cityId: number
  isNonOwnerOccupied: boolean
  forecast: any
  zestimateMinus30: string
  restimateMinus30: string
  zestimateLowPercent: string
  zestimateHighPercent: string
  restimateLowPercent: string
  restimateHighPercent: string
  adTargets: AdTargets
  description: string
  whatILove: any
  pals: any[]
  listedBy: ListedBy[]
  countyFIPS: string
  parcelId: string
  taxHistory: TaxHistory[]
  priceHistory: PriceHistory[]
  homeValues: any
  parentRegion: ParentRegion
  nearbyHomes: NearbyHome[]
  schools: School[]
  citySearchUrl: CitySearchUrl
  hoaFee: number
  mortgageRates: MortgageRates
  isInstantOfferEnabled: boolean
  zillowOfferMarket: any
  dateSold: number
  county: string
  isRentalListingOffMarket: boolean
  nearbyCities: NearbyCity[]
  nearbyNeighborhoods: NearbyNeighborhood[]
  nearbyZipcodes: NearbyZipcode[]
  zipcodeSearchUrl: ZipcodeSearchUrl
  apartmentsForRentInZipcodeSearchUrl: ApartmentsForRentInZipcodeSearchUrl
  housesForRentInZipcodeSearchUrl: HousesForRentInZipcodeSearchUrl
  abbreviatedAddress: string
  neighborhoodRegion: NeighborhoodRegion
  building: any
  boroughId: any
  providerListingID: any
  neighborhoodSearchUrl: NeighborhoodSearchUrl
  stateSearchUrl: StateSearchUrl
  countySearchUrl: CountySearchUrl
  boroughSearchUrl: any
  communityUrl: any
  homeValuation: HomeValuation
  daysOnZillow: number
  compsCarouselPropertyPhotos: CompsCarouselPropertyPhoto2[]
  isConfirmedClaimedByCurrentSignedInUser: boolean
  isRecentStatusChange: boolean
  buildingId: string
  foreclosureTypes: ForeclosureTypes
  isFeatured: boolean
  rentalApplicationsAcceptedType: string
  brokerageName: string
  propertyTypeDimension: string
  hdpTypeDimension: string
  listingTypeDimension: string
  featuredListingTypeDimension: string
  brokerIdDimension: string
  keystoneHomeStatus: string
  pageUrlFragment: string
  isRentalsLeadCapMet: boolean
  isPaidMultiFamilyBrokerId: boolean
  timeZone: string
  tourEligibility: TourEligibility
  virtualTourUrl: any
  selfTour: SelfTour
  originalPhotos: OriginalPhoto[]
  listingAccountUserId: string
}

interface Address {
  streetAddress: string
  city: string
  state: string
  zipcode: string
  neighborhood: any
  community: any
  subdivision: any
}

interface ResponsivePhoto {
  caption: string
  subjectType: any
  url: string
  mixedSources: MixedSources
}

interface MixedSources {
  jpeg: Jpeg[]
  webp: Webp[]
}

interface Jpeg {
  url: string
  width: number
}

interface Webp {
  url: string
  width: number
}

interface ListingSubType {
  is_FSBA: boolean
  is_newHome: boolean
  is_FSBO: boolean
  is_pending: boolean
  is_bankOwned: boolean
  is_openHouse: boolean
  is_forAuction: boolean
  is_comingSoon: boolean
  is_foreclosure: boolean
}

interface StreetView {
  addressSources: AddressSource[]
  latLongSources: LatLongSource[]
}

interface AddressSource {
  width: number
  url: string
}

interface LatLongSource {
  width: number
  url: string
}

interface StaticMap {
  sources: Source[]
}

interface Source {
  width: number
  url: string
  isHighResolutionStaticMap?: boolean
}

interface ResoFacts {
  bathroomsFull: number
  bathroomsThreeQuarter: any
  bathroomsHalf: any
  bathroomsOneQuarter: any
  accessibilityFeatures: any
  additionalFeeInfo: any
  associations: Association[]
  associationFee: string
  associationAmenities: string[]
  associationFee2: any
  associationFeeIncludes: any
  associationName: string
  associationName2: any
  associationPhone: any
  associationPhone2: any
  basementYN: any
  buildingName: any
  buyerAgencyCompensation: string
  buyerAgencyCompensationType: string
  appliances: string[]
  atAGlanceFacts: AtAglanceFact[]
  attic: any
  availabilityDate: any
  basement: any
  bathrooms: number
  bathroomsPartial: any
  bathroomsFloat: number
  bedrooms: number
  bodyType: any
  canRaiseHorses: boolean
  carportParkingCapacity: any
  cityRegion: string
  commonWalls: any
  communityFeatures: any
  cooling: string[]
  coveredParkingCapacity: any
  cropsIncludedYN: any
  developmentStatus: any
  doorFeatures: any
  electric: any
  elevation: any
  elevationUnits: any
  entryLevel: any
  entryLocation: any
  exclusions: any
  feesAndDues: FeesAndDue[]
  fencing: any
  fireplaceFeatures: any
  fireplaces: any
  flooring: any
  foundationArea: any
  furnished: boolean
  garageParkingCapacity: any
  gas: any
  greenBuildingVerificationType: any
  greenEnergyEfficient: any
  greenIndoorAirQuality: any
  greenSustainability: any
  greenWaterConservation: any
  hasAssociation: boolean
  hasAttachedGarage: any
  hasAttachedProperty: boolean
  hasCooling: boolean
  hasCarport: any
  hasElectricOnProperty: any
  hasFireplace: any
  hasGarage: boolean
  hasHeating: boolean
  hasLandLease: boolean
  hasOpenParking: any
  hasSpa: boolean
  hasPrivatePool: any
  hasView: boolean
  hasWaterfrontView: any
  heating: string[]
  highSchool: any
  highSchoolDistrict: string
  hoaFee: string
  hoaFeeTotal: string
  homeType: string
  horseAmenities: any
  horseYN: any
  interiorFeatures: string[]
  irrigationWaterRightsAcres: any
  irrigationWaterRightsYN: any
  isSeniorCommunity: any
  landLeaseAmount: any
  landLeaseExpirationDate: any
  laundryFeatures: string[]
  levels: string
  listingId: any
  lotFeatures: string[]
  lotSize: any
  livingQuarters: any[]
  mainLevelBathrooms: any
  mainLevelBedrooms: any
  marketingType: any
  middleOrJuniorSchool: any
  middleOrJuniorSchoolDistrict: any
  municipality: any
  numberOfUnitsInCommunity: any
  offerReviewDate: any
  onMarketDate: number
  openParkingCapacity: any
  otherEquipment: any
  otherFacts: any[]
  otherParking: any
  ownershipType: any
  parkingCapacity: number
  parkingFeatures: string[]
  patioAndPorchFeatures: any
  poolFeatures: string[]
  pricePerSquareFoot: number
  roadSurfaceType: string[]
  roofType: any
  rooms: Room[]
  securityFeatures: any
  sewer: string[]
  spaFeatures: any
  specialListingConditions: string
  stories: any
  storiesTotal: any
  subdivisionName: any
  totalActualRent: any
  utilities: any
  view: any[]
  waterSource: string[]
  waterBodyName: any
  waterfrontFeatures: any
  waterView: any
  waterViewYN: any
  windowFeatures: any
  yearBuilt: number
  zoning: string
  zoningDescription: any
  aboveGradeFinishedArea: string
  additionalParcelsDescription: any
  architecturalStyle: any
  belowGradeFinishedArea: any
  builderModel: any
  builderName: any
  buildingArea: string
  buildingAreaSource: any
  buildingFeatures: any
  constructionMaterials: any[]
  exteriorFeatures: any[]
  foundationDetails: any[]
  frontageLength: any
  frontageType: any
  hasAdditionalParcels: boolean
  hasPetsAllowed: any
  hasRentControl: any
  hasHomeWarranty: boolean
  inclusions: any
  incomeIncludes: any
  isNewConstruction: any
  listingTerms: any
  livingAreaRange: any
  livingAreaRangeUnits: any
  livingArea: string
  lotSizeDimensions: any
  numberOfUnitsVacant: any
  otherStructures: any
  ownership: any
  parcelNumber: string
  propertyCondition: any
  propertySubType: string[]
  structureType: any
  topography: any
  vegetation: any
  woodedArea: any
  yearBuiltEffective: any
  listAOR: any
  elementarySchool: any
  elementarySchoolDistrict: any
}

interface Association {
  feeFrequency: string
  name: string
  phone: any
}

interface AtAglanceFact {
  factLabel: string
  factValue?: string
}

interface FeesAndDue {
  type: string
  fee?: string
  name?: string
  phone: any
}

interface Room {
  area: any
  description: any
  dimensions: any
  level: any
  features: any
  roomArea: any
  roomAreaSource: any
  roomAreaUnits: any
  roomDescription: any
  roomDimensions: any
  roomFeatures: any
  roomLength: any
  roomLengthWidthSource: any
  roomLengthWidthUnits: any
  roomLevel: string
  roomType?: string
  roomWidth: any
}

interface FormattedChip {
  location: Location[]
}

interface Location {
  fullValue: string
}

interface AttributionInfo {
  trueStatus: any
  listingAgreement: any
  agentEmail: any
  agentLicenseNumber: any
  agentName: string
  agentPhoneNumber: string
  attributionTitle: any
  brokerName: string
  brokerPhoneNumber: string
  buyerAgentMemberStateLicense: string
  buyerAgentName: string
  buyerBrokerageName: string
  coAgentLicenseNumber: any
  coAgentName: any
  coAgentNumber: any
  lastChecked: string
  lastUpdated: string
  listingOffices: ListingOffice[]
  listingAgents: ListingAgent[]
  mlsDisclaimer: string
  mlsId: string
  mlsName: string
  providerLogo: string
}

interface ListingOffice {
  associatedOfficeType: string
  officeName: string
}

interface ListingAgent {
  associatedAgentType: string
  memberFullName: string
  memberStateLicense: string
}

interface MortgageZhlrates {
  thirtyYearFixedBucket: ThirtyYearFixedBucket
}

interface ThirtyYearFixedBucket {
  rate: any
  rateSource: string
  lastUpdated: number
}

interface ListingMetadata {
  FlexibleLayoutAB: boolean
  mustAttributeOfficeNameBeforeAgentName: boolean
  mustDisplayAttributionListAgentEmail: boolean
  mustDisplayAttributionListAgentPhone: boolean
  mustDisplayAttributionListingOfficePhone: boolean
  mustDisplayDisclaimerBelowAttribution: boolean
  mustHighlightAgentName: any
  mustHighlightListOfficeName: boolean
  mustMakeListingAgentContactable: boolean
  FlexibleLayoutB: boolean
  FlexibleLayoutC: boolean
  FlexibleLayoutD: boolean
  FlexibleLayoutE: boolean
  FlexibleLayoutF: boolean
  FlexibleLayoutG: boolean
  FlexibleLayoutH: boolean
  FlexibleLayoutI: boolean
  FlexibleLayoutJ: boolean
  FlexibleLayoutK: boolean
  FlexibleLayoutL: boolean
  FlexibleLayoutM: boolean
  FlexibleLayoutN: boolean
  FlexibleLayoutO: boolean
  FlexibleLayoutP: boolean
  FlexibleLayoutQ: boolean
  FlexibleLayoutR: boolean
  FlexibleLayoutS: boolean
  FlexibleLayoutT: boolean
  FlexibleLayoutU: boolean
  FlexibleLayoutV: boolean
  FlexibleLayoutW: boolean
  FlexibleLayoutX: boolean
  FlexibleLayoutY: boolean
  FlexibleLayoutZ: boolean
  FlexibleLayoutAA: boolean
  passwordRequiredForZestimateMarketAnalysis: boolean
  canShowAutomatedValuationDisplay: boolean
  canShowTaxHistory: boolean
  canShowPriceHistory: boolean
  canShowUserGeneratedContent: boolean
  isAdsRestricted: boolean
  hidePriceAdjustmentFlexField: boolean
  canCommingleComparables: boolean
  canShowComparables: boolean
  isSuperTrafficOptimized: boolean
  mustDisplayFeedLogoInContactBox: boolean
  canShowCroppedPhotos: boolean
  canShowNonIDXMedia: boolean
  canShowOnMap: boolean
  comminglingCategory: boolean
  mustDisplayAttributionAboveLocalFacts: boolean
  mustDisplayAuctionStatusAsSold: boolean
  mustHighlightMlsId: any
  mustHighlightMlsStatus: boolean
  mustHighlightMarketingType: boolean
  canShowZillowLogoInHeader: boolean
  canShowPrequalifiedLinkInChip: boolean
  comminglingCategoryIsRulesApplicable: boolean
  mustPreferMlsPhotos: boolean
}

interface ListingSubType2 {
  isFSBA: boolean
  isPending: boolean
  isNewHome: boolean
  isForeclosure: boolean
  isBankOwned: boolean
  isForAuction: boolean
  isOpenHouse: boolean
  isComingSoon: boolean
  isFSBO: boolean
}

interface PostingContact {
  name: string
  photo: any
}

interface VrModel {
  vrModelGuid: any
  revisionId: any
}

interface ThirdPartyVirtualTour {
  lightboxUrl: any
  approved: boolean
  providerKey: any
}

interface ResponsivePhotosOriginalRatio {
  caption: string
  mixedSources: MixedSources2
}

interface MixedSources2 {
  jpeg: Jpeg2[]
  webp: Webp2[]
}

interface Jpeg2 {
  url: string
  width: number
}

interface Webp2 {
  url: string
  width: number
}

interface Thumb {
  url: string
}

interface NeighborhoodMapThumb {
  url: string
}

interface AdTargets {
  aamgnrc2: string
  aamgnrc1: string
  bd: string
  fsbid: string
  city: string
  proptp: string
  pid: string
  zestibuck: string
  listtp: string
  sqftrange: string
  price: string
  sqft: string
  state: string
  mlong: string
  cnty: string
  prange: string
  zip: string
  mlat: string
  zusr: string
  price_band: string
  yrblt: string
  zestimate: string
  premieragent: string
  dma: string
  guid: string
  ssid: string
}

interface ListedBy {
  id: string
  elements: Element[]
  textStyle: any
}

interface Element {
  id: string
  text: string
  action: any
}

interface TaxHistory {
  time: number
  taxPaid?: number
  taxIncreaseRate: number
  value?: number
  valueIncreaseRate: number
}

interface PriceHistory {
  date: string
  time: number
  price: number
  pricePerSquareFoot: number
  priceChangeRate: number
  event: string
  source: string
  buyerAgent?: BuyerAgent
  sellerAgent?: SellerAgent
  showCountyLink: boolean
  postingIsRental: boolean
  attributeSource: AttributeSource
}

interface BuyerAgent {
  photo: Photo
  profileUrl: string
  name: string
}

interface Photo {
  url: string
}

interface SellerAgent {
  photo: Photo2
  profileUrl: string
  name: string
}

interface Photo2 {
  url: string
}

interface AttributeSource {
  infoString1?: string
  infoString2: string
  infoString3?: string
}

interface ParentRegion {
  name: string
}

interface NearbyHome {
  zpid: number
  miniCardPhotos: MiniCardPhoto[]
  price: number
  currency: string
  bedrooms: number
  bathrooms: number
  livingArea: number
  livingAreaValue: number
  livingAreaUnits: string
  livingAreaUnitsShort: string
  listingMetadata: ListingMetadata2
  lotSize: number
  lotAreaValue: number
  lotAreaUnits: string
  address: Address2
  parentRegion: any
  formattedChip: FormattedChip2
  latitude: number
  longitude: number
  homeStatus: string
  homeType: string
  hdpUrl: string
  hdpTypeDimension: string
  propertyTypeDimension: string
  listingTypeDimension: string
  listing_sub_type: ListingSubType3
  providerListingID: any
  attributionInfo: AttributionInfo2
  isShowcaseListing: boolean
  isPremierBuilder: boolean
  state: string
  newConstructionType: any
}

interface MiniCardPhoto {
  url: string
}

interface ListingMetadata2 {
  comminglingCategoryIsRulesApplicable: boolean
}

interface Address2 {
  streetAddress: string
  city: string
  state: string
  zipcode: string
}

interface FormattedChip2 {
  location: Location2[]
}

interface Location2 {
  fullValue?: string
}

interface ListingSubType3 {
  is_newHome: boolean
  is_forAuction: boolean
  is_bankOwned: boolean
  is_foreclosure: boolean
  is_FSBO: boolean
  is_comingSoon: boolean
  is_FSBA: boolean
}

interface AttributionInfo2 {
  mlsId: any
  mlsName: any
  providerLogo: any
  agentName: any
  agentPhoneNumber: any
  brokerName: any
  brokerPhoneNumber: any
  trueStatus: any
}

interface School {
  distance: number
  name: string
  rating: number
  level: string
  studentsPerTeacher: any
  assigned: any
  grades: string
  link: string
  type: string
  size: any
  totalCount: any
  isAssigned: any
}

interface CitySearchUrl {
  text: string
  path: string
}

interface MortgageRates {
  thirtyYearFixedRate: any
}

interface NearbyCity {
  regionUrl: RegionUrl
  name: string
  body: any
}

interface RegionUrl {
  path: string
}

interface NearbyNeighborhood {
  regionUrl: RegionUrl2
  name: string
  body: any
}

interface RegionUrl2 {
  path: string
}

interface NearbyZipcode {
  regionUrl: RegionUrl3
  name: string
  body: any
}

interface RegionUrl3 {
  path: string
}

interface ZipcodeSearchUrl {
  path: string
}

interface ApartmentsForRentInZipcodeSearchUrl {
  path: string
}

interface HousesForRentInZipcodeSearchUrl {
  path: string
}

interface NeighborhoodRegion {
  name: string
}

interface NeighborhoodSearchUrl {
  path: string
}

interface StateSearchUrl {
  path: string
}

interface CountySearchUrl {
  text: string
  path: string
}

interface HomeValuation {
  comparables: Comparables
}

interface Comparables {
  comps: Comp[]
}

interface Comp {
  property: Property2
}

interface Property2 {
  zestimate: number
  lastSoldPrice: number
  price: number
  daysOnZillow: number
  dateSold: number
  currency: string
  bedrooms: number
  bathrooms: number
  livingAreaValue: number
  livingAreaUnits: string
  livingAreaUnitsShort: string
  lotAreaValue?: number
  lotAreaUnits: string
  address: Address3
  latitude: number
  longitude: number
  zpid: number
  homeStatus: string
  homeType: string
  hdpUrl: string
  listing_sub_type: ListingSubType4
  isUndisclosedAddress: boolean
  attributionInfo: AttributionInfo3
  compsCarouselPropertyPhotos: CompsCarouselPropertyPhoto[]
}

interface Address3 {
  streetAddress: string
  city: string
  state: string
  zipcode: string
}

interface ListingSubType4 {
  is_newHome: boolean
  is_forAuction: boolean
  is_bankOwned: boolean
  is_foreclosure: boolean
  is_FSBO: boolean
  is_comingSoon: boolean
}

interface AttributionInfo3 {
  mlsId: string
  mlsName: any
  providerLogo?: string
  agentName: string
  agentPhoneNumber: any
  brokerName: string
  brokerPhoneNumber: any
}

interface CompsCarouselPropertyPhoto {
  mixedSources: MixedSources3
}

interface MixedSources3 {
  jpeg: Jpeg3[]
}

interface Jpeg3 {
  url: string
}

interface CompsCarouselPropertyPhoto2 {
  mixedSources: MixedSources4
}

interface MixedSources4 {
  jpeg: Jpeg4[]
}

interface Jpeg4 {
  url: string
}

interface ForeclosureTypes {
  isBankOwned: boolean
  wasNonRetailAuction: boolean
  wasDefault: any
}

interface TourEligibility {
  isPropertyTourEligible: boolean
}

interface SelfTour {
  hasSelfTour: boolean
}

interface OriginalPhoto {
  caption: string
  mixedSources: MixedSources5
}

interface MixedSources5 {
  jpeg: Jpeg5[]
  webp: Webp3[]
}

interface Jpeg5 {
  url: string
  width: number
}

interface Webp3 {
  url: string
  width: number
}
