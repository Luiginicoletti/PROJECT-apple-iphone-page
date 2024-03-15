import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <main className="bg-black min-h-screen w-full">
      <Navbar />
      <Hero />
      <Highlights />

      {/* <Router> */}
      {/*   <Routes> */}
      {/*     <Route path="/gsapto" element={<GsapTo />} /> */}
      {/*     <Route path="/gsapfrom" element={<GsapFrom />} /> */}
      {/*     <Route path="/gsapfromto" element={<GsapFromTo />} /> */}
      {/*     <Route path="/gsaptimeline" element={<GsapTimeline />} /> */}
      {/*     <Route path="/gsapstagger" element={<GsapStagger />} /> */}
      {/*     <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} /> */}
      {/*     <Route path="/gsaptext" element={<GsapText />} /> */}
      {/*     <Route path="/" element={<Home />} /> */}
      {/*   </Routes> */}
      {/* </Router> */}
    </main>
  );
};

export default App;
