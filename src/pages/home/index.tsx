import Header from "@/components/Header/Header";
import * as motion from "framer-motion/client";
import MainBanner from "./components/MainBanner/MainBanner";
import MainStory from "./components/Story";

// If loading a variable font, you don't need to specify the font weight
// const allura = Allura({ weight: "400", subsets: ["latin"] });
// const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"] });

export default function Home() {
  return (
    <motion.div className=" min-h-screen h-full ">
      <Header />
      <MainBanner />
      <MainStory />
    </motion.div>
  );
}
