import { SliceZone, PrismicRichText } from '@prismicio/react';
import { Layout } from '../components/Layout';
import { createClient } from '../prismicio';
import { components } from '../slices';
import Head from 'next/head';

const Page = ({ page, navigation }) => {
  return (
    <Layout navigation={navigation}>
      <Head>
      <span>{ page.data.seo_title }</span>
      <span>{ page.data.seo_description }</span>
      </Head>
      <div> 
        {/* <PrismicRichText field={page.data.title}/> */}
        <div className='mega-gum-logo-wrap'><img className='mega-gum-logo' src={page.data.homeimage.url} alt={page.data.homeimage.alt} /></div>
        <SliceZone slices = {page.data.slices} components={components} />
      </div>
    </Layout>
  )
}

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('home');
  // const menu = await client.getSingle('menu');
  const navigation = await client.getByUID('navigation', 'navigation1')

  return {
    props: {
      page,
      navigation,
    },
  }
}
