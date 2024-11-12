import Image from "next/image";
import localFont from "next/font/local";
import DesktopNavbar from "@/components/desktopNavbar";
import { GoArrowUpRight } from "react-icons/go";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const inter = localFont ({
  src: './fonts/Inter-Medium.otf'
})

const brands = [
  {
      id: 1,
      src: '/images/brands/metamask.svg'
  },
  {
      id: 2,
      src: '/images/brands/bitgo.svg'
  },
  {
      id: 3,
      src: '/images/brands/coinbase.svg'
  },
  {
      id: 4,
      src: '/images/brands/trustwallet.svg'
  },
  {
    id: 5,
    src: '/images/brands/exodus.svg'
},
];

export default function Home() {
  return (
    <div
      className={`flex flex-col  `}
    >
        <div className="xl:px-[250px] 2xl:px-[320px] bg-hero bg-cover bg-no-repeat h-auto lg:h-screen w-screen space-y-[30px]">
          <DesktopNavbar/>
          <div className="flex justify-between pt-[140px]">
            <div className="space-y-8">
              <div className="text-5xl font-bold">
                <p className="">High Quality</p>
                <p className="">NFT Collection</p>
              </div>
              <p className="text-[#7B7583]">A 890 piece custom Nfthub's collection is<br/> joining the NFT space on Opensea.</p>
              <div className="linearGradient w-[200px] text-sm py-4 px-2 flex justify-center items-center gap-x-1 rounded-[30px] text-white font-bold">
                <p>View in OPENSEA</p> 
                <GoArrowUpRight className="text-xl"/>
              </div>
              <div className="flex items-center">
                <div className="">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src='/images/avatarList.svg'
                    alt=""
                    className="w-[95px] h-[47px]"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl font-bold">47k+</p>
                  <p className="text-xs text-[#7B7583] ">Community members</p>
                </div>
                
                
              </div>
            </div>
            <div className="-translate-y-[110px]">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src='/images/hero-illustration.svg'
                alt=""
                className="h-[500px] w-auto"
              />
            </div>
          </div>
          <div className=""></div>
          <div className="flex justify-center items-center gap-x-8">
            {brands.map((items) => (
                <div className="" key={items.id}>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={items.src}
                    alt=""
                    className="h-[27px] w-auto"
                  />
                </div>
            ))}
          </div>
        </div>
      
    </div>
  );
}
