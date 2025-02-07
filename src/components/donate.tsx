import { ArrowRight } from "lucide-react";
import schoolKids from "@/assets/schoolkids.jpg";
const Donate = () => {
  return (
    <div className="relative min-h-[80vh] bg-black my-36">
      <div className="absolute inset-0">
        <img
          src={schoolKids}
          alt="Happy child"
          className="w-full h-full object-cover opacity-90 object-left-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>
      </div>
      <div className="relative z-10 container px-4 flex flex-col justify-center items-center  text-center mx-auto w-full h-screen">
        <div className="">
          <p className="text-charity-orange font-bold font-cursive mb-4 text-md md:text-2xl  subtitle  ">
            Compassion in Action. Text Us Today
          </p>
          <h1 className="text-white text-3xl md:text-6xl font-bold mb-6 leading-tight">
            Children Need Your Help
            <br />
            By Donating Today
          </h1>{" "}
          {/* <button className="bg-charity-orange hover:bg-charity-orange/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-start hover:scale-105 ">
            Become Volunteer
            <ArrowRight className="w-5 h-5 -rotate-45" />
          </button> */}
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-zinc-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-charity-orange py-4 px-8 ring-1 ring-white/10 ">
              <span> Become Volunteer</span>
              <ArrowRight />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Donate;
