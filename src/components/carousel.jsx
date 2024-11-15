import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const CarouselField = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      
    const imageCard = [
        {
            id: 1,
            src: '/images/carousel/2.svg',
            title: '#Metaverse',
            about: 'By TheSalvare'
        },
        {
            id: 2,
            src: '/images/carousel/4.svg',
            title: '#Polly Doll',
            about: 'By TheNative'
        },
        {
            id: 3,
            src: '/images/carousel/3.svg',
            title: '#Alec Art',
            about: 'By GeorgZvic'
        },
        {
            id: 4,
            src: '/images/carousel/1.svg',
            title: '#Toxic Poeth',
            about: 'By YazioLup'
        },
        {
            id: 5,
            src: '/images/carousel/2.svg',
            title: '#Polly Doll',
            about: 'By TheNative'
        },
        {
            id: 6,
            src: '/images/carousel/4.svg',
            title: '#Metaverse',
            about: 'By TheSalvare'
        },
        {
            id: 7,
            src: '/images/carousel/3.svg',
            title: '#Alec Art',
            about: 'By GeorgZvic'
        },
        {
            id: 8,
            src: '/images/carousel/4.svg',
            title: '#Toxic Poeth',
            about: 'By YazioLup'
        },

    ]

    return (
        <div className="flex justify-center w-[1000px]">
            <Carousel responsive={responsive} className="pb-[60px] w-full" showDots={true} swipeable={true}  draggable={true} >
                {imageCard.map((item)=> (
                    <div className="flex flex-col items-center" key={item.id}>
                        <div className="">
                            <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                src={item.src}
                                alt=""
                                className="h-[250px] w-auto"
                            />
                        </div>
                        <h3 className="text-2xl pt-3">{item.title}</h3>
                        <p className="text-[#7B7583] text-xs font-light pt-2">{item.about}</p>
                        
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselField