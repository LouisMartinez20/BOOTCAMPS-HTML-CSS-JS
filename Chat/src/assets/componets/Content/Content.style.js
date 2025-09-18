import  styled  from 'styled-components';
export const StyledContentContainer = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
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
export const StyledChatBody = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const StyledMessageBubble = styled.div`
  align-self: flex-end;
  background: #7b61ff;
  color: white;
  font-size: 18px;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  max-width: 70%;
  word-break: break-word;
  border-radius: 12px 12px 0 12px;
`;
export const StyledMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const StyledMessageAvatar = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: flex-end;
`;
export const StyledMessageTime = styled.span`
  font-size: 12px;
  color: #aaa;
  margin-top: 2px;
  align-self: flex-end;
`;
export const StyledEmptyState = styled.div`
  color: #aaa;
  font-size: 14px;
  text-align: center;
  padding: 1rem;
`;
