import quotes from "../images/icon-quotes.svg";
import PersonCard from "./PersonCard";

const Witness = () => {

    return (
        <div
            className=" w-[280px] lg:w-[356px]  rounded-[3.93258px] mt-[40px] bg-white py-[19px] lg:py-[26px] pl-[26px] lg:pl-[33px] pr-[13px] flex-flex-col justify-start items-start gap-y-[12px] lg:gap-y-4 ">
            <img src={quotes} alt="" className=""/>
            <p className="font-open font-normal text-[10px] leading-[18px] tracking-[0.384615px] text-[#07043B] text-left lg:text-[13px] lg:leading-[23px]">Fylo
                has improved our team productivity by an order of magnitude. Since making the switch our team has become
                a well-oiled collaboration machine.</p>
            <PersonCard />

        </div>
    );
};
export default Witness;

