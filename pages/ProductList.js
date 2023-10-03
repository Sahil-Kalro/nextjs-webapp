import Link from "next/link";
import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTopOnMount from "../components/template/ScrollToTopOnMount";
import content from '../json/content.json';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const categories = [
  "All Projects"
];

function ProductList() {
  const [viewType, setViewType] = useState({ grid: true });
  const [types, setTypes] = useState([]);
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`${category}`);
  }


  function changeViewType() {
    setViewType({
      grid: !viewType.grid,
    });
  }

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/api/test')
      .then((response) => response.json())
      .then((data) => setTypes(data.types)) // Access the 'types' array from the JSON data
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  return (
    <div className="container mt-5 py-4 px-xl-5">
      <Head>
          <title>{content.title}</title>
          <meta name="description" content={content.meta}/>
          
      </Head> 
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded">
        <ol className="breadcrumb p-3 mb-0">
          <li className="breadcrumb-item">
            <Link
              className="text-decoration-none link-secondary"
              href="/Productlist"
              replace
            >
              <h2>Available Categories</h2>
            </Link>
          </li>
          {/* <li className="breadcrumb-item active" aria-current="page">
            
          </li> */}
        </ol>
      </nav>

      <div className="h-scroller d-block d-lg-none">
        <nav className="nav h-underline">
          {categories.map((v, i) => {
            return (
              <div key={i} className="h-link me-2">
                <Link
                  href="/ProductDetail"
                  className="btn btn-sm btn-outline-dark rounded-pill"
                  replace
                >
                  {v}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="row mb-3 d-block d-lg-none">
        <div className="col-12">
          <div id="accordionFilter" className="accordion shadow-sm">
            <div className="accordion-item">
              <h1 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fw-bold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFilter"
                  aria-expanded="false"
                  aria-controls="collapseFilter"
                >
                  Filter Products
                </button>
              </h1>
            </div>
            <div
              id="collapseFilter"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFilter"
            >
              {/* <div className="accordion-body p-0">
                <FilterMenuLeft />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4 mt-lg-3">
        {/* <div className="d-none d-lg-block col-lg-3">
          <div className="border rounded shadow-sm">
            <FilterMenuLeft />
          </div>
        </div> */}
        <div className="col-lg-9">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col-lg-3 d-none d-lg-block">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue=""
                >
                  <option value="">All</option>
                </select>
              </div>
              <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder={content.browse}
                    aria-label="search input"
                  />
                  <button className="btn btn-outline-dark">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                {/* <button
                  className="btn btn-outline-dark ms-2 d-none d-lg-inline"
                  onClick={changeViewType}
                >
                  <FontAwesomeIcon
                    icon={faThList}
                  />
                </button> */}
              </div>
            </div>
            <div
              className={
                "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 " +
                (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
              }
            >

             {types && types.map((type) => (
              <li key={type.id} style={{ listStyleType: 'none' }}>
                <div onClick={() => handleCategoryClick(type.category)}>
                 <h2>{type.category}</h2>
                 <img src={`${type.image}`} alt={type.name} />
                </div>
              </li>
              ))}
          
            </div>
            <div className="d-flex align-items-center mt-auto">
              
              <nav aria-label="Page navigation example" className="ms-auto">
                <ul className="pagination my-0">
                  {/* <li className="page-item">
                    <a className="page-link" href="Home">
                      <h5>Previous</h5>
                    </a>
                  </li> */}
                  <li className="page-item">
                    <a className="page-link" href="/">
                      <h5>Home</h5>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ProductList;
