
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
import Image from 'next/image';




export default function Home() {
  const metricData: MetricItem[] = [
    { title: "Reinsurance", value: "3,653", description: "Reinsurance offers processed.", icon: <FaProjectDiagram /> },
    { title: "Reinsurers", value: "20", description: "Reinsurers onboarded", icon: <Image src={groupOfpeople} alt="Description" width={16} height={500} />},
    { title: "Facultative", value: "$30m", description: "Facultative premiums distibuted.", icon: <Image src={Financialprofit} alt="Description" width={16} height={500} />},
    { title: "Cedants", value: "15", description: "Cedants onboarded to the platform", icon: <FaTrophy /> },
    { title: "Income", value: "12%", description: "Income growth rate for users.", icon: Market1 },
    { title: "Income", value: "12%", description: "Income growth rate for users.", icon: Market1 },
  ];
  return (
    <div
    className=" h-full bg-white"
      // className={`${geistSans.variable} ${geistMono.variable}  font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="bg-white text-black ">
       <HeroSection/>
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
