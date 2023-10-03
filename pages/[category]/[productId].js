import Head from 'next/head';
import { useRouter } from 'next/router';
import productsData from '../../json/products.json';
import { useEffect, useState } from 'react';
import content from '../../json/content.json';

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      const foundProduct = productsData.products.find((product) =>
        product.id === Number(productId)
      );
      setProduct(foundProduct);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const pageTitle = `${product.name} - ${content.title}`;
  const metaDescription = product.meta || ''; 

  return (
    <div className="container mt-5 py-4 px-xl-5">
       <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
       <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item active" aria-current="page">
          <h1>{product.name}</h1>
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
    <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img className='border rounded ratio ratio-1x1' src={product.image} alt={product.name} />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
          <div className="row g-3 mb-4">
              <div className="col">
                <button className="btn btn-dark py-2 w-121">Book now</button>
              </div>
            </div>

            <h3 className="mb-0">Details</h3>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">{content.detail1}</dt>
              <dd className="col-sm-8 mb-3">{product.id}</dd>

              <dt className="col-sm-4">{content.detail2}</dt>
              <dd className="col-sm-8 mb-3">{product.category}</dd>

              <dt className="col-sm-4">{content.detail3}</dt>
              <dd className="col-sm-8 mb-3">{product.displacement}</dd>

              <dt className="col-sm-4">{content.detail4}</dt>
              <dd className="col-sm-8 mb-3">{product.transmission}</dd>

              <dt className="col-sm-4">{content.detail5}</dt>
              <dd className="col-sm-8 mb-3">{product.Top_Speed}</dd>

              <dt className="col-sm-4">{content.detail6}</dt>
              <dd className="col-sm-8 mb-3">{product.price}</dd>
            </dl>

            <h4 className="mb-0">Description</h4>
            <hr />
             <p>{product.description}</p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetail;
