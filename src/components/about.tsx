import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// UI ACETERNITY
const AboutCard = ({
  image,
  text,
  title,
  subtitle,
  className,
}: {
  image: string;
  text: string;
  title: string;
  subtitle: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      // className={cn(
      //   "bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300",
      //   className
      // )}
      className={cn(
        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
        "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
        // Preload hover image by setting it in a pseudo-element
        `before:bg-[url(https://images.unsplash.com/photo-1497375638960-ca368c7231e4?auto=format&fit=crop&q=80)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
        `hover:bg-[url(https://images.unsplash.com/photo-1497375638960-ca368c7231e4?auto=format&fit=crop&q=80)]`,
        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
        "transition-all duration-500"
      )}
    >
      <div className=" text relative z-50">
        {/* <img src={image} alt="Care process" className="w-full h-full object-cover" /> */}
        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">{title}</h1>
        <h1 className="font-semibold text-xl md:text-xl text-gray-50 relative">{subtitle}</h1>
        <p className="font-normal text-base text-gray-50 relative my-4">{text}</p>
        {/* <p className="text-gray-800 text-lg leading-relaxed"></p> */}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Yellow Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-yellow-400 -skew-y-3 transform origin-left scale-110" />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-8"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center max-w-6xl mx-auto mb-16 leading-relaxed"
        >
          {/* HUHT is a non-profit organization with a firm commitment to ensure that each orphan is
          comfortable, cared for and loved. We believe that each child should be well fed and have a
          fair chance at basic education.

          <br /> */}
          HUHT stands for Help Us Help Them and our mission is to provide orphanages the necessary
          tools needed to ensure that each child has the basic necessities for a normal childhood.
          Over the years we have worked and partnered with a few orphanages in Cameroon and Togo,
          West Africa. Through these partnerships we have created some measurable goals to ensure
          that funds and gifts that we receive all go to better the lives of orphans. Our goal is to
          feed, clothe and educate orphans around the world one orphan at a time. We stand as the
          bridge between orphans and you the generous community who is Helping Us Help Them.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <AboutCard
            image="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?auto=format&fit=crop&q=80"
            text="We are committed in giving our orphans a quality education by giving them the materials that they need to succeed."
            title="Huht Making a Difference School Supplies"
            subtitle="School Supplies"
          />
          <AboutCard
            image="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?auto=format&fit=crop&q=80"
            text="We work to ensure each child is fully supported as they adapt to their new home environment."
            title="Huht Making a Difference School Supplies"
            subtitle="School Supplies"
          />
          <AboutCard
            image="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?auto=format&fit=crop&q=80"
            text="Raising a child is a long-term commitment. Your donations contribute to each child's education, and their physical and emotional wellbeing."
            title="Huht Making a Difference School Supplies"
            subtitle="School Supplies"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
