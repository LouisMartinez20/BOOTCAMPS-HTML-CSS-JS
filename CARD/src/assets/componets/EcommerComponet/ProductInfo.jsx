// ProductInfo.jsx
import React from "react";
import {
  Item,
  Thumb,
  Info,
  ShipInfo,
  RightColumn,
  Price,
  Shipping,
} from "./style";
const ProductInfo = ({ productName, shipFrom, price, shippingCost }) => {
  return (
    <Item>
      <Thumb aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5h16a2 2 0 0 1 2 2v9H2V7a2 2 0 0 1 2-2zm-2 13h20v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
        </svg>
      </Thumb>
      <Info>
        <div className="name">{productName}</div>
        <ShipInfo>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M1 5h13v9H1zM15 8h4l4 4v2h-2a3 3 0 0 0-6 0H9a3 3 0 0 0-6 0H1V8h14zm-9 9.5A1.5 1.5 0 1 0 6 19a1.5 1.5 0 0 0 0-1.5zm10 0A1.5 1.5 0 1 0 16 19a1.5 1.5 0 0 0 0-1.5z"
            />
          </svg>
          <span>
            Ships from:{" "}
            <a href="#" rel="noopener">
              {shipFrom}
            </a>
          </span>
        </ShipInfo>
      </Info>
      <RightColumn>
        <Price>{price}</Price>
        <Shipping>+{shippingCost} Shipping</Shipping>
      </RightColumn>
    </Item>
  );
};
export default ProductInfo;
