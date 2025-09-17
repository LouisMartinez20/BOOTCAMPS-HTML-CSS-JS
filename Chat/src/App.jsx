// App.tsx
import { Sidebar } from "./assets/componets/Sidebar/Sidebar";
import { Nav } from "./assets/componets/Nav/Nav";
import { GlobalStyles } from "./style";
import { Chat } from "./assets/componets/Chat/Chat";
import { Content } from "./assets/componets/Content/Content";
import { 
  AppLayout, 
  MainColumn, 
  Workspace, 
  Panel 
} from "./style";
export const App = function () {
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <Sidebar />
        <MainColumn>
          <Nav />
          <Workspace>
            <Panel>
              <Content />
            </Panel>
            <Chat />
          </Workspace>
        </MainColumn>
      </AppLayout>
    </>
  );
};
export default App;
