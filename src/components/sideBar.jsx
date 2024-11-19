import Image from "next/image";
import { TfiClose } from "react-icons/tfi";

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
    },
    {
        id: 5,
        src: '/icons/socials/telegram.svg'
    }
];

//the md:-mx-[100px ]is because of the padding:100px put in the main page 

const SideBar = ({isOpen, setIsOpen}) => {
    return (
        <div className={` ${isOpen ? ' translate-x-0  ' : ' -translate-x-full '} md:-mx-[100px] lg:px-0 lg:hidden pt-5  w-screen transform transition-transform duration-500 z-50 fixed overflow-y-auto h-screen bg-white `}>
            <div className="flex justify-between items-center px-6">
                <h3 className="text-5xl font-bold">nerko</h3>
                <TfiClose onClick={() => setIsOpen(false)} className="text-2xl text-[#741FF5] font-light"/>
            </div>
            <hr className="mt-4"/>
            <div className="font-bold text-xl ">
                <div className="flex items-center justify-between border-b px-6 py-3">
                    <p>Home</p>
                    <div className="bg-[#EFEFEF] pb-1 w-[40px] h-[40px] flex font-medium justify-center items-center text-3xl">+</div>
                </div>
                <p className="border-b px-6 py-3">Collection</p>
                <p className="border-b px-6 py-3">Choose</p>
                <p className="border-b px-6 py-3">About</p>
                <p className="border-b px-6 py-3">Roadmap</p>
                <p className="border-b px-6 py-3">Blog</p>
            </div>
            <div className="flex items-center justify-center space-x-3 pt-9">
                {socials.map((items) => (
                    <div className="border rounded-sm p-3" key={items.id}>
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
    )
}

export default SideBar