// components/Navbar.tsx

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/Elements" // Adjust this import path if needed

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      style={{ backgroundColor: "#fff7fc" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* ✅ Logo now links to the homepage */}
        <Link href="/">
            {/* ✅ Image component replaces the text */}
            <Image
              src="/pv_logo.png" // IMPORTANT: Replace with your logo's path
              alt="Pretty Visions Logo"
              width={180} // Adjust width as needed
              height={50} // Adjust height as needed
              className="h-auto" // Keeps the aspect ratio
            />
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center space-x-8 md:flex">
          <a
            href="#services"
            className="font-dekko text-xl text-gray-700 transition-colors hover:text-[#ff66c4]"
          >
            Services
          </a>
          <a
            href="#about"
            className="font-dekko text-xl text-gray-700 transition-colors hover:text-[#ff66c4]"
          >
            About
          </a>
          <a
            href="#testimonials"
            className="font-dekko text-xl text-gray-700 transition-colors hover:text-[#ff66c4]"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="font-dekko text-xl text-gray-700 transition-colors hover:text-[#ff66c4]"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}