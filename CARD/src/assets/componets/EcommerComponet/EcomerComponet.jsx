import {
  StyledGlobalStyle,
  StyledModal,
  StyledCloseButton,
  StyledIconClose,
} from "./StylesdEcommerComponent";
import { ModalHeader } from "./ModalHeader";
import { ProductInfo } from "./ProductInfo";
import { OfferSection } from "./OfferSection";
export const EcommerceComponent = () => {
  return (
    <>
      <StyledGlobalStyle />
      <StyledModal>
        <StyledCloseButton>
          <StyledIconClose >
            close
          </StyledIconClose>
        </StyledCloseButton>
        <ModalHeader
        />
        <ProductInfo
        />
        <OfferSection
        />
      </StyledModal>
    </>
  );
};
export default EcommerceComponent;