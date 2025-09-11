import {Sidebar} from './assets/componets/Sidebar/Sidebar';
import { GlobalStyles } from './style';
export const App = function () {
  return (
    <>
      <GlobalStyles />
      <div style={{ display: 'flex', height: '100vh', background: '#1f242c' }}>
        <Sidebar header="Chats" />
        <div style={{ flex: 1, padding: 24, color: '#fff' }}>Área principal</div>
      </div>
    </>
  );
};
export default App;