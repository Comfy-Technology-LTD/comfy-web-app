
import HeroSection from '@/src/components/Hero';
import Footer from "@/src/components/Layout/Footer";
import Partners from "@/src/components/Partners";
import BusinessArticle from "@/src/components/BusinessArticle";
import TreatyArticle from "@/src/components/TreatyArticle";
import Metrics from "@/src/components/Metrics";
import { MetricItem } from "@/src/interfaces";
import { FaUsers, FaProjectDiagram, FaTrophy, FaChartLine } from 'react-icons/fa';
import Services from '@/src/components/Services';
import { Market1 } from '@/src/constants/icons';
import Team from '@/src/components/Team';
import { groupOfpeople ,Financialprofit,Timeimage, agile,advisory,consultant, continuous } from '@/src/constants';
import ProductVideo from '@/src/components/ProductVideo';




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
  const metricData: MetricItem[] = [
    { title: "Reinsurance", value: "3,653", description: "Reinsurance offers processed.", icon: <FaProjectDiagram /> },
    { title: "Reinsurers", value: "20", description: "Reinsurers onboarded", icon: <img src={groupOfpeople} alt='group of people' className='w-16 text-blue-500'/>},
    { title: "Facultative", value: "$30m", description: "Facultative premiums distibuted.", icon:<img src={Financialprofit} alt="Financial Profit Icon" className='w-16'/>},
    { title: "Cedants", value: "15", description: "Cedants onboarded to the platform", icon: <FaTrophy /> },
    { title: "Income", value: "12%", description: "Income growth rate for users.", icon: Market1 },
    { title: "Income", value: "12%", description: "Income growth rate for users.", icon: Market1 },
  ];
  return (
    <div
    className=" h-full bg-white"
      // className={`${geistSans.variable} ${geistMono.variable}  font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="bg-white text-black">
       {/* <Header/> */}
       <HeroSection/>
       {/* <div className="flex flex-col gap-6 h-screen">
       <BusinessArticle/>
       <TreatyArticle/>
       </div> */}
       <BusinessArticle/>
       <TreatyArticle/>
       <Metrics metrics={metricData}/>
       <ProductVideo videoUrl='https://www.youtube.com/watch?v=WAl7Z2KHUzY' thumbnailUrl={''} altText={'A preview of the video'}/>
       <Team/>
       <Services/>
       <Partners/>
       <Footer/>
      </main>
     
    </div>
  );
}
