import { Link } from "react-router-dom";
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
} from "./Chat.style";
import { profiles } from "../../data/data";
const USER_ICON = "/icons/user.svg";
export const ChatsInfo = () => {
  return (
    <>
      <StyledChatTitle>Chats</StyledChatTitle>
      <StyledChatsInfoContainer>
        {profiles.map((p, idx) => (
          <Link key={idx} to={`/chat/${p.id}`}>
            <StyledChatItem>
              <StyledChatAvatar
                style={{ "--bg": p.background }}
                data-dot={String(p.dot)}
              >
                <StyledChatAvatarImage src={USER_ICON} alt={p.alt} />
                <StyledChatDot />
              </StyledChatAvatar>
              <StyledChatText>
                <StyledChatName>{p.name}</StyledChatName>
                <StyledChatDescription>{p.description}</StyledChatDescription>
              </StyledChatText>
            </StyledChatItem>
          </Link>
        ))}
      </StyledChatsInfoContainer>
    </>
  );
};
