import {
  StyledSectionContainer,
  StyledSectionHeader,
  StyledImageContainer,
  StyledTag,
  StyledDateText,
  StyledTitle,
  StyledDescription,
  StyledContinueLink,
} from "./StylesSections";
export const SectionOne = ({
  imageSrc,
  imageAlt,
  tag,
  date,
  title,
  description,
  linkHref,
  linkText,
}) => {
  return (
    <StyledSectionContainer>
      <StyledSectionHeader>
        <StyledImageContainer>
          <img src={imageSrc} alt={imageAlt} />
        </StyledImageContainer>
        <StyledTag>{tag}</StyledTag>
        <StyledDateText>{date}</StyledDateText>
      </StyledSectionHeader>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledContinueLink href={linkHref}>{linkText}</StyledContinueLink>
    </StyledSectionContainer>
  );
};