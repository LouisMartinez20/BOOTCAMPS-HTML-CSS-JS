import {
  SectionContainer,
  SectionHeader,
  ImageContainer,
  Tag,
  DateText,
  Title,
  Description,
  ContinueLink,
} from "./StyledSectionStyles";
export const SectionOne = (props) => {
  const {
    imageSrc,
    imageAlt = "section-one-image",
    tag,
    date,
    title,
    description,
    linkHref = "#",
    linkText = "continue reading",
  } = props;
  return (
    <SectionContainer>
      <SectionHeader>
        <ImageContainer>
          {imageSrc ? <img src={imageSrc} alt={imageAlt} /> : null}
        </ImageContainer>
        {tag ? <Tag>{tag}</Tag> : null}
        {date ? <DateText>{date}</DateText> : null}
      </SectionHeader>
      {title ? <Title>{title}</Title> : null}
      {description ? <Description>{description}</Description> : null}
      {linkHref ? <ContinueLink href={linkHref}>{linkText}</ContinueLink> : null}
    </SectionContainer>
  );
};