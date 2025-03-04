import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import QrCodeImg from '../assets/qrcode.png'
import LogoImg from '../assets/august-logo.png'

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

        <div className="flex justify-between mt-20 gap-8 mb-20 items-center w-full phone:flex-col">
            <div className="flex items-center gap-3">
                <div className="">
                    <h1 className="text-[#fff] text-[36px] font-extrabold">Contact Us</h1>
                </div>

                <span className="w-[2px] bg-white min-h-[150px]"></span>

                <div className="flex items-start flex-col gap-2">
                    <div className="flex items-center gap-3 text-white">
                        <span><FaPhoneAlt /></span>
                        <a className="link text-[20px]"  href="tel:2348038909463">+234-803-890-9463</a>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                        <span><MdEmail /></span>
                        <a className="link text-[20px]"  href="mailto:hello@theaugust.com">hello@theaugust.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                        <span><IoIosGlobe /></span>
                        <a className="link text-[20px]"  href="https://ww.theaugust.com">www.theaugust.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                        <span><FaMapMarkerAlt /></span>
                        <a className="link text-[20px]"  href="">Nigeria</a>
                    </div>
                </div>
            </div>

            <div className="">
                <img src={LogoImg} alt="August logo" className="h-[200px] w-[200px] " />
            </div>

            <div className="flex flex-col items-center justify-center">
                <img src={QrCodeImg} alt="qrcode" className="w-[200px] small-phone:w-[80%]" />
                <h1 className="text-[#FF8F0F] text-[36px] font-extrabold">Scan me</h1>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
