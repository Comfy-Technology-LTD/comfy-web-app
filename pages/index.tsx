import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import HeroSection from '@/components/Hero';
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div
    className=" h-screen bg-white"
      // className={`${geistSans.variable} ${geistMono.variable}  font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="">
       {/* <Header/> */}
       <HeroSection/>
       <Partners/>
       <Footer/>
      </main>
     
    </div>
  );
}
