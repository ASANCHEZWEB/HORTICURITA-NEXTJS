// pages/posts/[id].js

function Verdura({ objectProp }) {
  return (
    <div>
      <h1>nombre:{objectProp.name}</h1>
      <h1>precio{objectProp.price}</h1>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://gestorhorticurita.herokuapp.com/api/getAllProducts"
  );
  const products = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = products.productos.map((product) => ({
    params: { id: product.urlRoute },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://gestorhorticurita.herokuapp.com/api/productos/frutas/${params.id}`
  );
  const product = await res.json();

  let objectProp = {
    _id: product._id,
    name: product.name,
    price: product.price,
    description: product.description,
    generalcategory: product.generalcategory,
    imageUrl: product.imageUrl,
    imageAlt: product.imageAlt,
    type: product.type,
    urlRoute: product.urlRoute,
  };
  // Pass post data to the page via props
  return { props: { objectProp } };
}

export default Verdura;
