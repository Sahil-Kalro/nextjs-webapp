import Image from "next/image";
import Link from "next/link";
import content from '../../../json/content.json';

function RelatedProduct(props) {
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
    <Link
      href="/ProductDetail"
      className="col text-decoration-none"
      replace
    >
      <div className="card shadow-sm">
        {/* {percentOff} */}
        <Image
          className="card-img-top bg-dark cover"
          height={100}
          width={100}
          alt="Property Image"
          src={content.item_image}
          unoptimized
        />
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
          {content.item}
          </h5>
          {/* <p className="card-text text-center text-muted">{offPrice}</p> */}
        </div>
      </div>
    </Link>
  );
}

export default RelatedProduct;
