import { StyledChatContainer } from "./Chat.style"
import { ChatsInfo } from "./ChatsInfo"
import { GroupsInfo } from "./GroupsInfo"
export const Chat = () => {
  return (
    <StyledChatContainer>
      <ChatsInfo />
      <GroupsInfo />
    </StyledChatContainer>
  )
}
