import { SliceZone, PrismicRichText } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import { Layout } from '../components/Layout'

const Page = ({ generic_page_data, menu }) => {

  return (
    <Layout altlangs={generic_page_data.alternate_languages} menu={menu}>
      <div>
        <PrismicRichText field={generic_page_data.data.title}/> 
        <SliceZone slices = {generic_page_data.data.slices} components={components} />
      </div>
    </Layout> 
  )
}

export default Page
  
  // This function gets called at build time

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const client = createClient()
    const documents = await client.getAllByType('generic', { lang: '*' })

  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang }
    }),
    fallback: false,
  }
}

export async function getStaticProps({params, previewData, locale}) {
        const client = createClient({previewData})
        const menu = await client.getSingle('menu', { lang: locale});
        const generic_page_data = await client.getByUID('generic', params.uid, { lang: locale })

        // const generic_page_data = await client.getByUID('generic', params.uid)  
        // Pass post data to the page via props
        return { props: { generic_page_data, menu } }
      }
    
