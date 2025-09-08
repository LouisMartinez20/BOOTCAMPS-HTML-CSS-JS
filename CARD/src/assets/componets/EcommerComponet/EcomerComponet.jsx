// EcomerComponent.jsx (Componente principal refactorizado)
import React from "react";
import { GlobalStyle, Modal, CloseButton } from "./style";
import ModalHeader from "./ModalHeader";
import ProductInfo from "./ProductInfo";
import OfferSection from "./OfferSection";
const EcomerComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Modal role="dialog" aria-labelledby="title">
        <CloseButton aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.75 5.34 5.34 6.75 10.59 12l-5.25 5.25 1.41 1.41L12 13.41l5.25 5.25 1.41-1.41L13.41 12l5.25-5.25-1.41-1.41L12 10.59 6.75 5.34z" />
          </svg>
        </CloseButton>
        <ModalHeader
          title="Make an offer"
          subtitle="Submit your offer to the shop and wait for a response."
        />
        <ProductInfo
          productName='MacBook Pro 16" M3 12-CoreCPU 18-CoreGPU 36/512GB Space Black'
          shipFrom="Brunswick East, Australia"
          price="$5,200"
          shippingCost="49"
        />
        <OfferSection />
      </Modal>
    </>
  );
};
export default EcomerComponent;
