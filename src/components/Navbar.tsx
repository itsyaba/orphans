import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/assets/orphanLogo.jpg";
import { Mail, Menu, Phone } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "HOME" },
    { href: "#story", label: "OUR STORY" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#programs", label: "PROGRAMS" },
    { href: "#difference", label: "MAKE A DIFFERENCE" },
    { href: "#partners", label: "PARTNERS" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Contact Info Bar */}
      <div className="bg-white/95 ">
        <div className="container mx-auto py-2 px-4">
          <div className="flex items-center gap-4 text-sm flex-wrap">
            <a
              href="tel:+4044833297"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              404.483.3297
            </a>
            <a
              href="mailto:huhtorphans21@gmail.com"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Huhtorphans21@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-2xl border-b ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="w-32 h-16 rounded-md" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-md font-medium hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                DONATE NOW
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center ">
              <Sheet open={isOpen} onOpenChange={setIsOpen} bg-white>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-300 hover:text-black"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-300">
                  <nav className="flex flex-col gap-4">
                    <ul className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="text-lg font-medium hover:text-orange-500 transition-colors block py-2"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a href="#donate">
                      <Button className="bg-charity-orange hover:bg-orange-600 text-white w-full mt-4">
                        DONATE NOW
                      </Button>
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
