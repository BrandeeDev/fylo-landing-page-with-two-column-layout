const Access = () => {
    return (<div className="flex flex-col justify-center items-center bg-[#575988] pt-[54px] pb-[71px] w-full lg:flex-row lg:justify-start lg:items-center lg:gap-x-[127px]  lg:pl-[80px] lg:pr-[120px]  lg:pt-[100px] lg:pb-[85px] lg:mt-0">
        <div className="flex flex-col justify-center items-center w-[533px]   lg:justify-start lg:items-start   ">
            <h3 className="font-raleway font-bold text-lg leading-6 not-italic text-white lg:text-[32px] lg:leading-[48px]  ">Get early access today</h3>
            <p className="mt-4 w-[280px] lg:w-full font-open font-normal not-italic text-sm leading-[21px]  tracking-[0.5px] text-center text-white lg:text-left  lg:text-base lg:leading-6">It only takes a minute to sign up and our free starter tier is extremely generous. If
                you have any questions, our support team would be happy to help you.</p>

        </div>
         <div className="mt-6 group w-[240px] lg:w-[480px] ">
            <input id="email" name="email" placeholder="email@example.com" className="w-full  h-[32px] lg:h-[48px] rounded-[1.47059px]  placeholder:pl-[8px] lg:placeholder:pl-[22px] placeholder:access-email-placeholder"/>
            <label id="email"/>
            <button  className="w-full  lg:w-[200px]  h-[32px] lg:h-[48px] mt-[8px] lg:mt-4 bg-[#2F65F8] rounded-[1.47059px] flex justify-center items-center font-raleway not-italic font-bold text-[10px] leading-3 text-white  lg:text-sm lg:leading-4">Get Started For Free</button>


        </div>

    </div>);
};
export default Access;
