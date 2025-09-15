import styled from 'styled-components'
export const StyledMessageContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-top: auto;
  min-height: 60px;
  background: #ffffffff;
box-shadow: 0 -4px 6px rgba(86, 81, 112, 0.4);
`
export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  height: 48px;
  background: #f3f3f5;
  border: 1px solid #eeeeef;
  border-radius: 28px;
  padding: 0 44px; /* espacio para clip a la izq y avión a la der */
  color: #2b2b2b;
`
export const StyledPaperclipIcon = styled.img`
  position: absolute;
  left: 12px;
  width: 20px;
  height: 20px;
  opacity: 0.75;
  pointer-events: none;
`
export const StyledTextInput = styled.input.attrs({ type: 'text' })`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font-size: 14px;
`
export const StyledSendIconWrapper = styled.img`
  position: absolute;
  right: 14px;
  width: 28px;
  height: 28px;
  pointer-events: none;
  padding-left: 20px;
`
export const StyledMicButton = styled.button`
  flex: 0 0 auto;
  width: 64px;
  height: 64px;
  border: 0;
  outline: 0;
  border-radius: 50%;
  background: #7b61ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
`
export const StyledMicIcon = styled.img`
  width: 38px;
  height: 38px;
  filter: brightness(0) invert(1);
`