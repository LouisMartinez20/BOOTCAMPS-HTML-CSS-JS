import {
  StyledMessageContent,
  StyledInputWrapper,
  StyledPaperclipIcon,
  StyledTextInput,
  StyledMicButton,
  StyledMicIcon,
  StyledSendIconWrapper,
} from './Message.style'
const paperclip = '/icons/paperclip.svg'
const mic = '/icons/mic.svg'
const send = '/icons/send.svg'
export const Message = () => {
  return (
    <StyledMessageContent>
      <StyledInputWrapper>
        <StyledPaperclipIcon src={paperclip}  />
        <StyledTextInput placeholder="Type a message" />
        <StyledSendIconWrapper src={send} >
        </StyledSendIconWrapper>
      </StyledInputWrapper>
      <StyledMicButton >
        <StyledMicIcon src={mic}  />
      </StyledMicButton>
    </StyledMessageContent>
  )
}