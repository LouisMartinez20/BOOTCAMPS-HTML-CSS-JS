import styled from "styled-components";
export const StyledChatContainer = styled.div`
  width: 260px;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffffffff;
  color: #000000;
  font-size: 12px;
`;
// Chats
export const StyledChatsInfoContainer = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px 0 ;
`;
export const StyledChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 6px;
  border-radius: 8px;
`;
export const StyledChatDot = styled.span`
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #20e7b2;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: none; 
`;
export const StyledChatAvatar = styled.span`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  background: var(--bg, #eeeeee); 
  &[data-dot="true"] ${StyledChatDot} {
    display: block;
  }
`;
export const StyledChatAvatarImage = styled.img`
  width: 18px;
  height: 18px;
  display: block;
  object-fit: contain;
`;
export const StyledChatText = styled.div`
  flex: 1;
`;
export const StyledChatName = styled.div`
  font-weight: 600;
`;
export const StyledChatDescription = styled.div`
  color: #555;
`;
// Groups  
export const StyledGroupsInfoContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
`;
export const StyledGroupItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 6px;
  border-radius: 8px;
`;
export const StyledGroupAvatar = styled.span`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  background: var(--bg, #eeeeee); 
`;
export const StyledGroupAvatarImage = styled.img`
  width: 18px;
  height: 18px;
  display: block;
  object-fit: contain;
`;
export const StyledGroupText = styled.div`
  flex: 1;
`;
export const StyledGroupName = styled.div`
  font-weight: 600;
`;
export const StyledGroupDescription = styled.div`
  color: #555;
`;