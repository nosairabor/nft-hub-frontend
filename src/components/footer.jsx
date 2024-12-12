import Image from "next/image"
import localFont from "next/font/local"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="md:px-[20px] xl:px-[250px] 2xl:px-[320px] px-5 flex flex-col items-center justify-center gap-y-[50px] pb-8 -mt-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-y-7 md:items-center 2xl:max-w-[980px] w-full pr-12">
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
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-[90px]">
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

          <div className="2xl:max-w-[980px] flex xl:flex-row flex-col gap-y-2 justify-between items-center w-full">
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
    )
}

export default Footer