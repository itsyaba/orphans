import { Button } from "@/components/ui/button";
import HeroBg from "@/assets/kids2.jpg";
const Hero = () => {
  return (
    <div className="relative h-screen  bg-black/90 flex items-center justify-center" id="#home">
      <div className="absolute inset-0 z-0">
        <img
          src={HeroBg}
          alt="Hero background"
          className="w-full h-full object-cover object-center brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 ">
        <div className=" text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Help us Help Them.</h1>
          <p className="text-md md:text-xl mb-8 font-light max-w-4xl">
            {/* Change Yours. This Will Change Everything. */}
            We are a non-profit organization with a firm commitment to ensure that each orphan is
            comfortable, cared for and loved. We believe that each child should be well fed and have
            a fair chance at basic education.
          </p>
          <a href="#donate">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
              size="lg"
            >
              DONATE NOW
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
