import {
  StyledProfileBlock,
  StyledAvatarOuter,
  StyledAvatarInner,
  StyledAvatarImage,
  StyledAvatarOverlayButton,
  StyledName,
  StyledRole,
} from "./Sidebar.style";
const USER_NAME = "Savannah Nguyen";
const USER_ROLE = "Product Designer";
const AVATAR_SRC = "/avatars/avatarone.webp";
export function SidebarProfile() {
  return (
    <StyledProfileBlock>
      <StyledAvatarOuter>
        <StyledAvatarInner>
          <StyledAvatarImage src={AVATAR_SRC} alt={USER_NAME} />
        </StyledAvatarInner>
        <StyledAvatarOverlayButton>
          <img src="/icons/camera.svg" height="18" />
        </StyledAvatarOverlayButton>
      </StyledAvatarOuter>
      <StyledName>{USER_NAME}</StyledName>
      <StyledRole>{USER_ROLE}</StyledRole>
    </StyledProfileBlock>
  );
}
