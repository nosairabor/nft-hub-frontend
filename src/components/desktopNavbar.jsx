import Image from "next/image"
import localFont from "next/font/local"
import Link from "next/link"

const inter = localFont ({
    src: '../pages/fonts/Inter-Medium.otf'
})

const socials = [
    {
        id: 1,
        src: '/icons/socials/x.svg'
    },
    {
        id: 2,
        src: '/icons/socials/discord.svg'
    },
    {
        id: 3,
        src: '/icons/socials/instagram.svg'
    },
    {
        id: 4,
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

const DesktopNavbar = () => {
    return (
        <div className="flex justify-center ">
            <div className={`${inter.className} w-full 2xl:max-w-[980px] flex justify-between items-center pt-5`}>
                <div className="">
                    <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        src='/images/NFTHub.svg'
                        alt=""
                        className="w-[110px] h-[35px]"
                    />
                </div>
                <div className="ml-[85px] font-bold flex gap-x-7 text-[15px] smallLaptopNavMargin">
                    {links.map((items) => (
                        <div className="" key={items.id}>
                            <Link href={items.link}>{items.text}</Link>
                        </div>
                    ))}
                </div>
                <div className="flex items-center  space-x-3">
                    {socials.map((items) => (
                        <div className="" key={items.id}>
                            <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                src={items.src}
                                alt=""
                                className="w-[22px] h-[19px]"
                            />
                        </div>
                    ))}
                </div>
                

            </div>
        </div>
    )
}
export default DesktopNavbar