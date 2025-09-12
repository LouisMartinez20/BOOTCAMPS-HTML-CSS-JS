import {
  StyledHead,
  StyledTile,
  StyledTitle,
  StyledSubtitle,
  StyledHeaderIcon,
} from "./StylesdEcommerComponent";
export const ModalHeader = ({
  title = "Make an offer",
  subtitle = "Submit your offer to the shop and wait for a response.",
}) => {
  return (
    <StyledHead>
      <StyledTile>
        <StyledHeaderIcon>account_circle</StyledHeaderIcon>
      </StyledTile>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </div>
    </StyledHead>
  );
};
export default ModalHeader;
