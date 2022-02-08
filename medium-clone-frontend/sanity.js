import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'

export const config = {
  // Find dataset and projectId in sanity.json in the studio folder of sanity
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-02-08',

  useCdn: process.env.NODE_ENV === 'production',
}

//Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

//Helper function for generating Image URLs with only asset reference data in the document
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

//Helper function for using current logged in user
export const useCurrentUser = createCurrentUserHook(config)
