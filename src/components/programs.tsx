import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Programs = () => {
  return (
    <section className="bg-charity-orange/20 py-32 min-h-screen " id="programs">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-5xl font-bold text-center mb-8 text-charity-orange"
      >
        PROGRAMS
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="text-md text-center  max-w-6xl mx-auto mb-16 leading-relaxed text-charity-green px-2 md:px-6"
      >
        Your donation makes a difference and it's an impact to our children. Contributions can be
        made several different ways in different amounts.
        <ul className=" text-left my-10 gap-4 flex  items-start justify-between flex-col list-disc">
          <li>
            A donation of $10.00 will feed an orphan. Your donation of $10.00 per month will feed an
            orphan for a month .
          </li>
          <li>
            A donation of $35.00, you are changing and giving lives, this donation will feed 4
            orphans in a month .
          </li>
          <li>
            A donation of $100.00, you are taking a bold step in feed and clothing an orphan. This
            amount will feed 8 orphans and provide a hygiene kit .
          </li>
          <li>
            A donation of $250.00, you not only feeding 20 orphans but you are also making a change
            in their by providing them with hygiene kits, school supplies and tuition.{" "}
          </li>
        </ul>
        <span className="block mt-8 font-semibold subtitle">Make a choice by changing a life.</span>
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto w-full gap-16 ">
        <ProgramCard
          image="https://images.unsplash.com/photo-1500823050524-096fd13fa287?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Feed an orphan"
        />
        <ProgramCard
          image="https://images.unsplash.com/photo-1610500795224-fb86b02926d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Change Life"
        />
        <ProgramCard
          image="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Maximize your impact"
        />
      </div>
    </section>
  );
};

export default Programs;

export function ProgramCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 "
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-zinc-800 group-hover/card:bg-gray-900 opacity-60 "></div>
        <div className=""></div>
        <div className="">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 text-center">
            {title}
          </h1>
          {/* <p className="font-normal text-sm text-gray-50 relative z-10 my-4">{description}</p> */}
        </div>
      </div>
    </div>
  );
}
