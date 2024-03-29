import { SliceZone, PrismicRichText } from '@prismicio/react';
import { createClient } from '../../prismicio';
import { components } from '../../slices';
import { Layout } from '../../components/Layout';

const Blog = ({ blog, menu }) => {

  return (
    <Layout menu={menu}>
      <span>{ blog.data.uid }</span>
      {/* <PrismicLink document={blog.data.author}>my link</PrismicLink> */}
      <PrismicRichText field={blog.data.author.data.authorname} />
      <SliceZone slices = {blog.data.slices} components={components} />
    </Layout>
    )
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
    return { paths, fallback: false }
    // return { paths, fallback: false }


}

export async function getStaticProps({params, previewData}) {
        const client = createClient({previewData})
        const menu = await client.getSingle('menu');
        const blog = await client.getByUID('blog', params.uid, {
          fetchLinks: 'articles.authorname',
        } )
        
        
       
        // const navigation = await client.getByUID('navigation', 'navigation1')
        // Pass post data to the page via props
        
        console.log("************")
        console.log(blog.data.author.data)  
        return {
          props: { 
            blog, menu 
          } 
        }
      }
