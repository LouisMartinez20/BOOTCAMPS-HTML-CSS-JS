import {
    StyledGroupsInfoContainer,
    StyledGroupItem,
    StyledGroupAvatar,
    StyledGroupAvatarImage,
    StyledGroupText,
    StyledGroupName,
    StyledGroupDescription,
    StyledGroupTitle,
    StyledChatLink
} from "./Chat.style";
import { groups } from "../../data/data";
const GROUP_ICON = "/icons/user.svg";
export const GroupsInfo = () => {
  return (
    <StyledGroupsInfoContainer>
      <StyledGroupTitle>Groups</StyledGroupTitle>
      {groups.map((g) => (
        <StyledChatLink key={g.groupid} to={`/group/${g.groupid}`}>
          <StyledGroupItem>
            <StyledGroupAvatar $bg={g.background}>
              <StyledGroupAvatarImage src={GROUP_ICON} />
            </StyledGroupAvatar>
            <StyledGroupText>
              <StyledGroupName>{g.name}</StyledGroupName>
              <StyledGroupDescription>{g.description}</StyledGroupDescription>
            </StyledGroupText>
          </StyledGroupItem>
        </StyledChatLink>
      ))}
    </StyledGroupsInfoContainer>
  );
};