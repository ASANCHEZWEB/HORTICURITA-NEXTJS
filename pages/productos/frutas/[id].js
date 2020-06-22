// pages/posts/[id].js

function Post({ post }) {
  return (
    <div>
    <h1>nombre:{post.name}</h1>
  <h1>precio:{post.price}</h1>
  </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://gestorhorticurita.herokuapp.com/api/getAllProducts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.productos.map((post) => ({
    params: { id: post.urlRoute },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://gestorhorticurita.herokuapp.com/api/productos/frutas/${params.id}`)
  const post = await res.json()
console.log(post)
  // Pass post data to the page via props
  return { props: { post } }
}

export default Post