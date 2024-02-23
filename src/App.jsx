import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import "./App.css";

const slides = [
  {
    name: "Ali Bravo",
    quote:
      '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused"',
    imageUrl: "/avatar-ali.png",
  },
  {
    name: "Anisha Li",
    quote:
      '"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
    imageUrl: "/public/avatar-anisha.png",
  },
  {
    name: "Richard Watts",
    quote:
      '"Manage allows us to provide structure and process. It keeps us organized  and focused. I can’t stop recommending them to everyone I talk to!"',
    imageUrl: "/avatar-richard.png",
  },

  {
    name: "Shanai Gough",
    quote:
      '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."',
    imageUrl: "/avatar-shanai.png",
  },
];

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <section className="w-[80%] mx-auto mt-14 text-center mb-16">
        <h3 className="text-darkBlue text-3xl  font-bold mb-12">
          What they've said
        </h3>
        <Testimonials slides={slides} autoSlide={true} />
      </section>
      <Info />
      <Footer />
    </>
  );
}

export default App;
