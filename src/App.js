import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/projects';
import Pont from './components/pont'
import Skills from './components/skills'
import Education from './components/education'
import WorkExperience from './components/workExperience'
import Home from './components/home';
import Timeline from './components/timeline';
import CardApp from './components/cardApp';
import ContactPage from './components/contact';
import TwitterTimeline from './components/twitterTimeline';
import Kasym from './kasym';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/* 
      
      <Introduction />
      */}
      {/* <Projects /> */}
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            {/* <CardApp /> */}
            {/* <Kasym /> */}
            <Introduction />
            <About /> 
            <WorkExperience />
            <Education />
            <Projects />
            <TwitterTimeline />
            <ContactPage />
            {/* <Skills /> */}
            {/* <Timeline /> */}
            {/* 
            */}
            {/* <Pont />  */}
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
