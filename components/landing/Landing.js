import Banner from "./Banner";
import Head from 'next/head';
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import content from '../../json/content.json';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';




function Landing() {
  const [types, setTypes] = useState([]);
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`${category}`);
  }

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/api/test')
      .then((response) => response.json())
      .then((data) => setTypes(data.types)) // Access the 'types' array from the JSON data
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <ScrollToTopOnMount />
      <Banner/>
      <div className="d-flex flex-column bg-white py-4">
        <Head>
          <title>{content.title}</title>
          <meta name="description" content={content.meta}/>
          <meta name="keywords" content="high quality constructions, reliable, efficient, client oriented, safety, latest technology, Construction ,Building
           Sustainability, Urban planning, Construction industry, Innovation, Architecture, Safety measures, Client service, Design, Community development, Renewable energy, 
           Environmentally friendly construction,Sustainable materials,Local procurement"/>
        </Head>
        <p className="text-center px-5">
          {content.intro}
        </p>
        <div className="d-flex justify-content-center">
        <Link className="btn btn-primary" href="/ProductList"> 
        {content.browse}
        </Link>
        </div>
      </div>
      <h1 className="text-muted text-center mt-4 mb-3">New Arrival</h1>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
        {types && types.map((type) => (
              <li key={type.id}  style={{ listStyleType: 'none' }} >
                <div onClick={() => handleCategoryClick(type.category)}>
                 <h2>{type.category}</h2>
                 <img src={`${type.image}`} alt={type.name} />
                </div>
              </li>
              ))}
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h2 className="text-center mb-3">Follow us on</h2>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
