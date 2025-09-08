import styled, { css } from "styled-components";
export const colors = {
  bgCard: "#FFFFFF",
  bgSoft: "#F4F5F8",
  border: "#E6E8EC",
  accent: "#FFA400",
  textPrimary: "#2B2F33",
  textSecondary: "#6F7680",
  textMuted: "#A2A9B3",
  purple: "#8B5CF6",
};
export const radii = {
  card: "16px",
};
export const shadows = {
  card: "0 8px 28px -6px rgba(27,33,48,0.08), 0 2px 4px rgba(27,33,48,0.06)",
};
export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  background: ${colors.bgCard};
  border-radius: ${radii.card};
  display: flex;
  overflow: hidden;
  box-shadow: ${shadows.card};
  font-family: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
  /* Centrado horizontal dentro de su contenedor */
  margin: 0 auto;
`;
export const PageCenter = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px; /* algo de respiro en móviles */
  background: ${colors.bgSoft};
`;
export const ImagePane = styled.div`
  width: 300px;
  min-height: 340px;
  position: relative;
  background: #ddd;
  flex-shrink: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;
export const MiddleNavigation = styled.nav`
  width: 90px;
  background: #fff;
  border-right: 1px solid ${colors.border};
  border-left: 1px solid ${colors.border};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const NavItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 48px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const NavItem = styled.li`
  position: relative;
  cursor: default;
  display: flex;
  align-items: center;
  padding: 8px 0;
  flex-direction: column;
  gap: 6px;
  color: ${colors.textMuted};
  font-size: 11px;
  letter-spacing: 0.4px;
  font-weight: 500;
  user-select: none;
  .material-symbols-outlined {
    font-size: 26px;
    line-height: 1;
  }
  ${({ active }) =>
    active &&
    css`
      color: ${colors.textSecondary};
      font-weight: 600;
      .material-symbols-outlined {
        color: ${colors.accent};
      }
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 6px;
        height: calc(100% - 12px);
        width: 4px;
        background: ${colors.accent};
        border-radius: 4px;
      }
    `}
`;
export const ContentPane = styled.div`
  flex: 1;
  padding: 40px 48px 44px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  text-align: center;
`;
export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  margin-right: auto;
  text-align: left;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.textPrimary};
  line-height: 1.15;
  letter-spacing: 0.2px;
`;
export const Subline = styled.div`
  font-size: 12.5px;
  color: ${colors.textSecondary};
  a {
    color: blue;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  align-items: start;
`;
export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 480px;
`;
export const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${colors.textSecondary};
`;
export const InfoLines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  font-size: 13px;
  line-height: 1.35;
  color: ${colors.textSecondary};
  max-width: 480px;
  text-align: left;
  span.muted {
    color: ${colors.textMuted};
  }
`;
export const EditButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  color: ${colors.textMuted};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${colors.bgSoft};
    color: ${colors.textSecondary};
  }
  .material-symbols-outlined {
    font-size: 20px;
    line-height: 1;
  }
`;
/* METHOD (RESTORED) */
export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 4px;
  width: 100%;
  max-width: 480px;
`;
export const DeliveryChoice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  font-size: 13px;
  color: ${colors.textPrimary};
  line-height: 1.3;
  user-select: none;
  text-align: left;
  .radio {
    width: 16px;
    height: 16px;
    border: 2px solid ${colors.border};
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    background: #fff;
  }
  ${({ checked }) =>
    checked &&
    css`
      .radio {
        border-color: ${colors.purple};
      }
      .radio:after {
        content: "";
        width: 16px;
        height: 16px;
        background: ${colors.purple};
        border-radius: 50%;
      }
    `}
`;
export const Muted = styled.span`
  color: ${colors.textMuted};
`;
export const ActionsMenu = styled.button`
  all: unset;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 8px;
  color: ${colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${colors.bgSoft};
    color: ${colors.textPrimary};
  }
  .material-symbols-outlined {
    font-size: 20px;
    line-height: 1;
  }
`;
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${colors.border};
  margin: 0;
  width: 100%;
  max-width: 480px;
`;
