import { motion } from "framer-motion";
import kidsImg from "@/assets/aboutBg.jpg";
import kids1Img from "@/assets/changeLife.jpg";
import kids2Img from "@/assets/classroom1.jpg";
// UI ACETERNITY
const AboutCard = ({
  text,
  title,
  subtitle,
  className,
  image,
}: {
  image: string;
  text: string;
  title: string;
  subtitle: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      // className={cn(
      //   "bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300",
      //   className
      // )}
      className={`custom-card ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50"></div>
      <div className="relative z-50 md:h-3/6 cursor-text mb-5">
        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">{title}</h1>
        <h2 className="font-semibold text-xl md:text-xl text-gray-50 relative">{subtitle}</h2>
        <p className="font-normal text-base text-gray-50 relative my-4 leading-relaxed">{text}</p>
        {/* <p className="text-gray-800 text-lg leading-relaxed"></p> */}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="story">
      {/* Yellow Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-charity-orange -skew-y-12 md:-skew-y-3 transform origin-left scale-110" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-charity-orange  transform origin-left scale-110" />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-5xl font-bold text-center mb-8 text-charity-orange uppercase"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="text-md  md:text-xl text-center max-w-6xl mx-auto mb-16 leading-relaxed text-charity-green"
        >
          HUHT stands for Help Us Help Them and our mission is to provide orphanages the necessary
          tools needed to ensure that each child has the basic necessities for a normal childhood.
          Over the years we have worked and partnered with a few orphanages in Cameroon and Togo,
          West Africa. Through these partnerships we have created some measurable goals to ensure
          that funds and gifts that we receive all go to better the lives of orphans. Our goal is to
          feed, clothe and educate orphans around the world one orphan at a time. We stand as the
          bridge between orphans and you the generous community who is Helping Us Help Them.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <AboutCard
            image={kids1Img}
            text="We are committed in giving our orphans a quality education by giving them the materials that they need to succeed."
            title="Huht Making a Difference School Supplies"
            subtitle="School Supplies"
          />
          <AboutCard
            image={kids2Img}
            text="One meal at a time. That is where we start. Have you ever gone hungry for a day? If you have you will know that it is all consuming, you can`t concentrate on anything. Finding food is all you think about. "
            title="Contact Huht"
            subtitle="Cloth/feed an orphan"
          />
          <AboutCard
            image={kidsImg}
            text="We are committed in giving our newborn babies a decent arrival by providing basic yet vital supplies for a maternity room"
            title="Huht Partners"
            subtitle="Equip a maternity"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
