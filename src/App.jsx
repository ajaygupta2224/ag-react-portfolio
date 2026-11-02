import Navbar from "./components/navbar";
import Profile from "./components/profile";
import About from "./components/about";
import Technologies from "./components/technologies";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-900 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <Navbar />
        <Profile />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App;
