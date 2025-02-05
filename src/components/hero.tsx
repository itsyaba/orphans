import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen  bg-black/90 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover object-left-top brightness-50 bg-fixed"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 ">
        <div className=" text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            {/* Join Us. */}
            {/* <br /> */}
            Help us Help Them.
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-4xl">
            {/* Change Yours. This Will Change Everything. */}
            We are a non-profit organization with a firm commitment to ensure that each orphan is
            comfortable, cared for and loved. We believe that each child should be well fed and have
            a fair chance at basic education.
          </p>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
            size="lg"
          >
            DONATE NOW
          </Button>
        </div>
      </div>

      {/* Statistics Banner */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-900">
            Each day, an estimated 734 children
            <br />
            become orphans
          </h2>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
