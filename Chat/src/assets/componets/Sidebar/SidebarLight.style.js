import styled from 'styled-components';
import {
  StyledSidebarWrapper as BaseWrapper,
  StyledAvatarInner as BaseAvatarInner,
  StyledInfoFieldIconWrap as BaseInfoIconWrap,
  StyledInfoFieldValue as BaseInfoValue,
  StyledInfoFieldLabel as BaseInfoLabel,
  StyledMenuItem as BaseMenuItem,
  StyledPromoBlock as BasePromoBlock,
  StyledName as BaseName,
  StyledRole as BaseRole,
  StyledToggleVisual as BaseToggleVisual,
  StyledPromoTitle as BasePromoTitle,
  StyledPromoHighlight as BasePromoHighlight
} from './Sidebar.style';
export const StyledSidebarWrapperLight = styled(BaseWrapper)`
  background: #ffffff;
  color: #181b21;
  border-right: 1px solid #e2e5e9;
  /* Importante: aquí NO ponemos el filtro de iconos */
  img[data-sidebar-icon="true"] {
    filter: none;
  }
`;
export const StyledAvatarInnerLight = styled(BaseAvatarInner)`
  background: #eff1f5;
`;
export const StyledInfoFieldIconWrapLight = styled(BaseInfoIconWrap)`
  background: #eef0f3;
`;
export const StyledInfoFieldValueLight = styled(BaseInfoValue)`
  color: #181b21;
`;
export const StyledInfoFieldLabelLight = styled(BaseInfoLabel)`
  color: #7c8593;
`;
export const StyledMenuItemLight = styled(BaseMenuItem)`
  color: #181b21;
  &:hover {
    background: #eef1f6;
  }
  &.is-active {
    background: #e7eafd;
    color: #181b21;
  }
`;
export const StyledPromoBlockLight = styled(BasePromoBlock)`
  background: #ffffff;
  border: 1px solid #d9dde2;
  color: #181b21;
`;
export const StyledPromoTitleLight = styled(BasePromoTitle)`
  color: #181b21;
`;
export const StyledPromoHighlightLight = styled(BasePromoHighlight)`
  color: #0a9a61;
`;
export const StyledNameLight = styled(BaseName)`
  color: #181b21;
`;
export const StyledRoleLight = styled(BaseRole)`
  color: #68707f;
`;
export const StyledToggleVisualLight = styled(BaseToggleVisual)`
  background: #d4d8de;
  border: 1px solid #c5cad1;
  .is-on & {
    background: #6d4bff;
    border-color: #6d4bff;
  }
`;