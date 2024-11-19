import Image from "next/image";

export default function LoadingScreen( ) {
    return (
        <div className="flex flex-col items-center justify-center bg-hero-mobile  md:bg-hero bg-cover bg-no-repeat  h-screen w-screen">
            <div className="-mt-12 md:mt-0 zoom-in-out-element">
                <Image 
                    src={`/images/footer-logo.svg`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-[55px] lg:h-[80px]"
                />
            </div>
           
        </div>
    )
}