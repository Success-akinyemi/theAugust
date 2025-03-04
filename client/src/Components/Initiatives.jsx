import AvoImg from '../assets/Initiatives/avo.png'
import BridgeOfCareImg from '../assets/Initiatives/bridgeOfCare.png'
import LeadUpImg from '../assets/Initiatives/leadUp.png'
import KogiInnovateImg from '../assets/Initiatives/kogiInnovate.png'
import IconOnSeat from '../assets/Initiatives/iconOfSeat.png'



function Initiatives() {
    const data = [
        {
            image: AvoImg,
            title: 'AVO-Origin Digital Enterprise',
            text: "At AVO-origin, we blend creativity with technology turning ideas into reality. We build impactful solutions and products while training for excellence."
        },
        {
            image: BridgeOfCareImg,
            title: 'Bridge of Care Foundation',
            text: "Our mission is to empower communities with essential healthcare resources and humanitarian services fostering hope and well-being."
        },
        {
            image: LeadUpImg,
            title: 'LeadUP',
            text: " LeadUp equips young minds with the skills and resources they need to become tomorrow's visionary leaders and change-makers."
        },
        {
            image: KogiInnovateImg,
            title: 'Kogi Innovate',
            text: "Kogi Innovate is a dynamic  community committed to creating a collaborative atmosphere where ideas thrive  in kogi state."
        },
        {
            image: IconOnSeat,
            title: 'Icon on Seat',
            text: " Empowering the Next Generation with real life stories, life time career tips and societal trends  from  iconic individuals."
        },
    ]
    
  return (
    <div className="pad1 w-full bg-main-color flex items-center justify-center">

        <div className="flex flex-col mt-20 gap-8 mb-20 justify-center items-center w-[65%] tablet:w-[95%]">
            <h1 className="text-[#FF8F0F] text-[36px] font-extrabold">Our Initiatives</h1>

            {/**SWIPER */}
            <div className="flex items-center gap-12 mt-8 mb-8 flex-wrap justify-center">
                {
                    data.map((item, idx) => (
                        <div key={idx} className="w-[350px] min-h-[480px] phone:w-[98%] bg-[#3E4149] flex flex-col px-8 py-10 items-center justify-between rounded-[30px]">
                            <img src={item.image} alt={item.title} className='w-[100px] h-[100px] rounded-full mb-4' />
                            <h2 className="text-[25px] font-extrabold text-white text-center mb-6">{item.title}</h2>

                            <h3 className="text-white text-[20px] font-semibold text-center mb-6">{item?.text}</h3>
                        
                            <div className="">
                                <button className='bg-[#FF8F0F] text-white rounded-[15px] py-2 px-6 flex items-center justify-center hover:shadow-2xl cursor-pointer font-medium text-[30px] tablet:text-[24px]'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
      
    </div>
  )
}

export default Initiatives
