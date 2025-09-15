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
const user = '/icons/user.svg'
const phone = '/icons/phone.svg'
const video = '/icons/video.svg'
const ellipsisVertical = '/icons/ellipsis-vertical.svg'
export const ProfileContent = () => {
  return (
    <StyledChatHeader>
      <StyledLeft>
        <StyledChatAvatar style={{ '--bg': '#FFD7A8' }}>
          <StyledChatAvatarImage src={user}  />
        </StyledChatAvatar>
        <div>
          <StyledName>Jenny Wilson</StyledName>
          <StyledSubtitle>Minutes Ago</StyledSubtitle>
        </div>
      </StyledLeft>
      <StyledActions>
        <StyledHeaderIcon src={phone}  />
        <StyledHeaderIcon src={video}  />
        <StyledHeaderIcon src={ellipsisVertical}  />
      </StyledActions>
    </StyledChatHeader>
  )
}