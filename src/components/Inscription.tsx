import illustration from "../images/illustration-1.svg";

const Inscription = () => {
    return (<div className=" px-6 lg:px-[80px] flex flex-col justify-center items-center w-full mt-[98px] lg:mt-[86px] lg:justify-start lg:items-start lg:relative lg:pb-[98px] ">
        <img src={illustration} alt="" className="w-[304px] h-[225px] lg:absolute lg:right-[80px] lg:w-[640px] lg:h-[474px]"/>
        <h1 className="mt-[40px] font-open font-bold text-2xl leading-9 text-center text-[#07043B] lg:w-[627px] lg:text-left lg:mt-[77px]">All your files in
            one secure location, accessible anywhere. </h1>
        <h4 className="font-open text-sm leading-[21px] font-normal text-center text-[#07043B] mt-6 w-[296px] lg:w-[585px]  lg:text-left">Fylo stores your most important files in one secure location. Access them wherever you need, share and
            collaborate with friends, family, and co-workers.</h4>
        <div className="group w-[304px] mt-8 lg:w-[536px] lg:h-[45px]">
            <input id="email" type="email" placeholder="Enter your email…" className="h-[40px] lg:h-full w-full lg:w-[320px] border-[0.625px] rounded-[3.125px] border-[#07043B] placeholder:pl-[24px] placeholder:email-placeholder "/>
            <label id="email"/>
            <button className="block lg:inline mt-4 lg:mt-0 bg-[#2F65F8] hover:bg-[#6C9BFF] w-full lg:w-[200px] lg:ml-4 h-[40px] lg:h-full  rounded-[3.125px] font-raleway font-bold text-sm leading-4 text-white ">Get Started</button>


        </div>

    </div>);
};
export default Inscription
