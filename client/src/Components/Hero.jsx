import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import ProfileImg from '../assets/becky.png'

function Hero() {

    const [text] = useTypewriter({
        words: ['Empowering Today.', 'Inspiring Tomorrow.'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 80,
    });

    const links = [
        {
            icon: GrTwitter,
            link: ''
        },
        {
            icon: AiFillInstagram,
            link: ''
        },
        {
            icon: BsLinkedin,
            link: ''
        },
        {
            icon: FaFacebook,
            link: ''
        }
    ]
  return (
    <div className="heroBgImg relative w-full min-h-[100vh] bg-main-color pad1 flex items-center justify-center gap-12 tablet:flex-col tablet:py-20">
      {/**OVERLAY */}
      <div className="overlay">

      </div>
      {/**CONTENTs */}
      <div className="z-10 flex flex-col gap-12 w-[70%] items-center justify-center tablet:w-full">
        <div className="flex flex-col gap-4 w-full items-center justify-center">
            <h2 className="font-extrabold text-[37px] tablet:text-[24px] text-white text-center">
            THE AUGUST is a purpose-driven network, focused on shaping a better future through innovation and impact. 
            </h2>
            <h2 className="flex items-center justify-center phone:flex-col phone:items-center text-[24px] tablet:text-[16px] font-extrabold text-white gap-2 w-fit">
                <span className='text-[26px] tablet:text-[17px]  text-[#FF8F0F]'>
                    {text}
                    <Cursor cursorColor='#FF8F0F' cursorStyle='' />
                </span>
            </h2>

        </div>

        <div className="flex flex-col gap-7">

            <div className="flex items-center gap-[3rem] tablet:gap-[2rem]">
                {
                    links.map((item, idx) => {
                        const Icon = item.icon

                        return (
                            <a href={item?.link} key={idx} target='_blank'>
                                <Icon className='text-[#FF8F0F] text-[28px] tablet:text-[21px] hover:text-white duration-300' />
                            </a>
                        )
                    })
                }
            </div>

        </div>

        <div className="">
            <a href='https://drive.google.com/drive/u/0/folders/1-TAlTLMqkSvc9QSaKDNGFZ1Pt8TirVsE' target='_blank' className='bg-[#FF8F0F] text-white rounded-[15px] py-2 px-6 flex items-center justify-center hover:shadow-2xl cursor-pointer font-medium text-[30px] tablet:text-[24px]'>
                View More
            </a>
        </div>

      </div>
      
    </div>
  )
}

export default Hero