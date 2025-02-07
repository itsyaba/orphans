import { motion } from "framer-motion";
import { HandshakeIcon, Users2Icon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import PartnerOne from "@/assets/TGLlarge-2.png";
import PartnerTwo from "@/assets/partnerTwo.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-white" id="partners">
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-charity-green">
            <HandshakeIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Our Partners</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-charity-orange sm:text-5xl md:text-6xl">
            Together We Make a Difference
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            HUHT can't do it alone. With the help of our amazing partners, our mission will be
            obtained and our vision will be realized.
          </p>
        </motion.div>
      </section>

      {/* Partners Grid */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 pb-20"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {/* Gentlemen League Card */}
          <motion.div variants={item}>
            <Card className="group overflow-hidden bg-charity-orange/40 border-none shadow-2xl">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-6 sm:flex-row">
                  <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-lg">
                    <motion.img
                      src={PartnerOne}
                      alt="The Gentlemen's League"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-900">The Gentlemen's League</h3>
                    <p className="mt-2 text-gray-600">
                      Dedicated to educating, empowering, and enriching the community through
                      mentorship and leadership development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Whitewater Middle School Card */}
          <motion.div variants={item}>
            <Card className="group overflow-hidden bg-charity-orange/40 border-none">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-6 sm:flex-row">
                  <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-lg">
                    <motion.img
                      src={PartnerTwo}
                      alt="Whitewater Middle School"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Whitewater Middle School
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Fostering excellence in education and empowering students to achieve their
                      full potential every day.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Partnership CTA */}
        <motion.div
          variants={item}
          className="mt-16 rounded-2xl bg-gradient-to-r from-charity-orange to-charity-orange/60 p-8 text-center text-white"
        >
          <div className="mx-auto max-w-2xl">
            <Users2Icon className="mx-auto h-12 w-12" />
            <h2 className="mt-4 text-3xl font-bold">Become a Partner</h2>
            <p className="mt-4 text-lg text-blue-100">
              Join us in our mission to make a positive impact in our community. Together, we can
              achieve more.
            </p>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 rounded-full bg-white px-8 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
              >
                Get in Touch
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
