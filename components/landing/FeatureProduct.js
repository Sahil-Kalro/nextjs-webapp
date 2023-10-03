import Image from 'next/image'
import Link from 'next/link';
import content from '../../json/content.json';

function FeatureProduct() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <Image
          className="card-img-top bg-dark cover"
          height={240}
          alt="Available Cases"
          src={content.item_image}
          width={240}
          unoptimized
        />
        <div className="card-body">
          <h3 className="card-title text-center">{content.item}</h3>
          <p className="card-text text-center text-muted"></p>
          <div className="d-grid gap-2">
          <Link href="/ProductDetail" className="btn btn-outline-dark"> 
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
