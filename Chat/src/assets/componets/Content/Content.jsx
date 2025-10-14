import { StyledContentContainer } from "./Content.style";
import { Routes, Route } from "react-router-dom";
import { ProfileContent } from "./ProfileContent";
import { ChatBodyContent } from "./ChatBodyContent";
import { Message } from "./Message";
const ChatLayout = () => (
  <>
    <ProfileContent />
    <ChatBodyContent />
    <Message />
  </>
);
export const Content = () => (
  <StyledContentContainer>
    <Routes>
      <Route path="/chat/:id" element={<ChatLayout />} />
      <Route path="/group/:groupId" element={<ChatLayout />} />
      <Route path="*" element={<div>Selecciona un chat o un grupo</div>} />
    </Routes>
  </StyledContentContainer>
);
