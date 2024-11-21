import Image from "next/image"
import localFont from "next/font/local"
import Link from "next/link"
import { useState } from "react";
import SideBar from "./sideBar";


const socials = [
    {
        id: 1,
        src: '/icons/socials/discord.svg'
    },
    {
        id: 2,
        src: '/icons/socials/instagram.svg'
    },
    {
        id: 3,
        src: '/icons/socials/wallet.svg'
    }
];

const links = [
    {
        id:1,
        text:"Home",
        link:""
    },
    {
        id:2,
        text:"Collection",
        link:""
    },
    {
        id: 3,
        text:"Choose",
        link:""
    },
    {
        id: 4,
        text:"About",
        link:""
    },
    {
        id: 5,
        text:"Roadmap",
        link:""
    },
    {
        id: 6,
        text:"Blog",
        link:""
    }
];



const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="pt-6  flex items-center px-6 md:px-0 justify-between xl:hidden">
                <div className="">
                    <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        src='/images/NFTHub.svg'
                        alt=""
                        className="w-auto h-[21px]"
                    />
                </div>
                <div className="flex space-x-8">
                    <div className="flex items-center  space-x-3">
                        {socials.map((items) => (
                            <div className="" key={items.id}>
                                <Image
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    src={items.src}
                                    alt=""
                                    className="w-auto h-[17px]"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="" onClick={() => setIsOpen(!isOpen)}>
                        <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            src="/icons/hamburger.svg"
                            alt=""
                            className="w-auto h-[28px]"
                        />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default MobileNavbar