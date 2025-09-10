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
  imageAlt = "section-one-image",
  tag,
  date,
  title,
  description,
  linkHref = "#",
  linkText = "continue reading",
}) => {
  return (
    <StyledSectionContainer>
      <StyledSectionHeader>
        <StyledImageContainer>
          {imageSrc ? (
            <img src={imageSrc} alt={imageAlt} loading="lazy" />
          ) : null}
        </StyledImageContainer>
        {tag ? <StyledTag>{tag}</StyledTag> : null}
        {date ? <StyledDateText>{date}</StyledDateText> : null}
      </StyledSectionHeader>
      {title ? <StyledTitle>{title}</StyledTitle> : null}
      {description ? <StyledDescription>{description}</StyledDescription> : null}
      {linkHref ? (
        <StyledContinueLink href={linkHref}>{linkText}</StyledContinueLink>
      ) : null}
    </StyledSectionContainer>
  );
};