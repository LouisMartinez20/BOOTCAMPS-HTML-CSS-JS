import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMessages } from "../../context/MessagesContext";
import {
  StyledMessageContent,
  StyledInputWrapper,
  StyledPaperclipIcon,
  StyledTextInput,
  StyledMicButton,
  StyledMicIcon,
  StyledSendIconWrapper,
} from "./Message.style";
const paperclip = "/icons/paperclip.svg";
const mic = "/icons/mic.svg";
const send = "/icons/send.svg";
export const Message = () => {
  const [text, setText] = useState("");
  const { id, groupId } = useParams();
  const { addMessage } = useMessages();
  const chatKey = id ? `chat-${id}` : groupId ? `group-${groupId}` : null;
  const handleSend = () => {
    if (!text.trim() || !chatKey) return;
    addMessage(chatKey, text);
    setText("");
  };
  return (
    <StyledMessageContent>
      <StyledInputWrapper>
        <StyledPaperclipIcon src={paperclip} />
        <StyledTextInput
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <StyledSendIconWrapper src={send} onClick={handleSend} />
      </StyledInputWrapper>
      <StyledMicButton>
        <StyledMicIcon src={mic} />
      </StyledMicButton>
    </StyledMessageContent>
  );
};
