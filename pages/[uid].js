import { SliceZone, PrismicRichText } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import { Layout } from '../components/Layout'
import * as prismicH from '@prismicio/helpers'

const Page = ({ generic_page_data, navigation }) => {

  return (
    <Layout navigation={navigation}>
    <div>{generic_page_data.uid}
    <PrismicRichText field={generic_page_data.data.title}/> 
   <SliceZone slices = {generic_page_data.data.slices} components={components} />
    </div>
    </Layout> )
}

export default Page
  
  // This function gets called at build time

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const client = createClient()
    const pages = await client.getAllByType('generic')
  
    // Get the paths we want to pre-render based on posts
    const paths = pages.map((page) => ({
      params: { uid: page.uid },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }

}

export async function getStaticProps( {params, previewData}) {
        const client = createClient({previewData})
        const [navigation, generic_page_data] = await Promise.all([
          client.getByUID('navigation', 'navigation1'),
          client.getByUID('generic', params.uid),
        ])

        // const generic_page_data = await client.getByUID('generic', params.uid)  
        // Pass post data to the page via props
        return { props: { generic_page_data, navigation } }
      }
    
