// style.ts
import styled  ,{ createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body, #root {
    margin: 0;
    min-height: 100vh;
    font-family: system-ui, sans-serif;
    background: #ffffffff;
    color: #000000ff;
  }
`;
export const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;
export const MainColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 18px 20px;
  gap: 18px;
  box-sizing: border-box;
  min-width: 0;
`;
export const Workspace = styled.div`
  flex: 1;
  display: flex;
  gap: 18px;
  min-height: 0;
`;
export const Panel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 0;
  min-width: 0;
`;
