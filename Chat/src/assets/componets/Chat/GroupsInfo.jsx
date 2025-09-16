import { Link } from "react-router-dom"; // ← Agregar esta importación
import {
    StyledGroupsInfoContainer,
    StyledGroupItem,
    StyledGroupAvatar,
    StyledGroupAvatarImage,
    StyledGroupText,
    StyledGroupName,
    StyledGroupDescription,
    StyledGroupTitle,
} from "./Chat.style";
import { groups } from "../../data/data";
const GROUP_ICON = "/icons/user.svg";
export const GroupsInfo = () => {
  return (
    <StyledGroupsInfoContainer>
      <StyledGroupTitle>Groups</StyledGroupTitle>
      {groups.map((g) => (
        <Link key={g.groupid} to={`/group/${g.groupid}`}>
          <StyledGroupItem>
            <StyledGroupAvatar style={{ "--bg": g.background }}>
              <StyledGroupAvatarImage src={GROUP_ICON} />
            </StyledGroupAvatar>
            <StyledGroupText>
              <StyledGroupName>{g.name}</StyledGroupName>
              <StyledGroupDescription>{g.description}</StyledGroupDescription>
            </StyledGroupText>
          </StyledGroupItem>
        </Link>
      ))}
    </StyledGroupsInfoContainer>
  );
};