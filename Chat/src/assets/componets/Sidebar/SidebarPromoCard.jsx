import {
  StyledPromoBlock,
  StyledPromoTitle,
  StyledPromoHighlight,
  StyledPromoDescription,
  StyledPromoButton,
} from "./Sidebar.style";
export const SidebarPromoCard = function (props) {
  let localTitle = "Mychats";
  if (props.title) {
    localTitle = props.title;
  }
  let highlight = "Premium";
  if (props.highlightWord) {
    highlight = props.highlightWord;
  }
  let descriptionLocal =
    "Experience enhanced features and improved accessibility.";
  if (props.description) {
    descriptionLocal = props.description;
  }
  let actionText = "Buy Now";
  if (props.actionLabel) {
    actionText = props.actionLabel;
  }
  const PromoBlockComp = props.PromoBlockComponent
    ? props.PromoBlockComponent
    : StyledPromoBlock;
  const PromoTitleComp = props.PromoTitleComponent
    ? props.PromoTitleComponent
    : StyledPromoTitle;
  const PromoHighlightComp = props.PromoHighlightComponent
    ? props.PromoHighlightComponent
    : StyledPromoHighlight;
  function handleAction() {
    if (props.onAction) {
      props.onAction();
    }
  }
  return (
    <PromoBlockComp>
      <PromoTitleComp>
        {localTitle} <PromoHighlightComp>{highlight}</PromoHighlightComp>
      </PromoTitleComp>
      <StyledPromoDescription>{descriptionLocal}</StyledPromoDescription>
      <StyledPromoButton
        type="button"
        onClick={function () {
          handleAction();
        }}
      >
        {actionText}
      </StyledPromoButton>
    </PromoBlockComp>
  );
};
