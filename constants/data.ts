import { SolutionCardProps } from "@/interfaces";
import { cloudIcon, securityIcon } from "@/constants";

const solutionData: SolutionCardProps[] = [
  {
    title: "Real Time Activity",
    description:
      "Real-time tracking, updates, and seamless coordination for efficient business management.",
    img: cloudIcon,
    
  },
  {
    title: "Report & Analytics",
    description: "Unlock growth with our Report & Analytics services, providing insights to drive decisions",
    img: securityIcon,
    
  },
  {
    title: "Fulling Secured",
    description: "Fulling Secured offers software security solutions, ensuring protection, assessments, and monitoring.",
    img: securityIcon,
   
  },
  {
    title: "Cloud Storage",
    description: "Secure, scalable cloud storage with easy data access, backup, and recovery for all businesses.",
    img: cloudIcon,
  },
  {
    title: "Perfect UI/UX",
    description: "Crafting seamless and intuitive UI/UX designs to elevate user experiences and drive engagement.",
    img: cloudIcon,
  },
];

export {
    solutionData,
}