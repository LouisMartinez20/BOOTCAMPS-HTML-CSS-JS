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
const GROUP_ICON = "/icons/user.svg";
const groups = [
    {background: "#7C5CFF",name: "Sans Shoters",description: "Please support, guys",alt: "Grupo Sans Shoters",},
    {background: "#EA4C89",name: "Dribbble Indo",description: "May I share the latest s",alt: "Grupo Dribbble Indo",},
    {background: "#8ED1FC",name: "UI Indonesia",description: "Your design looks real",alt: "Grupo UI Indonesia",},
    {background: "#FFD166",name: "Cana Denning",description: "…",alt: "Grupo Cana Denning",},
];
export const GroupsInfo = () => {
    return (
        <StyledGroupsInfoContainer>
            <StyledGroupTitle>Groups</StyledGroupTitle>
            {groups.map((g, idx) => (
                <StyledGroupItem key={idx}>
                    <StyledGroupAvatar style={{ "--bg": g.background }}>
                        <StyledGroupAvatarImage src={GROUP_ICON} alt={g.alt} />
                    </StyledGroupAvatar>
                    <StyledGroupText>
                        <StyledGroupName>{g.name}</StyledGroupName>
                        <StyledGroupDescription>{g.description}</StyledGroupDescription>
                    </StyledGroupText>
                </StyledGroupItem>
            ))}
        </StyledGroupsInfoContainer>
    );
};