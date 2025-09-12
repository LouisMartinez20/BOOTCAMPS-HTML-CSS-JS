import styled, { css, createGlobalStyle } from "styled-components";
export const StyledGlobalStyle = createGlobalStyle`
  html, body {
    height:100%;
    margin:0;
    padding:0;
    background:#0d1430;
    color:#fff;
    overflow-x:hidden;
  }
`;
export const StyledStage = styled.div`
  width:100%;
  min-height:100vh;
  background:#0d1430;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:start;
  padding:40px clamp(20px,4vw,80px);
  overflow-x:hidden;
`;
export const StyledGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(3,400px);
  gap:48px;
  column-gap:92px;
  justify-content:center;
`;
const primaryVariant = css`
  --card-bg:#ffffff;
  --card-border:none;
  --card-shadow:0 28px 50px rgba(2,8,28,0.65);
  --text-number:#0b1830;
  --text-date:#0b1830;
  --text-info:#666;
  --text-name:#0b1830;
  --chip-bg:linear-gradient(140deg,#d4cca9,#b7ac85);
  --chip-border:1px solid rgba(0,0,0,0.25);
  --chip-shape-border:1px solid rgba(0,0,0,0.18);
  --logo-blend:multiply;
  --circle-border:0;
  --circle-bg-override:;
`;
const ghostVariant = css`
  --card-bg:rgba(255,255,255,0.03);
  --card-border:1px solid rgba(255,255,255,0.15);
  --card-shadow:none;
  --text-number:rgba(255,255,255,0.6);
  --text-date:rgba(255,255,255,0.7);
  --text-info:rgba(255,255,255,0.55);
  --text-name:rgba(255,255,255,0.62);
  --chip-bg:transparent;
  --chip-border:1px solid #ffffff;
  --chip-shape-border:1px solid rgba(255,255,255,0.8);
  --logo-blend:normal;
  --circle-border:1px solid #ffffff;
  --circle-bg-override:transparent;
`;
export const StyledCard = styled.div.withConfig({
  shouldForwardProp:(prop)=>prop!=="variant",
})`
  width:400px;
  height:250px;
  border-radius:14px;
  padding:24px;
  position:relative;
  display:flex;
  flex-direction:column;
  transition:0.4s ease;
  background:var(--card-bg);
  border:var(--card-border);
  box-shadow:var(--card-shadow);
  color:var(--text-number);
  overflow:hidden;
  ${({variant})=>variant==="ghost"?ghostVariant:primaryVariant}
`;
export const StyledChip = styled.div`
  width:58px;
  height:40px;
  border-radius:6px;
  margin-top:auto;
  background:var(--chip-bg);
  position:relative;
  box-shadow:inset 0 0 0 1px var(--chip-border-color,rgba(0,0,0,0.25));
  border:var(--chip-border);
  display:flex;
  align-items:center;
  justify-content:center;
  &::after,
  &::before{
    content:"";
    position:absolute;
    top:50%;
    left:50%;
    width:70%;
    height:40%;
    transform:translate(-50%,-50%);
    border:var(--chip-shape-border);
    border-radius:4px;
    pointer-events:none;
  }
  &::before{
    width:36%;
    height:70%;
  }
`;
export const StyledNumber = styled.div`
  font-family:"Arial",monospace;
  font-size:30px;
  letter-spacing:3px;
  margin:14px 0 10px;
  color:var(--text-number);
  text-align:center;
  font-weight:400;
`;
export const StyledExpiry = styled.div`
  font-size:12px;
  margin-bottom:18px;
  text-align:center;
  display:flex;
  flex-direction:row;
  justify-content:center;
  gap:26px;
`;
export const StyledDate = styled.div`
  font-size:24px;
  font-family:"Space Mono",monospace;
  letter-spacing:3px;
  color:var(--text-date);
`;
export const StyledInfo = styled.div`
  text-align:end;
  font-size:11px;
  letter-spacing:1px;
  line-height:1.1;
  font-weight:600;
  color:var(--text-info);
`;
export const StyledName = styled.div`
  font-size:16px;
  font-weight:500;
  letter-spacing:3px;
  color:var(--text-name);
`;
export const StyledLogo = styled.div`
  position:absolute;
  bottom:18px;
  right:22px;
  display:flex;
  align-items:center;
  mix-blend-mode:var(--logo-blend);
`;
export const StyledCircle = styled.div.withConfig({
  shouldForwardProp:(prop)=>!["overlap","color"].includes(prop),
})`
  width:40px;
  height:40px;
  border-radius:50%;
  ${({color})=>color && `background: var(--circle-bg-override, ${color});`}
  border:var(--circle-border);
  ${({overlap})=>overlap && `margin-right:-12px; z-index:1;`}
`;