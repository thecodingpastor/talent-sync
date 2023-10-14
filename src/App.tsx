import Footer from "./components/general/Footer";
import Banner from "./components/home/Banner";
import SocialProof from "./components/home/SocialProof";
import Testimonial from "./components/home/Testimonial";
import VideoCall from "./components/home/VideoCall";
import WhyChoose from "./components/home/WhyChoose/WhyChoose";

function App() {
  return (
    <main>
      <Banner />
      <SocialProof />
      <WhyChoose />
      <Testimonial />
      <VideoCall />
      <Footer />
    </main>
  );
}

export default App;
