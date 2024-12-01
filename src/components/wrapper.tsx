import React from "react";

export  const Wrapper = ({ children }:{children: React.ReactNode}) => {
    return (
        <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            {children}
        </div>
    );
};

