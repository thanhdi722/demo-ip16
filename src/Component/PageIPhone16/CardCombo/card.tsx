import React from "react";
import "../../../style/card.scss";
import Image from "next/image";

interface card {
  subleft?: string;
  subcenter?: string | null;
  subright?: string;
  maintitle: string;
  imgUrl: string;
  price: string;
}

const Card: React.FC<card> = ({
  subleft,
  //subcenter,
  subright,
  // maintitle,
  imgUrl,
  price,
}) => {
  return (
    <div className="container">
      <div className="card">
        {/* Các subtitle */}
        <div className="card__subtitles">
          <div className="card__subleft">{subleft}</div>
          {/* <div className="card__subcenter">{subcenter}</div> */}
          <div className="card__subright">{subright}</div>
        </div>

        {/* Tiêu đề lớn */}
        <div className="card__maintitle">{/* <div>{maintitle}</div> */}</div>

        {/* Hình ảnh */}
        <div className="card__img">
          <Image src={imgUrl} alt="product" width={100} height={100} />
        </div>

        {/* Phần giá */}
        <div style={{ display: "flex" }}>
          <div className="card__price-label">Giá niêm yết: </div>
          <div className="card__price">{price}</div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="card__price-label">Giá bán: </div>
          <div className="card__price">{price}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
