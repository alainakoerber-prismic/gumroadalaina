import { SliceZone, PrismicRichText, PrismicLink } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import { Layout } from '../../components/Layout'
import * as prismicH from '@prismicio/helpers'

const Blog = ({ blog, navigation }) => {

  return (
    <Layout navigation={navigation}>
      
    
    <div>{blog.uid}
    <PrismicRichText field={blog.data.title}/> 
   <SliceZone slices = {blog.data.slices} components={components} />
    </div>
    </Layout>)
}

export default Blog
  
  // This function gets called at build time

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const client = createClient()
    const blogs = await client.getAllByType('blog')
  
    // Get the paths we want to pre-render based on posts
    const paths = blogs.map((blog) => ({
      params: { uid: blog.uid },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { 
      paths: blogs.map ((blog) => prismicH.asLink(blog)),
      fallback: false }
    // return { paths, fallback: false }


}

export async function getStaticProps( {params}) {
        const client = createClient()
        const blog = await client.getByUID('blog', params.uid)  
        const navigation = await client.getByUID('navigation', 'navigation1')
        // Pass post data to the page via props
        return { props: { blog, navigation } }
      }
