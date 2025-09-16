import {
  StyledChatHeader,
  StyledLeft,
  StyledName,
  StyledSubtitle,
  StyledActions,
  StyledHeaderIcon,
  StyledChatAvatar,
  StyledChatAvatarImage,
} from './Content.style'
import { useParams } from 'react-router-dom'
import { profiles, groups } from '../../data/data'
const user = '/icons/user.svg'
const phone = '/icons/phone.svg'
const video = '/icons/video.svg'
const ellipsisVertical = '/icons/ellipsis-vertical.svg'
export const ProfileContent = () => {
  const { id, groupId } = useParams(); 
  const chat = id && profiles.find((p) => p.id === Number(id));
  const group = groupId && groups.find((g) => g.groupid === Number(groupId));
  const data = chat || group;
  return (
    <StyledChatHeader>
      <StyledLeft>
        <StyledChatAvatar style={{ '--bg': data.background }}>
          <StyledChatAvatarImage src={user} alt={data.alt} />
        </StyledChatAvatar>
        <div>
          <StyledName>{data.name}</StyledName>
          <StyledSubtitle>{data.description}</StyledSubtitle>
        </div>
      </StyledLeft>
      <StyledActions>
        <StyledHeaderIcon src={phone} />
        <StyledHeaderIcon src={video} />
        <StyledHeaderIcon src={ellipsisVertical} />
      </StyledActions>
    </StyledChatHeader>
  )
}
