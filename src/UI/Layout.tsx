import React, {PropsWithChildren} from "react";

const Layout =(props: PropsWithChildren)=>{
    return <main className="min-h-screen bg-white  overflow-hidden">
        {props.children}

    </main>;
};
export  default Layout;