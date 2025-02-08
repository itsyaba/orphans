import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import Book from "@/assets/book.jpg";
import BoldKid from "@/assets/feed.jpg";
import classroom from "@/assets/classRoomNew.jpg";
import BunchOfKids from "@/assets/maternity.jpg";
const content = [
  {
    title: "Modern African Cookbook",
    description:
      "Every purchase of the Modern African Cookbook directly supports Help Us Help Them (HUHT)—an organization dedicated to improving the lives of orphans and ensuring that women have access to a clean and safe maternity ward. By indulging in rich, flavorful African recipes, you're not only exploring a vibrant culinary heritage but also contributing to a cause that provides shelter, education, and medical care for those in need. Get your copy today and make a difference, one meal at a time.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src={Book}
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Classroom Supplies",
    description:
      "Education is the foundation for a brighter future, and every child deserves the tools to succeed. At Help Us Help Them, we are committed to ensuring that orphans receive a quality education by providing them with essential classroom materials. With your support, we can supply books, stationery, and learning aids to help these children thrive academically.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={classroom}
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Feed & Clothe an Orphan ",
    description:
      "Imagine going an entire day without food. The hunger takes over your thoughts, making it impossible to focus on anything else. Unfortunately, this is the reality for many orphans. At Help Us Help Them, we start with one meal at a time, ensuring that no child under our care goes to bed hungry. Beyond food, we also provide clothing to keep them warm and comfortable. Your contribution, no matter how small, can fill an empty stomach and bring warmth to a child in need. Click below to see how you can help.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img
          src={BoldKid}
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Equip a Maternity Ward ",
    description:
      "Every baby deserves a safe and healthy arrival into the world. Sadly, many underprivileged women give birth in unhygienic and unsafe conditions, putting both mother and child at risk. Help Us Help Them is dedicated to equipping maternity wards with essential supplies like clean beds, medical kits, and birthing essentials. With your support, we can give newborns the healthy start they deserve. Click below to see how you can be part of this life-changing initiative.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img
          src={BunchOfKids}
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Project() {
  return (
    <section className="w-full max-h-screen" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-5xl font-bold text-center mb-8 text-charity-orange"
      >
        PROJECTS
      </motion.h2>
      <StickyScroll content={content} />
    </section>
  );
}
