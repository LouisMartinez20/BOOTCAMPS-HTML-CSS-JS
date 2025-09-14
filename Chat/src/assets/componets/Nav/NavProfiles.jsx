import {
  StyledProfilesRow,
  StyledMiniProfileBlock,
  StyledMiniAvatarRing1,
  StyledMiniAvatarInner1,
  StyledMiniStatusDot1,
  StyledMiniAvatarRing2,
  StyledMiniAvatarInner2,
  StyledMiniStatusDot2,
  StyledMiniAvatarRing3,
  StyledMiniAvatarInner3,
  StyledMiniStatusDot3,
  StyledMiniAvatarRing4,
  StyledMiniAvatarInner4,
  StyledMiniAvatarRing5,
  StyledMiniAvatarInner5,
  StyledMiniAvatarRing6,
  StyledMiniAvatarInner6,
  StyledMiniAvatarImage
} from "./Nav.style";

const USER_ICON = "/icons/user.svg";

export const NavProfiles = () => (
  <StyledProfilesRow>
    <StyledMiniProfileBlock>
      <StyledMiniAvatarRing1>
        <StyledMiniAvatarInner1>
            <StyledMiniAvatarImage src={USER_ICON} alt="Profile 1" />
        </StyledMiniAvatarInner1>
        <StyledMiniStatusDot1 />
      </StyledMiniAvatarRing1>
    </StyledMiniProfileBlock>

    <StyledMiniProfileBlock>
      <StyledMiniAvatarRing2>
        <StyledMiniAvatarInner2>
            <StyledMiniAvatarImage src={USER_ICON} alt="Profile 2" />
        </StyledMiniAvatarInner2>
        <StyledMiniStatusDot2 />
      </StyledMiniAvatarRing2>
    </StyledMiniProfileBlock>

    <StyledMiniProfileBlock>
      <StyledMiniAvatarRing3>
        <StyledMiniAvatarInner3>
            <StyledMiniAvatarImage src={USER_ICON} alt="Profile 3" />
        </StyledMiniAvatarInner3>
        <StyledMiniStatusDot3 />
      </StyledMiniAvatarRing3>
    </StyledMiniProfileBlock>

    <StyledMiniProfileBlock>
      <StyledMiniAvatarRing4>
        <StyledMiniAvatarInner4>
            <StyledMiniAvatarImage src={USER_ICON} alt="Profile 4" />
        </StyledMiniAvatarInner4>
      </StyledMiniAvatarRing4>
    </StyledMiniProfileBlock>

    <StyledMiniProfileBlock>
      <StyledMiniAvatarRing5>
        <StyledMiniAvatarInner5>
            <StyledMiniAvatarImage src={USER_ICON} alt="Profile 5" />
        </StyledMiniAvatarInner5>
      </StyledMiniAvatarRing5>
    </StyledMiniProfileBlock>

    <StyledMiniProfileBlock>
      <StyledMiniAvatarRing6>
        <StyledMiniAvatarInner6>
            <StyledMiniAvatarImage src={USER_ICON} alt="Profile 6" />
        </StyledMiniAvatarInner6>
      </StyledMiniAvatarRing6>
    </StyledMiniProfileBlock>
  </StyledProfilesRow>
);