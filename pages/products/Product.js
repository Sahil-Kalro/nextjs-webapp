import Image from 'next/image'
import Link from 'next/link';
import content from '../../json/content.json';

function Product(props) {
  // const price = 10000;
  // let percentOff;
  // let offPrice = `${price}Ks`;

  // if (props.percentOff && props.percentOff > 0) {
  //   percentOff = (
  //     <div
  //       className="badge bg-dim py-2 text-white position-absolute"
  //       style={{ top: "0.5rem", right: "0.5rem" }}
  //     >
  //       {props.percentOff}% OFF
  //     </div>
  //   );

  //   offPrice = (
  //     <>
  //       <del>{price}Ks</del> {price - (props.percentOff * price) / 100}Ks
  //     </>
  //   );
  // }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link href="/ProductDetail">
          {/* {percentOff} */}
          <Image
            className="card-img-top bg-dark cover"
            height={240}
            alt="Property Image"
            src={content.item_image}
            width={240}
            unoptimized
          />
        </Link>
        <div className="card-body">
          <h4 className="card-title text-center text-dark text-truncate">
            {content.item}
          </h4>
          {/* <p className="card-text text-center text-muted mb-0">{offPrice}</p> */}
          {/* <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3">
              <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to cart
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Product;


