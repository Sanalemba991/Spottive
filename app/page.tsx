import Image from "next/image";
import Banner from "./components/Banner";
import NatureText from "./components/NatureText";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonal";
import Partners from "./components/Partner";
export default function Home() {
  return (
   <>
   <Banner />
   <NatureText/>
   <Partners />
   <WhyChooseUs />
   <Testimonial />
   </>
  );
}
