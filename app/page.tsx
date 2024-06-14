import Image from "next/image";
import Index from "./ui/landing-page";
import Navbar from "./ui/landing-page/navbar";
import IndexMobile from "./ui/landing-page/index-mobile";
import NavbarMobile from "./ui/landing-page/navbar-mobile";

export default function Home() {
  return (
    <main className="h-full">
      <div className="h-screen">
        <div className="sm:hidden">
          <Navbar />
        </div>
        <div className="hidden sm:block">
          <NavbarMobile />
        </div>
        <div className="h-full sm:hidden">
          <Index />
        </div>
        <div className="h-full hidden sm:block">
          <IndexMobile />
        </div>
      </div>
    </main>
  );
}
