import Image from 'next/image';

export default function IndexMobile() {
    return(
        <div id="landing-page-mobile" className='bg-[#FFDC4A] h-full relative'>
            <Image
                src="/img/bg-index-mobile.png"
                alt="bg-index"
                objectFit="cover"
                quality={100}
                width={700}
                height={1080}
                className="absolute left-0 right-0 mx-auto bottom-10 xl:w-[700px] lg:w-[600px] md:w-[550px] sm:w-[250px]"
            />
        </div>
    );
}