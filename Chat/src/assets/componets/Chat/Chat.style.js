import styled from "styled-components";
export const StyledChatContainer = styled.div`
  width: 220px;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0 14px 18px 14px;
  box-sizing: border-box;
  background: #ffffffff;
  color: #000000;
  font-size: 12px;
`;
// Chats
export const StyledChatTitle = styled.h2`
  font-size: 20px;
`;
export const StyledChatsInfoContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;  
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
  right: -4px;
  bottom: -4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ee1338ff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: none; 
`;
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
  font-size: 16px;
`;
export const StyledChatDescription = styled.div`
  color: #555;
`;
// Groups  
export const StyledGroupTitle = styled.h2`
  font-size: 20px;
`;
export const StyledGroupsInfoContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledGroupItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 6px;
  border-radius: 8px;
`;
export const StyledGroupAvatar = styled.span`
  width: 42px;
  height: 42px;
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
  font-size: 16px;
`;
export const StyledGroupDescription = styled.div`
  color: #555;
`;