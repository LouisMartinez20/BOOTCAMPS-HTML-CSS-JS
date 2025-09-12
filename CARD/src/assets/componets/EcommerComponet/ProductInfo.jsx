import {
  StyledItem,
  StyledThumb,
  StyledInfo,
  StyledProductName,
  StyledShipInfo,
  StyledShipIcon,
  StyledRightColumn,
  StyledPrice,
  StyledShipping,
} from "./StylesdEcommerComponent";
export const ProductInfo = ({
  productName = 'MacBook Pro 16" M3 12-CoreCPU 18-CoreGPU 36/512GB Space Black',
  shipFrom = "Brunswick East, Australia",
  price = "$5,200",
  shippingCost = "49",
}) => {
  return (
    <StyledItem>
      <StyledThumb>
        <img
          src="/computer.webp"
          style={{ width: "48px", height: "48px",  }}
          alt=""
        />
      </StyledThumb>
      <StyledInfo>
        <StyledProductName>{productName}</StyledProductName>
        <StyledShipInfo>
          <StyledShipIcon className="material-symbols-outlined">
            local_shipping
          </StyledShipIcon>
          <span>
            Ships from: <a href="#">{shipFrom}</a>
          </span>
        </StyledShipInfo>
      </StyledInfo>
      <StyledRightColumn>
        <StyledPrice>{price}</StyledPrice>
        <StyledShipping>+{shippingCost} Shipping</StyledShipping>
      </StyledRightColumn>
    </StyledItem>
  );
};
export default ProductInfo;
