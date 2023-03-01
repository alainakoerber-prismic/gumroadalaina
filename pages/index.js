import { SliceZone, PrismicRichText } from '@prismicio/react';
import { Layout } from '../components/Layout';
import { createClient } from '../prismicio';
import { components } from '../slices';
import Head from 'next/head';


const Page = ({ page, menu }) => {
  return (
    
    <>
      <Head>
        <title>{ page.data.seo_title }</title>
        <meta name='description' content ={ page.data.seo_description }></meta>
      </Head>
      <div> 
          {/* <PrismicRichText field={page.data.title}/> */}
          <div className='mega-gum-logo-wrap'><img className='mega-gum-logo' src={page.data.homeimage.url} alt={page.data.homeimage.alt} /></div>
          <Layout menu = {menu}>
          </Layout>
          <SliceZone slices = {page.data.slices} components={components} />
      </div>
   
    </>
  )
}

export default Page;

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });
  const page = await client.getSingle('home', { lang: locale });
  const menu = await client.getSingle('menu', { lang: locale });
  // const navigation = await client.getByUID('navigation', 'navigation1')

  return {
    props: {
      page,
      menu,
    },
  }
}
