import logo from "../images/logo.svg";
const Header=()=>{
    return(<div className="pt-6 px-6 lg:pt-[65px] lg:px-[80px] flex flex-row w-full justify-between items-center font-raleway not-italic font-normal text-xs leading-[14px] text-[#07043B] lg:text-base lg:leading-[19px] ">
        <img src={logo} alt="" className="w-[80px] h-[24px] lg:w-[166px] lg:h-[49px]"/>
        <div className="flex flex-row justify-center items-center gap-x-6 lg:gap-x-[57px]">
            <p>Features</p>
            <p>Team</p>
            <p>Sign In</p>
        </div>

    </div>)
};
export  default  Header;
