import avatar from "../images/avatar-testimonial.jpg";
const PersonCard=()=>{
    return(
        <div className="flex flex-row justify-start items-center gap-x-2  ">
            <img src={avatar} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] rounded-full "/>
            <div className="flex flex-col justify-start items-start gap-y-[2px] ">
                <p className="font-open font-bold not-italic text-[9px] leading-3 tracking-[0.45px] text-[#07043B] lg:text-[11px] lg:leading-[15px]">Kyle Burton</p>
                <p className="font-open not-italic font-normal text-[6px] leading-3 tracking-[0.3px] text-[#07043] lg:text-[8px] lg:leading-[15px]">Founder & CEO, Huddle</p>

            </div>


        </div>
    );
};
export  default  PersonCard;
