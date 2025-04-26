import { motion } from "framer-motion";
import FishIcon from "../assets/fish.svg";
import Planet1 from "../assets/mars.svg";
import LeaderBoard from "../components/LeaderBoard";
import Market from "../components/Market";

export default function GalacticFish() {
  return (
    <>
      <div className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <motion.img
          src={Planet1}
          alt="Planet"
          className="w-80 h-80 md:w-85 md:h-85"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center pt-8 px-4
        bg-[url('/bg-desktop.webp')]
        sm:bg-[url('/bg-mobile.webp')]
        md:bg-[url('/bg-tablet.webp')]
        xl:bg-[url('/bg-4k.webp')]"
      >
        <div className="relative flex flex-col items-center z-10">
          <motion.img
            src={FishIcon}
            className="w-35 h-35 z-10"
            animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.img>
          <h1 className="text-white text-5xl font-bold drop-shadow-xl leading-tight text-center mb-8">
            GALACTIC FISH
          </h1>
        </div>
        <div className="container flex flex-col md:flex-row gap-8 md:gap-8 items-start justify-center z-20 mx-auto px-4 md:px-8 mt-2 md:mt-6">
          <LeaderBoard />
          <Market />
        </div>
      </div>
    </>
  );
}
