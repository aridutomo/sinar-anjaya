import Image from "next/image";
import Index from "./ui/landing-page";
import Navbar from "./ui/landing-page/navbar";

export default function Home() {
  return (
    <main className="h-full">
      <div className="h-screen">
        <Navbar />
        <Index />
      </div>
    </main>
  );
}
