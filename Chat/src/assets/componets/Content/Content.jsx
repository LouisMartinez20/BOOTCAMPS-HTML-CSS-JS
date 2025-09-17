import { StyledContentContainer } from "./Content.style";
import { Routes, Route } from "react-router-dom";
import { ProfileContent } from "./ProfileContent";
import { ChatBodyContent } from "./ChatBodyContent";
import { Message } from "./Message"; // Message como sibling, no desde el body
export const Content = () => {
  return (
    <StyledContentContainer>
      <Routes>
        <Route
          path="/chat/:id"
          element={
            <>
              <ProfileContent />
              <ChatBodyContent />
              <Message />
            </>
          }
        />
        <Route
          path="/group/:groupId"
          element={
            <>
              <ProfileContent />
              <ChatBodyContent />
              <Message />
            </>
          }
        />
        <Route path="*" element={<div>Selecciona un chat o un grupo</div>} />
      </Routes>
    </StyledContentContainer>
  );
};
