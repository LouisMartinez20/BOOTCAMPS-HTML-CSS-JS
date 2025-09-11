import * as React from 'react';
import {
  StyledProfileBlock,
  StyledAvatarOuter,
  StyledAvatarInner,
  StyledAvatarImage,
  StyledAvatarInitial,
  StyledAvatarOverlayButton,
  StyledName,
  StyledRole
} from './Sidebar.style';
export const SidebarProfile = function (props) {
  let localName = 'Usuario';
  if (props.name) {
    localName = props.name;
  }
  let localRole = 'Rol / Cargo';
  if (props.role) {
    localRole = props.role;
  }
  let hasSrc = false;
  if (props.avatarSrc) {
    hasSrc = true;
  }
  const [errorState, setErrorState] = React.useState(false);
  let showImage = hasSrc && !errorState;
  const AvatarInnerComp = props.AvatarInnerComponent ? props.AvatarInnerComponent : StyledAvatarInner;
  const NameComp = props.NameComponent ? props.NameComponent : StyledName;
  const RoleComp = props.RoleComponent ? props.RoleComponent : StyledRole;
  return (
    <StyledProfileBlock>
      <StyledAvatarOuter>
        <AvatarInnerComp>
          {showImage ? (
            <StyledAvatarImage
              src={props.avatarSrc}
              alt={localName}
              onError={function () {
                setErrorState(true);
              }}
            />
          ) : (
            <StyledAvatarInitial>
              {localName.charAt(0).toUpperCase()}
            </StyledAvatarInitial>
          )}
        </AvatarInnerComp>
        <StyledAvatarOverlayButton
          type="button"
          onClick={function () {
            if (props.onChangeAvatar) {
              props.onChangeAvatar();
            }
          }}
          aria-label="Cambiar avatar"
          title="Cambiar avatar"
        >
          <img
            src="/icons/camera.svg"
            alt=""
            width="18"
            height="18"
            style={{ display: 'block' }}
          />
        </StyledAvatarOverlayButton>
      </StyledAvatarOuter>
      <NameComp>{localName}</NameComp>
      <RoleComp>{localRole}</RoleComp>
    </StyledProfileBlock>
  );
};