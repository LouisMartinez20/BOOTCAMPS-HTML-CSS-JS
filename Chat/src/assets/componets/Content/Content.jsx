import { StyledContentContainer } from "./Content.style";
import { Routes, Route } from "react-router-dom";
import { ProfileContent } from "./ProfileContent";
export const Content = () => {
  return (
    <StyledContentContainer>
      <Routes>
        <Route path="/chat/:id" element={<ProfileContent />} />
        <Route path="/group/:groupId" element={<ProfileContent />} />
        <Route path="*" element={<div>Selecciona un chat o un grupo</div>} />
      </Routes>
    </StyledContentContainer>
  );
};
