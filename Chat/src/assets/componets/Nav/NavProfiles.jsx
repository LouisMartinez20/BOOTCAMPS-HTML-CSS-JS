import {
  StyledProfilesRow,
  StyledMiniProfileBlock,
  StyledMiniAvatarRing,
  StyledMiniAvatarInner,
  StyledMiniAvatarImage,
  StyledMiniStatusDot,
} from "./Nav.style";
const USER_ICON = "/icons/user.svg";
const profiles = [
  { alt: "Profile 1", ring: "#f4d27d", inner: "#f4d27d", dot: "#747474ff" },
  { alt: "Profile 2", ring: "#20e7b2", inner: "#ffffff", dot: "#20e7b2" },
  { alt: "Profile 3", ring: "#c6bafc", inner: "#c6bafc", dot: "#727274ff" },
  { alt: "Profile 4", ring: "#e1e3e7", inner: "#e1e3e7" },
  { alt: "Profile 5", ring: "#f3a8b4", inner: "#f3a8b4" },
  { alt: "Profile 6", ring: "#c6bafc", inner: "#c6bafc" },
];
export const NavProfiles = () => {
  return (
    <StyledProfilesRow>
      {profiles.map((p, idx) => (
        <StyledMiniProfileBlock key={idx}>
          <StyledMiniAvatarRing
            data-dot={!!p.dot}
            style={{
              background: p.ring,}}>
            <StyledMiniAvatarInner style={{ background: p.inner }}>
              <StyledMiniAvatarImage src={USER_ICON} alt={p.alt} />
            </StyledMiniAvatarInner>
            <StyledMiniStatusDot style={{ background: p.dot || "transparent" }} />
          </StyledMiniAvatarRing>
        </StyledMiniProfileBlock>
      ))}
    </StyledProfilesRow>
  );
};