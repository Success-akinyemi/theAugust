import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function Footer() {
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
    <div className="pad1 w-full bg-[#000000] flex items-center justify-center">

        <div className="flex flex-col mt-20 gap-8 mb-20 justify-start items-start w-full">
            <div className="w-[40%] p-4 border-b-[5px] border-b-[#FF8F0F] tablet:w-full">
                <p className="text-white font-semibold text-[40px]">Contact Me</p>
            </div>

            <div className="grid grid-cols-2 tablet:grid-cols-1 gap-8 w-full">
                <div className="w-full bg-[#D9D9D9] p-8 flex items-center gap-4 flex-col justify-center">
                    <div className="flex items-center gap-3">
                        <MdEmail className="text-[35px] tablet:text-[25px]" />
                        <h3 className="text-[#0000008A] font-semibold text-[30px] tablet:text-[22px]">Email</h3>
                    </div>
                    <p>
                        <a href="mailto:beckyolawumi@mail.com" className="text-[28px]">beckyolawumi@mail.com</a>
                    </p>
                </div>
                <div className="w-full bg-[#D9D9D9] p-8 flex items-center gap-4 flex-col justify-center">
                    <h3 className="text-[#0000008A] font-semibold text-[30px] tablet:text-[22px]">Social Media</h3>
                    <div className="flex items-center gap-6">
                        {
                            links.map((item, idx) => {
                                const Icon = item.icon

                                return (
                                    <a href={item?.link} key={idx} target='_blank'>
                                        <Icon className='text-[#FF8F0F] text-[28px] hover:text-white duration-300' />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full bg-[#D9D9D9] p-8 flex items-center gap-4 flex-col justify-center">
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-[35px] tablet:text-[25px]" /> / <IoLogoWhatsapp className="text-[35px] tablet:text-[25px]" />
                        <h3 className="text-[#0000008A] font-semibold text-[30px] tablet:text-[22px]">Call or Whatsapp me</h3> 
                    </div>
                    <p>
                        <a href="tel:2348068771581" className="text-[28px]">08068771581</a>
                    </p>
                    <p>
                        <a href="" className="text-[28px]">08068771581</a>
                    </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
