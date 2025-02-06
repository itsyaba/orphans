import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2421] text-white px-4 py-12 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="lg:grid-cols-3 w-full  flex items-start justify-center   gap-8 ">
          {/* Logo and Description */}
          <div className=" w-2/6 ">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold">Logo</span>
            </a>
            <p className="text-gray-300">
              We are a non-profit organization with a firm commitment to ensure that each orphan is
              comfortable, cared for and loved.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className=" w-2/6 ">
            <h3 className="text-lg font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-orange-300 transition-colors">
                  Modern African Cookbook
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-300 transition-colors">
                  Classroom Supplies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-300 transition-colors">
                  Feed & Clothe an Orphan
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-300 transition-colors">
                  Equip a Maternity Ward
                </a>
              </li>
            </ul>
          </div>

          {/* Useful as */}
          <div className=" w-2/6">
            <h3 className="text-lg font-semibold mb-4">Useful as</h3>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="hover:text-orange-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-orange-300 transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © Copyright 2025 |{" "}
            <a href="https://nileode.com/" className="text-[#ff5733] hover:text-[#e64d2e]">
              Nileode Technologies
            </a>{" "}
            | All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
