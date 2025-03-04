import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import LogoImg from '../assets/august-logo.png'

function Navbar() {
    const [ showMenu, setShowMenu ] = useState(false)

    const menu = [
        {
            name: 'Home'
        },
        {
            name: 'About'
        },
        {
            name: 'Initiatives'
        },
        {
            name: 'Project'
        },
        {
            name: 'Contact'
        }
    ]
  return (
    <div className={`z-[999] flex items-center justify-between fixed top-0 left-0 py-4 pad1 h-[60px] w-full bg-main-color`}>
        <img src={LogoImg} alt="August logo" className="h-[50px] w-[50px] rounded-full" />


        <div className={`ml-auto flex items-center gap-[62px] phone:hidden `}>
            {
                menu.map((item, idx) => (
                    <a key={idx} href={`#${item.name}`} className={`cursor-pointer border-b-[2px] border-b-transparent hover:border-b-white duration-300 text-white text-[17px]`}>
                        {item?.name}
                    </a>
                ))
            }


        </div>


        {
            showMenu && (
                <div className="hidden phone:flex phone:right-4 phone:top-6 phone:absolute phone:flex-col phone:bg-main-color phone:p-3 phone:rounded-md phone:shadow-2xl phone:gap-3">
                    {
                        menu.map((item, idx) => (
                            <a key={idx} href={`#${item.name}`} className={`cursor-pointer border-b-[2px] border-b-transparent hover:border-b-white duration-300 text-white text-[18px]`}>
                                {item?.name}
                            </a>
                        ))
                    }
                    <div onClick={() => setShowMenu((prev) => !prev)} className="hidden phone:flex m-auto">
                        <IoClose className="cursor-pointer text-white text-[40px] hover:text-[#FF8F0F]" />
                    </div>
                </div>
            )
        }


        <div onClick={() => setShowMenu((prev) => !prev)} className="hidden phone:flex ml-auto">
            <LuMenu className="cursor-pointer text-white text-[40px] hover:text-[#FF8F0F]" />
        </div>
    </div>
  )
}

export default Navbar
