import {
  StyledChatsInfoContainer,
  StyledChatItem,
  StyledChatAvatar,
  StyledChatAvatarImage,
  StyledChatDot,
  StyledChatText,
  StyledChatName,
  StyledChatDescription,
  StyledChatTitle,
  StyledChatLink
} from "./Chat.style";
import { profiles } from "../../data/data";
const USER_ICON = "/icons/user.svg";
export const ChatsInfo = () => {
  return (
    <>
      <StyledChatTitle>Chats</StyledChatTitle>
      <StyledChatsInfoContainer>
        {profiles.map((p, idx) => (
          <StyledChatLink key={idx} to={`/chat/${p.id}`}>
            <StyledChatItem>
              <StyledChatAvatar $bg={p.background}
                data-dot={(p.dot)}>
                <StyledChatAvatarImage src={USER_ICON} alt={p.alt} />
                <StyledChatDot />
              </StyledChatAvatar>
              <StyledChatText>
                <StyledChatName>{p.name}</StyledChatName>
                <StyledChatDescription>{p.description}</StyledChatDescription>
              </StyledChatText>
            </StyledChatItem>
          </StyledChatLink>
        ))}
      </StyledChatsInfoContainer>
    </>
  );
};
