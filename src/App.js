import "./App.css";
import Carousel from "./components/BootstrapCarousel";
// import "./assets/css/fonts.css";

function App() {
  return (
    <div className="App">
      {/* <div class="container"> */}
      <div class="header">
        <h1 class="name">Dan Robinson</h1>
      </div>
      <Carousel class="col" />
      {/* <div class="row project-row">
          <div class="col project-data">
            <h2 class="row project-title">Rich Ape Bot Club</h2>
            <h3 class="row project-desc">
              Built in Node with Puppeteer. Logs in to Metamask Chrome
              extension. Creates offers on NFT's based on user's collection and
              property filtering inputs
            </h3>
          </div>
          <div class="col">
            {" "}
            <ReactPlayer url="https://player.vimeo.com/video/714552222?h=088a4180af" />
          </div>
        </div>
        <div class="project-spacer" /> */}
    </div>
    // </div>
  );
}

export default App;
