import Image from "next/image";
import { SolutionCardProps } from "../interfaces";


const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, img, }) => {
  return (
      <div className="text-black z-50 relative bg-white w-[416px] h-[362px] rounded-[50px] p-[40px] flex flex-col justify-center border border-[#cbcbcb] shadow-lg shadow-[#eaeaea]">
        {/* <div className="w-[416px] absolute -z-50  left-3 -bottom-3 h-[362px] rounded-[50px] p-[40px] bg-red-500 sbg-[#eaeaea]"></div> */}
        <div className={`rounded-full w-[120px] h-[120px] bg-red-400 mb-8 flex items-center justify-center`}>
            <Image src={img} alt={title} height={72} width={72} />
        </div>
        <h4 className="text-2xl font-[900]">{title}</h4>
        <p className="text-lg mt-2">
          {description}
        </p>
        
      </div>
  );
};

export default SolutionCard;
