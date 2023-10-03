import Head from 'next/head';
import content from '../json/content.json';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import productsData from '../json/products.json';
import jsonData from '../json/categories.json';

function CategoryProducts() {
  const [viewType, setViewType] = useState({ grid: true });
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({
    title: content.title, 
    description: '',      
  });

  useEffect(() => {
    if (category) {

      const categoryData = jsonData.types.find((type) => type.category === category);

     
      if (categoryData) {
        setMeta({
          title: `${categoryData.category} - ${content.title}`,
          description: categoryData.meta || '', // Use category-specific meta or empty string
        });
      }
      const filteredProducts = productsData.products.filter((product) =>
        product.category === category
      );
      setProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div className="container mt-5 py-4 px-xl-5">
       <Head>
          <title>{content.title}</title>
          <meta name="description" content={meta.description}/>
        </Head>
    <nav aria-label="breadcrumb" className="bg-custom-light rounded">
    <ol className="breadcrumb p-3 mb-0">
      <li className="breadcrumb-item">
        <Link
          className="text-decoration-none link-secondary"
          href="/Productlist"
          replace
        >
          <h1>Products in category: {category}</h1>
        </Link>
      </li>
      {/* <li className="breadcrumb-item active" aria-current="page">
        
      </li> */}
    </ol>
  </nav>


      <div
              className={
                "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 " +
                (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
              }
            >

      
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <Link href={`${product.category}/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
      ))}
    </div>

    </div>
  );
}

export default CategoryProducts;



