import curveM from "../images/bg-curve-mobile.svg";
import illustration from "../images/illustration-2.svg";
import curveD from "../images/bg-curve-desktop.svg";
import arrow from "../images/icon-arrow.svg";
import Witness from "./Witness";
import React from "react";

const Presentation = () => {
    return (<div className="w-full   mt-[90px]  lg:mt-[164px]   ">
            <img src={curveM} alt="curve" className=" w-full  h-[93px] lg:hidden"/>
            <img src={curveD} alt="curve" className="w-full h-[178px] hidden lg:flex"/>
            <div className="bg-[#F8F8FE] w-full flex flex-col justify-center items-center lg:justify-start lg:items-start lg:pl-[80px] lg:relative pb-[107px]">
                <img src={illustration} alt="" className="w-[320px] h-[241px]  lg:absolute lg:right-[80px] lg:top-[24px] lg:w-[542px] lg:h-[409px] "/>
                <div className=" pl-[20px] pr-[35px]  flex flex-col justify-center items-center lg:justify-start lg:items-start  lg:pl-0">
                    <h2 className="mt-[87px] lg:mt-0 font-raleway font-bold text-base leading-6 text-center text-[#07043B] lg:text-left lg:text-[40px] lg:leading-[47px]">Stay
                        productive, wherever you are</h2>
                    <p className="mt-6 lg:mt-[38px] presentation-content lg:w-[529px]">Never let location be an issue when accessing your files.
                        Fylo
                        has you covered for all of your file storage needs.</p>
                    <p className="mt-4 presentation-content lg:w-[529px]">Securely share files and folders with friends, family and
                        colleagues for live collaboration. No email attachments required!</p>
                </div>
                <a href="#" className="mt-9 flex flex-row justify-center items-center gap-x-[8px] border-b border-[#3DA08F] hover:border-[#71DFCC] pb-[6px]  lg:self-start">
                    <p className="font-open font-normal text-xs leading-4 text-[#3DA08F] hover:text-[#71DFCC] lg:text-base lg:leading-[22px]">See how Fylo works</p>
                    <img src={arrow} alt="" className="w-[12px] h-[12px] "/>

                </a>
                <Witness />



            </div>

        </div>

    );

};
export default Presentation;
