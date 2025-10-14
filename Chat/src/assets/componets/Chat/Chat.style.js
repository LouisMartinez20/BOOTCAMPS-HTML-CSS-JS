import { Link } from "react-router-dom";
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
export const StyledChatTitle = styled.h2`
  font-size: 20px;
  cursor: pointer;
  font-weight: 500;
`;
export const StyledChatsInfoContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;  
  background: #ffffffff;
`;
export const StyledChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 6px;
  border-radius: 8px;
  &:hover {
    background: #86dbfdff;
    cursor: pointer;
  }
  

`;
export const StyledChatDot = styled.span`
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ee1338ff;
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
  background: ${({ $bg }) => $bg };
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  &[data-dot="true"] ${StyledChatDot} {
    display: block;
  }
`;
export const StyledChatAvatarImage = styled.img`
  width: 70%;
  height: 70%;
  display: block;
  object-fit: contain;
`;
export const StyledChatText = styled.div`
  flex: 1;
  text-decoration: none;
`;
export const StyledChatName = styled.div`
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
`;
export const StyledChatDescription = styled.div`
  color: #7575758a;
`;
export const StyledGroupTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
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
  &:hover {
    background: #86dbfdff;
    cursor: pointer;
  }
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
  background: ${({ $bg }) => $bg};
`;
export const StyledGroupAvatarImage = styled.img`
  width: 70%;
  height: 70%;
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
export const StyledChatLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;