
import HeroSection from '../components/Hero';
import Footer from "../components/Layout/Footer";
import Partners from "../components/Partners";
import BusinessArticle from "../components/BusinessArticle";
import TreatyArticle from "../components/TreatyArticle";
import Metrics from "../components/Metrics";
import { MetricItem } from "../interfaces";
import {FaProjectDiagram, FaTrophy, FaChartLine, FaChartArea } from 'react-icons/fa';
import Services from '../components/Services';
import Team from '../components/Team';
import ProductVideo from '../components/ProductVideo';



export default function Home() {
  const metricData: MetricItem[] = [
    { title: "Reinsurance", value: "3,653", description: "Reinsurance offers processed.", icon: <FaProjectDiagram /> },
    // { title: "Reinsurers", value: "20", description: "Reinsurers onboarded", icon: <Image src={groupOfpeople} alt="Description" width={16} height={500} />},
    { title: "Facultative", value: "$30m", description: "Facultative premiums distibuted.", icon: <FaChartLine/>},
    { title: "Cedants", value: "15", description: "Cedants onboarded to the platform", icon: <FaTrophy /> },
    { title: "Income", value: "12%", description: "Income growth rate for users.", icon: <FaChartArea/> },
    // { title: "Income", value: "12%", description: "Income growth rate for users.", icon: Market1 },
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
       <ProductVideo/>
       <Team/>
       <Services/>
       <Partners/>
       <Footer/>
      </main>
     
    </div>
  );
}
