import React from "react";
import {
  StyledChatsInfoContainer,
  StyledChatItem,
  StyledChatAvatar,
  StyledChatAvatarImage,
  StyledChatDot,
  StyledChatText,
  StyledChatName,
  StyledChatDescription,
} from "./Chat.style";
const USER_ICON = "/icons/user.svg";
const profiles = [
  { background: "#dbfd8cff", name: "Jane Cooper", description: "Hello, don't forget to …", dot: true, alt: "Avatar de Jane Cooper" },
  { background: "#DFF8FF", name: "Jenny Wilson", description: "Hi there, nice to me …", dot: false, alt: "Avatar de Jenny Wilson" },
  { background: "#89f4fcff", name: "Bessie Cooper", description: "How are you, my friend …", dot: false, alt: "Avatar de Bessie Cooper" },
  { background: "#929292ff", name: "Guy Hawkins", description: "Where are you right no …", dot: false, alt: "Avatar de Guy Hawkins" },
  { background: "#81defaff", name: "Ralph Edwards", description: "Hello, I'm looking for y …", dot: false, alt: "Avatar de Ralph Edwards" },
];
export const ChatsInfo = () => {
  return (
    <StyledChatsInfoContainer>
      <h2>Chats</h2>
      {profiles.map((p, idx) => (
        <StyledChatItem key={idx}>
          <StyledChatAvatar
            style={{ "--bg": p.background }}
            data-dot={String(p.dot)} >
            <StyledChatAvatarImage src={USER_ICON} alt={p.alt} />
            <StyledChatDot aria-label="nuevo" title="nuevo" />
          </StyledChatAvatar>
          <StyledChatText>
            <StyledChatName>{p.name}</StyledChatName>
            <StyledChatDescription>{p.description}</StyledChatDescription>
          </StyledChatText>
        </StyledChatItem>
      ))}
    </StyledChatsInfoContainer>
  );
};