import  styled  from 'styled-components';
export const StyledContentContainer = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  min-height: 0; 
  overflow: auto; 
  background: #ffffffff;
`;



export const StyledChatHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeef;
`

export const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const StyledName = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: #2b2b2b;
`

export const StyledSubtitle = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  line-height: 1.2;
  color: #9a9aa3;
`

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #1f1f1f;
`

export const StyledHeaderIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
  opacity: 0.95;
  /* Solo visual, sin interacción */
  pointer-events: none;
`

/* Avatar (tal como pediste) */
export const StyledChatAvatar = styled.span`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  background: var(--bg, #eeeeee);
`

export const StyledChatAvatarImage = styled.img`
  width: 18px;
  height: 18px;
  display: block;
  object-fit: contain;
`