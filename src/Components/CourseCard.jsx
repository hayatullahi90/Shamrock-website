import { GiNetworkBars } from "react-icons/gi"
import { IoPhonePortraitSharp } from "react-icons/io5";


const CourseCard = ({title, time, complexity, instructor, image}) => {
  return (
   

          <div className=" rounded-xl overflow-hidden border">
            <a href='#'><img className='h-fit' src={image} /></a>
            <div className="py-4 px-4">
            <h5 className="mb-2">{title}</h5>
            <div className='flex gap-1 items-center'>
              <IoPhonePortraitSharp size={16} />
                <p className="text-xl text-gray-500 m-0"> {time}</p>
                <GiNetworkBars size={16} />
                <p className="text-xl text-gray-500 m-0">{complexity}</p>
            </div>
            <p className='text-xl text-gray-500'>{instructor}</p>
        </div>
      </div>
   

  )
}

export default CourseCard;
