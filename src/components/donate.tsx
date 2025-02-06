import { ArrowRight } from "lucide-react";
const Donate = () => {
  return (
    <div className="relative min-h-[80vh] bg-black my-36">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1632932724779-8af3bdae9d1d"
          alt="Happy child"
          className="w-full h-full object-cover opacity-80 object-left-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10"></div>
      </div>
      <div className="relative z-10 container px-4 flex flex-col justify-center items-center  text-center mx-auto w-full h-screen">
        <div className="">
          <p className="text-charity-orange font-semibold font-cursive mb-4 text-lg md:text-xl italic ">
            Compassion in Action. Text Us Today
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Children Need Your Help
            <br />
            By Donating Today
          </h1>{" "}
          <button className="bg-charity-orange hover:bg-charity-orange/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-start hover:scale-105 ">
            Become Volunteer
            <ArrowRight className="w-5 h-5 -rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Donate;
