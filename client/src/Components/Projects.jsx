import ImgOne from '../assets/project1.png'
import ImgTwo from '../assets/project2.png'
import ImgThree from '../assets/project3.png'

function Projects() {
  return (
    <div className="pad1 w-full bg-[#3E4149] flex items-center justify-center">

        <div className="flex flex-col mt-20 gap-8 mb-20 justify-center items-center w-[65%] tablet:w-[95%]">
            <h1 className="text-[#FF8F0F] text-[36px] font-extrabold">Projects</h1>

            <div className="flex items-center justify-center gap-12 tablet:flex-col">
                <div className="flex flex-1 flex-col gap-12 justify-center items-center">
                    <img className='w-full' alt='projects' src={ImgOne} />
                    <img className='w-full' alt='projects' src={ImgTwo} />
                </div>

                <div className="flex-1 flex">
                    <img className='w-full' alt='projects' src={ImgThree} />
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Projects
