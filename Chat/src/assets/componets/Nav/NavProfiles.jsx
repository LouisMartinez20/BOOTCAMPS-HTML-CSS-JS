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
  {
    alt: "Profile 2",
    ring: "#f8f7beff",
    inner: "#ffffff",
    dot: "#20e7b2",
    highlight: "#20e7b2",
  },
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
            style={{
              "--ring": p.ring,
              "--highlight": p.highlight || "transparent",
              "--dot": p.dot || "transparent",
            }}
            data-dot={String(!!p.dot)}
          >
            <StyledMiniAvatarInner style={{ "--inner": p.inner }}>
              <StyledMiniAvatarImage src={USER_ICON} alt={p.alt} />
            </StyledMiniAvatarInner>
            <StyledMiniStatusDot aria-hidden={String(!p.dot)} />
          </StyledMiniAvatarRing>
        </StyledMiniProfileBlock>
      ))}
    </StyledProfilesRow>
  );
};
