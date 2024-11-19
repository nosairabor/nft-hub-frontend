import Image from "next/image";
import localFont from "next/font/local";
import DesktopNavbar from "@/components/desktopNavbar";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselField from "@/components/carousel";
import { artists, faqInfo, HowItWorks } from "@/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import Link from "next/link";
import MobileNavbar from "@/components/mobileNavabr";


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

const chooseUs = [
  {
    id: 1,
    src: '/icons/choose-us/1.svg',
    title1: 'Huge',
    title2: 'Collection',
    about: 'A collection of 890 unique Nerkos built to go beyond the digital space.'
  },
  {
      id: 2,
      src: '/icons/choose-us/2.svg',
      title1: 'High',
      title2: 'quality',
      about: "The nerko's collection includes dozens of rare costumes ands colorways of artists."
  },
  {
    id: 3,
    src: '/icons/choose-us/3.svg',
    title1: 'Top',
    title2: 'resource',
    about: 'Tasty design resources made with care for each pixel. NFTs and game resources.'
  },
  {
    id: 4,
    src: '/icons/choose-us/4.svg',
    title1: 'Big',
    title2: 'community',
    about: 'Be part of a community of nerko owners and create user generated items.'
  },

]

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect (() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();

    window.addEventListener("resize", handleResize );
    return () => window.removeEventListener("resize", handleResize);

  }, [])

  

  const options = isMobile
    ? { damping: 0, alwaysShowTracks: false } // No dampness for mobile
    : { damping: 0.07, alwaysShowTracks: false }; // Smooth effect for desktop

  return (
    <div
      className={`flex flex-col gap-y-[75px] lg:gap-y-[90px]`}
    >
      
      {/* hero section */}
        <div className="relative xl:px-[250px] 2xl:px-[320px] bg-hero-mobile  lg:bg-hero bg-cover bg-no-repeat  lg:h-screen w-screen space-y-[60px] 2xl:space-y-[110px]">
          <MobileNavbar/>
          <DesktopNavbar/>
          
          <div className="flex justify-center ">
            <div className="flex flex-col items-center xl:items-start xl:flex-row xl:justify-between 2xl:max-w-[980px] xl:pt-[140px] w-full">
              <div className="space-y-8">
                <div className="leading-[1.0] text-[38px] xl:text-[56px] smallLaptopScreenText font-bold">
                  <p className="hidden xl:block">High Quality</p>
                  <p className="xl:hidden text-center">High Quality NFT <br/>Collection</p>
                  <p className="hidden xl:block">NFT Collection</p>
                </div>
                <p className="text-[#7B7583] text-[17px] text-center xl:text-start">A 890 piece custom Nfthub's collection is<br/> joining the NFT space on Opensea.</p>
                <div className="flex justify-center xl:justify-start">
                <div className="linearGradient cursor-pointer w-[200px] text-sm py-4 px-2 flex justify-center items-center gap-x-1 rounded-[30px] text-white font-bold">
                  <p>View in OPENSEA</p> 
                  <GoArrowUpRight className="text-xl"/>
                </div>
                </div>
                
                <div className="flex items-center justify-center xl:justify-start">
                  <div className="">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src='/images/avatarList.svg'
                      alt=""
                      className="w-[95px] h-[47px] "
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">47k+</p>
                    <p className="text-xs text-[#7B7583] ">Community members</p>
                  </div>
                  
                  
                </div>
              </div>
              <div className="py-10 xl:py-0 xl:-translate-y-[65px]">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src='/images/hero-illustration.svg'
                  alt=""
                  className="xl:h-[480px] h-[300px] w-auto smallLaptopScreenImage"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute flex justify-end right-0 bottom-0">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/dark-mode-trigger.svg'
              alt=""
              className="h-[70px] w-auto "
            />
          </div>
          
        </div>

        {/* brands */}
        <div className="hidden xl:flex justify-center items-center gap-x-8 xl:-mt-[60px]">
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

        {/* mobile brands */}
        <div className="flex xl:hidden justify-center pl-5">
          <div className="grid grid-cols-2 justify-center items-center gap-y-5 gap-x-8 xl:-mt-[60px]">
            {brands.map((items) => (
                <div className={`${items.id === brands.length ? "col-span-2 justify-self-center pt-2 -ml-3" :""}`} key={items.id}>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={items.src}
                    alt=""
                    className="h-[24px] w-auto"
                  />
                </div>
            ))}
          </div>
        </div>


        {/* seperator 1 */}
        <div className="relative flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src='/images/div-seperator.svg'
            alt=""
            className="h-[20px] w-auto"
          />
        </div>

        {/* nfthub's collection */}
        <div className="xl:px-[250px] 2xl:px-[320px] flex flex-col items-center justify-center font-bold gap-y-[50px]">
          <p className="text-4xl xl:text-5xl text-center">Nfthub's <br className="block xl:hidden"/><span className="linearGradientText">collection</span></p>
          <CarouselField/>
          <div className="linearGradient  cursor-pointer w-[200px] text-sm py-4 px-2 flex justify-center items-center gap-x-1 rounded-[30px] text-white font-bold">
            <p>View collection</p> 
            <GoArrowUpRight className="text-xl"/>
          </div>
        </div>

        {/* seperator 2 */}
        <div className="relative flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src='/images/div-seperator.svg'
            alt=""
            className="h-[20px] w-auto"
          />
        </div>

        {/* why choose us */}
        <div className="relative xl:px-[250px] 2xl:px-[320px] flex flex-col items-center justify-center font-bold gap-y-[70px]">
          <p className=" text-4xl xl:text-5xl">Why <span className="linearGradientText">choose us?</span></p>
          <div className="absolute left-[70px] top-[65px]  xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/circle-01.svg'
              alt=""
              className="h-[15px] w-auto"
            />
          </div>
          <div className="flex xl:flex-row flex-col gap-x-6 choose-us gap-y-9 xl:gap-y-0">
            {chooseUs.map((item) => (
              <div className={`${item.id % 2 === 0 ? 'lg:mt-8': 'mt-0'} flex flex-col justify-center border-[1px] px-5 gap-y-4 h-[270px] max-w-[350px] xl:w-[205px] rounded-[20px]`} key={item.id}>
                <div className="">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={item.src}
                    alt=""
                    className="h-[35px] w-auto"
                  />
                </div>
                <h3 className="text-xl text-[#0F051D] leading-tight">{item.title1}<br/> {item.title2}</h3>
                <p className="text-[#7B7583] font-normal text-[13px]">{item.about}</p>
   
             </div>
            ))}
          </div>
          <div className="absolute left-0 bottom-[20px] xl:px-[200px] 2xl:px-[290px]">
            <Image
                width={0}
                height={0}
                sizes="100vw"
                src='/images/x.svg'
                alt=""
                className="h-[20px] w-auto"
              />
          </div>
          <div className="absolute right-0 bottom-[20px] xl:px-[200px] 2xl:px-[320px]">
            <Image
                width={0}
                height={0}
                sizes="100vw"
                src='/images/circle-02.svg'
                alt=""
                className="h-[20px] w-auto"
              />
          </div>
         
        </div>

        {/* seperator 3 */}
        <div className="relative flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src='/images/div-seperator.svg'
            alt=""
            className="h-[20px] w-auto"
          />
        </div>

        {/* figures */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-x-10 gap-y-10  xl:px-[250px] 2xl:px-[320px]">
            <div className="absolute -top-6 right-[220px] xl:px-[250px] 2xl:px-[320px]">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src='/images/ethereum-01.svg'
                alt=""
                className="h-[20px] w-auto"
              />
            </div>
            <div className="space-y-5 flex flex-col items-center justify-center">
              <p className="text-[#0F051D] font-bold text-6xl">400k+</p>
              <p className="text-[#7B7583] text-sm">Wallets Connected</p>
            </div>

            <div className="hidden lg:block w-[1px] h-[80px] bg-[#e5e7eb]"></div>

            <div className="space-y-4 flex flex-col items-center justify-center" >
              <p className="text-[#0F051D] font-bold text-6xl">20k+</p>
              <p className="text-[#7B7583] text-sm">Wallets Connected</p>
            </div>

            <div className="hidden lg:block w-[1px] h-[80px] bg-[#e5e7eb]"></div>

            <div className="space-y-4 flex flex-col items-center justify-center">
              <p className="text-[#0F051D] font-bold text-6xl">230+</p>
              <p className="text-[#7B7583] text-sm">Creative artists</p>
            </div>

            <div className="hidden lg:block w-[1px] h-[80px] bg-[#e5e7eb]"></div>

            <div className="space-y-4 flex flex-col items-center justify-center">
              <p className="text-[#0F051D] font-bold text-6xl">2.5x</p>
              <p className="text-[#7B7583] text-sm">Estimated value</p>
            </div>

            <div className="absolute left-[300px] -bottom-8 xl:px-[250px] 2xl:px-[320px]">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src='/images/bitcoin-01.svg'
                alt=""
                className="h-[20px] w-auto"
              />
            </div>
        </div>

        {/* seperator 4 */}
        <div className="relative flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src='/images/div-seperator.svg'
            alt=""
            className="h-[20px] w-auto"
          />
        </div>

        {/* How it works */}
        <div className="relative xl:px-[250px] 2xl:px-[320px] flex flex-col items-center justify-center gap-y-[70px]">
          <p className="text-5xl font-bold">How it <span className="linearGradientText">works!</span></p>
          <div className="flex flex-col gap-y-[70px] lg:gap-y-[100px]">
            {HowItWorks.map((item) => (
              <div className={`flex xl:flex-row flex-col justify-center items-center xl:items-start xl:justify-between ${item.id % 2 === 0 ? 'flex-row-reverse' : ''}`} key={item.id}>
                <div className="">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={item.imageSrc}
                    alt=""
                    className="h-[300px] xl:h-[400px] w-auto"
                  />
                </div>
                <div className="flex flex-col pt-6 items-center xl:items-start">
                  <p className="TBlinearGradientText text-[15px] font-bold">0{item.id}.</p>
                  <p className="text-[36px] xl:text-[44px] font-bold w-[250px] xl:w-[350px] text-center xl:text-start leading-[1.05] mt-2">{item.heading}.</p>
                  <div className="mt-5 text-[#7B7583] font-light px-2 text-center max-w-[340px] lg:text-start xl:w-[400px] text-[15px] space-y-3">
                    <p className="">{item.text1}</p>
                    <p className="">{item.text2}</p>
                  </div>
                  <div className="pb-1 mt-7 text-black flex items-center border-b-[2px] w-fit">
                    <p className="text-sm">Learn more</p>
                    <GoArrowUpRight className="text-xl"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

         {/* seperator 5 */}
        <div className="relative flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src='/images/div-seperator.svg'
            alt=""
            className="h-[20px] w-auto"
          />
        </div>
        
        {/* contact us, never miss a drop */}
        <div className="relative px-4 xl:px-[250px] 2xl:px-[320px] flex flex-col items-center justify-center gap-y-[70px]">
          <div className="absolute left-[50px] lg:left-[100px] top-7 lg:top-12 xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/circle-01.svg'
              alt=""
              className="h-[15px] w-auto"
            />
          </div>
          <div className="absolute right-[50px] lg:right-[140px] top-7 lg:top-12 xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/x.svg'
              alt=""
              className="h-[20px] w-auto"
            />
          </div>
          <div className="w-full border rounded-[20px] flex flex-col items-center pt-10 pb-12">
            <p className="xl:text-5xl text-4xl text-center xl:text-start font-bold tracking-wide">Never <span className="linearGradientText">miss a<br className="block lg:hidden"/> drop!</span></p>
            <p className="text-[#7B7583] text-center lg:text-start xl:text-sm pt-6">Subscribe to our super-rare and<br className="block lg:hidden"/> exclusive drops & collectibles.</p>
            <div className="flex lg:flex-row flex-col items-center gap-x-2 gap-y-4 pt-8">
              <input
                type="text"
                className="w-[280px] bg-[#f2f2f1] px-4 py-[10px] rounded-[50px] text-sm  text-[#7B7583]"
                placeholder="Enter your email"
              />
              
              <button type="button" className="linearGradient cursor-pointer text-white font-bold  text-xs rounded-[50px] w-[150px] lg:w-[110px]  xl:w-full flex justify-center items-center px-6 py-[10px]">
                Subscribe 
              </button>
            </div>
          </div>
          <div className="absolute left-[40px] lg:left-[140px] bottom-11 lg:bottom-12 xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/bitcoin-01.svg'
              alt=""
              className="h-[25px] w-auto"
            />
          </div>
          <div className="absolute right-[40px] bottom-11 lg:bottom-12  xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/ethereum-03.svg'
              alt=""
              className="h-[30px] w-auto"
            />
          </div>
        </div>

        {/* seperator 6 */}
        <div className="relative flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src='/images/div-seperator.svg'
            alt=""
            className="h-[20px] w-auto"
          />
        </div>
        
        {/* meet the artists */}
        <div className="relative xl:px-[250px] 2xl:px-[320px] flex flex-col items-center justify-center gap-y-[40px] lg:gap-y-[70px]">
          <p className=" text-4xl lg:text-5xl font-bold tracking-wide">Meet <span className="linearGradientText">the artists</span></p>
          <div className="grid grid-cols-2 gap-y-10 gap-x-5 w-full lg:grid-cols-4 2xl:max-w-[980px]">
            {artists.map((item) => (
              <div className={`${item.id % 2 === 0 ? 'lg:-translate-y-7' : ''}`} key={item.id}>
                <div className="flex flex-col ">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={item.imageSrc}
                    alt=""
                    className="h-[120px] w-auto"
                  />
                </div>
                <div className="flex flex-col items-center gap-y-[2px]">
                  <p className="text-black font-bold pt-3">{item.name}</p>
                  <p className="text-[#7B7583] text-[13px]">{item.occupation}</p>
                </div>
                <div className="flex pt-4 gap-x-3 justify-center items-center">
                  <div className="">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src='/icons/socials/x.svg'
                      alt=""
                      className="h-[11px] w-auto"
                    />
                  </div>
                  <div className="">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src='/icons/socials/discord.svg'
                      alt=""
                      className="h-[11px] w-auto"
                    />
                  </div>
                  <div className="">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src='/icons/socials/instagram.svg'
                      alt=""
                      className="h-[11px] w-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
        {/* seperator 7 */}
        <div className="relative flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src='/images/div-seperator.svg'
            alt=""
            className="h-[20px] w-auto"
          />
        </div>
        
        {/* Accordion */}
        <div className="-mt-5 xl:px-[250px] 2xl:px-[320px] flex flex-col items-center justify-center gap-y-[35px] xl:gap-y-[50px]">
          <div className="text-4xl lg:text-5xl font-bold tracking-wide flex flex-col items-center">
            <p className="flex">Your questions,</p>
            <p className="linearGradientText">answered!</p>
          </div>
          <div className="">
            <Accordion type="single" collapsible className="bg-white border rounded-lg px-5 max-w-[340px]  lg:min-w-[500px]">
              {faqInfo.map((item) => (
                <AccordionItem key={item.id} value={item.id} className={`${item.id === faqInfo.length  ? "border-0" : ""}`}>
                  <AccordionTrigger className="text-black font-bold">
                    {item.heading}
                  </AccordionTrigger>
                  <AccordionContent className="text-white space-y-3 bg-white text-[#7B7583]">
                    <p className="">{item.text1}</p>
                    <p className="">{item.text2}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>

        {/* seperator 8 */}
        <div className="relative flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src='/images/div-seperator.svg'
            alt=""
            className="h-[20px] w-auto"
          />
        </div>
        
        {/* let's start minting */}
        <div className="relative bg-minting bg-cover border-b bg-no-repeat h-[300px] xl:h-[470px]  w-screen flex flex-col justify-center items-center gap-y-5 -mt-12">
          {/* small icons */}
          <div className="absolute left-[10px] lg:left-[180px] top-[20px] lg:top-[80px] xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/circle-01.svg'
              alt=""
              className="h-[20px] w-auto"
            />
          </div>
          <div className="absolute right-[10px] lg:right-[180px] top-[20px] lg:top-[80px] xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/ethereum-03.svg'
              alt=""
              className="h-[30px] w-auto"
            />
          </div>
          <div className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-wide flex flex-col items-center ">
            <p className="">Let's start</p>
            <p className="z-10 linearGradientText pb-1">minting</p>
          </div>
          <p className="text-[#7B7583] text-center lg:text-start">Invest and manage all your NFTs at one<br className="block md:hidden"/> place.</p>
          <div className="linearGradient mt-4 cursor-pointer w-[180px] text-sm py-4 px-2 flex justify-center items-center gap-x-1 rounded-[30px] text-white font-bold">
            <p>Get started</p> 
            <GoArrowUpRight className="text-xl"/>
          </div>
          {/* small icons */}
          <div className="absolute left-[20px] lg:left-[200px] bottom-4 lg:bottom-[130px] xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/bitcoin-01.svg'
              alt=""
              className="h-[30px] lg:h-[40px] w-auto"
            />
          </div>
          <div className="absolute  right-[20px] lg:right-[200px] lg:bottom-[130px] bottom-4  xl:px-[250px] 2xl:px-[320px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src='/images/x.svg'
              alt=""
              className="h-[20px] w-auto"
            />
          </div>
        </div>

        {/* footer */}
        <div className="xl:px-[250px] 2xl:px-[320px] flex flex-col items-center justify-center gap-y-[50px] pb-8 -mt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center 2xl:max-w-[980px] w-full pr-12">
            <div className="flex flex-col gap-y-4">
              <div className="">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src='/images/footer-logo.svg'
                  alt=""
                  className="w-[110px] h-[35px]"
                />
              </div>
              <div className="">
                <p className="text-secondary text-sm w-[300px]">Join our Discord channel or follow us on Twitter to keep up to date with our latest work and announcements.</p>
                <div className="flex pt-5 gap-x-3 items-center">
                  <div className="">
                    <Image
                      width={0} height={0} sizes="100vw" src='/icons/socials/x.svg' alt="" className="h-[15px] w-auto"
                    />
                  </div>
                  <div className="">
                    <Image
                      width={0}  height={0} sizes="100vw" src='/icons/socials/discord.svg' alt="" className="h-[15px] w-auto"
                    />
                  </div>
                  <div className="">
                    <Image
                      width={0} height={0}  sizes="100vw" src='/icons/socials/instagram.svg' alt="" className="h-[14px] w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-x-[90px]">
              <div className="flex flex-col">
                <p className="font-bold">Quick Link</p>
                <div className="pt-4 text-secondary text-sm space-y-3">
                  <p><Link href="">About</Link></p>
                  <p><Link href="">Collection</Link></p>
                  <p><Link href="">Roadmap</Link></p>
                  <p><Link href="">FAQs</Link></p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Community</p>
                <div className="pt-4 text-secondary text-sm space-y-3">
                  <p><Link href="">How it works!</Link></p>
                  <p><Link href="">Blockchain</Link></p>
                  <p><Link href="">Get in touch</Link></p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
              <p className="text-xs text-secondary">Copyright © 2023 Nfthub All Rights Reserved.</p>
              <div className="flex gap-x-12 text-xs text-secondary">
                <p>Privacy policy</p>
                <div className="flex gap-x-6 items-center">
                  <p>Terms of use</p>
                  <div className="">
                    <Image
                      width={0} height={0} sizes="100vw" src='/icons/arrow-up.svg' alt="" className="h-[7px] w-auto"
                    />
                  </div>
                   
                </div>
               
              </div>
          </div>
          
        </div>
        
    </div>
  );
}
