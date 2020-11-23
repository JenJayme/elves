import logo from './logo.svg';
import eocLogo from './eoc-logo-vertical-snowflake.png';
import './App.css';
import Video from './components/video/video';
import MyNavbar from './components/navbar/mynavbar';

function App() {
  return (
    <div className="App">
        <MyNavbar />
      <header className="App-header">
        <Video />
        <img src={eocLogo} className="logo" alt="Cole and Co, Elves On Call" />
      </header>
    </div>
  );
}

export default App;
