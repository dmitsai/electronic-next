import { ReactNode } from "react";


interface InfoCardProps {
    placeholder: string;
    children: ReactNode;
    icon: any
}

export const InfoCard: React.FC<InfoCardProps> = ({ placeholder, children, icon }) => {
    return (
        <div className="flex flex-col relative justify-center items-center ">
            <div className="flex absolute z-30 w-28 h-28 rounded-full items-center justify-center -top-14 right-1/2 transform translate-x-1/2">
                {icon}
            </div>
            <div className="flex flex-col rounded-xl bg-white pt-24 pb-14 px-12 gap-y-5 text-black relative justify-center items-center h-96 ">
                <p className="text-lg font-bold">{placeholder}</p>
                <div className="flex flex-col text-black items-center w-full text-justify">
                    {children}
                </div>
            </div>
        </div>
    );
};
