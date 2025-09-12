import styled from "styled-components";
//Layout base del Sidebar
export const StyledSidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  background: #181b21;
  color: #ffffff;
  border-right: 1px solid #252a31;
  font-family: "Inter", system-ui, sans-serif;
  position: relative;
  overflow: hidden;
  img[data-sidebar-icon="true"] {
    filter: brightness(0) invert(1);
  }
`;
export const StyledSidebarDecor = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background: radial-gradient(
      circle at 0% 80%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at -10% 120%,
      rgba(255, 255, 255, 0.12) 0%,
      transparent 60%
    );
  mix-blend-mode: overlay;
`;
export const StyledTopSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
export const StyledSeparator = styled.div`
  height: 1px;
  background: #565d68ff;
  margin: 16px 0;
`;
export const StyledMenuScroll = styled.div`
  flex: 1;
  overflow-y: hidden;
  padding: 12px 8px;
  position: relative;
`;
export const StyledPromoCardWrapper = styled.div`
  padding: 12px 8px;
`;
//Perfil de usuario
export const StyledProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  text-align: center;
  position: relative;
`;
export const StyledAvatarOuter = styled.div`
  width: 94px;
  height: 94px;
  border-radius: 50%;
  background: linear-gradient(145deg, #6d4bff, #a063ff);
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const StyledAvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #262b33;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const StyledAvatarOverlayButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(5%, 5%);
  width: 30px;
  height: 30px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: #ffffff;
  color: #181b21;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  padding: 0;
  outline: none;
`;
export const StyledName = styled.div`
  margin-top: 12px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #ffffff;
`;
export const StyledRole = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: #b0b7c3;
`;
//Info fields (teléfono, usuario, estado)
export const StyledInfoFieldsBlock = styled.div`
  padding: 12px 16px 4px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px;
  gap: 10px;
`;
export const StyledInfoFieldRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
  position: relative;
  line-height: 1.2;
`;
export const StyledInfoFieldIconWrap = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: #20252d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
export const StyledInfoFieldTexts = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;
export const StyledInfoFieldValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #ffffff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const StyledInfoFieldLabel = styled.div`
  margin-top: 3px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #b0b7c3;
`;
//Menú lateral
export const StyledMenuBlock = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-between;
  margin: 0 20px;
`;

export const StyledMenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: none;
  padding: 8px 10px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  text-align: left;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.2;
`;

export const StyledMenuItemIcon = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

export const StyledMenuItemLabel = styled.span`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

// Nuevos estilos para el slide toggle
export const StyledSlideToggle = styled.button`
  position: relative;
  width: 60px;
  height: 28px;
  border: none;
  border-radius: 28px;
  background: ${({ "data-on": on }) => 
    on ? "linear-gradient(90deg, #6d4bff, #8e53ff)" : "#FFFFFF"};
  padding: 0;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  
`;

export const StyledSlider = styled.span`
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #181b21;
  transition: all 0.3s ease;
  left: ${({ "data-on": on }) => (on ? "calc(100% - 24px)" : "3px")};
  z-index: 2;
`;




// Mantén el toggle original por si acaso
export const StyledToggle = styled.button`
  position: relative;
  width: 44px;
  height: 22px;
  border: 1px solid #2a3038;
  border-radius: 22px;
  background: ${({ "data-on": on }) =>
    on ? "linear-gradient(90deg,#6d4bff,#8e53ff)" : "#ffffff"};
  padding: 0;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: background 0.25s;
  display: inline-block;
  
  & .thumb {
    position: absolute;
    top: 2px;
    left: ${({ "data-on": on }) => (on ? "22px" : "2px")};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #181b21;
    transition: left 0.25s;
    display: block;
  }
`;
//   Tarjeta promocional
export const StyledPromoBlock = styled.div`
  margin: 0;
  padding: 18px 16px;
  background: #10141c;
  border: 1px solid #565d68ff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 160px;
  font-size: 13px;
`;
export const StyledPromoTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.2px;
  margin-bottom: 6px;
  color: #ffffff;
`;
export const StyledPromoHighlight = styled.span`
  font-weight: 600;
  color: #00c27a;
`;
export const StyledPromoDescription = styled.div`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 1.45;
  margin-top: 4px;
  margin-bottom: 16px;
  color: #b0b7c3;
`;
export const StyledPromoButton = styled.button`
  display: inline-flex;
  align-items: end;
  justify-content: center;
  background: linear-gradient(90deg, #6d4bff, #8e53ff);
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  line-height: 1;
  border: none;
  border-radius: 8px;
  margin-top: 11px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.4);
`;
