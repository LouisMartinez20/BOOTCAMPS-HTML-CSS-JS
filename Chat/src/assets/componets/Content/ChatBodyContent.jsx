// ChatBodyContent.jsx (arreglo mínimo)
import { useParams } from "react-router-dom";
import { useMessages } from "../../context/MessagesContext";
import { profiles, groups } from "../../data/data";
import {
  StyledChatBody,
  StyledMessageBubble,
  StyledMessageAvatar,
  StyledChatAvatar,            // <-- AÑADIR ESTO
  StyledChatAvatarImage,
  StyledMessageTime,
  StyledMessageWrapper,
  StyledEmptyState,
} from "./Content.style";
const user = "/icons/user.svg";
const getCurrentTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
export const ChatBodyContent = () => {
  const { id, groupId } = useParams();
  const { messages } = useMessages();
  const chatKey = id ? `chat-${id}` : groupId ? `group-${groupId}` : null;
  const data = id
    ? profiles.find((p) => p.id === Number(id))
    : groupId
    ? groups.find((g) => g.groupid === Number(groupId))
    : null;
  if (!data) return <StyledEmptyState>No se encontró el chat o grupo</StyledEmptyState>;
  const chatMessages = messages[chatKey] || [];
  return (
    <StyledChatBody>
      {chatMessages.length === 0 ? (
        <StyledEmptyState>No hay mensajes todavía</StyledEmptyState>
      ) : (
        chatMessages.map((msg, idx) => (
          <StyledMessageWrapper key={idx}>
            <StyledMessageBubble>{msg}</StyledMessageBubble>
            <StyledMessageAvatar>
              <StyledChatAvatar style={{ "--bg": data.background }}>
                <StyledChatAvatarImage src={user} alt={data.alt} />
              </StyledChatAvatar>
            </StyledMessageAvatar>
            <StyledMessageTime>{getCurrentTime()}</StyledMessageTime>
          </StyledMessageWrapper>
        ))
      )}
    </StyledChatBody>
  );
};
