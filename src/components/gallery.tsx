import { ParallaxScrollSecond } from "./ui/parallax-scroll";
import { motion } from "framer-motion";

import img1 from "@/assets/gallery/IMG-20250207-WA0003.jpg";
import img2 from "@/assets/gallery/IMG-20250208-WA0000.jpg";
import img3 from "@/assets/gallery/IMG-20250208-WA0001.jpg";
import img4 from "@/assets/gallery/IMG-20250208-WA0004.jpg";
import img5 from "@/assets/gallery/IMG-20250208-WA0005.jpg";
import img6 from "@/assets/gallery/IMG-20250208-WA0006.jpg";
import img7 from "@/assets/gallery/IMG-20250208-WA0007.jpg";
import img8 from "@/assets/gallery/IMG-20250208-WA0008.jpg";
import img9 from "@/assets/gallery/IMG-20250208-WA0009.jpg";
import img10 from "@/assets/gallery/IMG-20250208-WA0010.jpg";
import img11 from "@/assets/gallery/IMG-20250208-WA0012.jpg";
import img12 from "@/assets/gallery/IMG-20250208-WA0013.jpg";
import img13 from "@/assets/gallery/IMG-20250208-WA0014.jpg";
import img14 from "@/assets/gallery/IMG-20250208-WA0015.jpg";
import img15 from "@/assets/gallery/IMG-20250208-WA0016.jpg";
import img16 from "@/assets/gallery/IMG-20250208-WA0017.jpg";
import img17 from "@/assets/gallery/IMG-20250208-WA0018.jpg";
import img18 from "@/assets/gallery/IMG-20250208-WA0019.jpg";
import img19 from "@/assets/gallery/IMG-20250208-WA0020.jpg";
import img20 from "@/assets/gallery/IMG-20250208-WA0021.jpg";
import img21 from "@/assets/gallery/IMG-20250208-WA0022.jpg";
import img22 from "@/assets/gallery/IMG-20250208-WA0024.jpg";
import img23 from "@/assets/gallery/IMG-20250208-WA0025.jpg";
import { ParallaxScroll } from "./ui/parallax-scrollOne";

const Gallery = () => {
  return (
    <section className=" bg-gradient-to-b from-gray-600 to-white pt-6" id="gallery">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-5xl font-bold text-center py-8 text-charity-orange"
      >
        Gallery
      </motion.h2>

      <div className="hidden lg:block">
        <ParallaxScrollSecond images={images} />;
      </div>
      <div className="lg:hidden">
        <ParallaxScroll images={images} />
      </div>
    </section>
  );
};

export default Gallery;

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
];
