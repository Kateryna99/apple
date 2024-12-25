import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import Model from "./sections/Model";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
    </main>
  );
};

export default App;
