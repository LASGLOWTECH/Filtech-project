
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom";


const Navbar = () => {



  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(show => !show)

  }

  const handleClose = () => {
    setShow(false)
  }

  const toggleI = show ? 'active' : '';
  return (
    <>
      <div className='Nav h-auto w-100 bg-darkBlue '>
        <div className=" xs:px-4 container  mx-auto  flex flex-row py-6 justify-between items-center space-x-6  ">
          <div className="navbrand   ">
            <img src="/brand.png" alt="vita" className="w-[90px] h-auto " />

          </div>
          <div className="hidden LIinksmd md:flex  "  >
            <Link to="/home" className="text-base px-3   hover:border-b-2 transition hover:bg-lightBlue border-lightBlue  text-white">Home</Link>
            <a href="/#Features" className="text-base px-3   hover:border-b-2 transition  border-lightBlue  text-white ">Features</a>
            <a href="/#Aboutus" className="text-base px-3   hover:border-b-2 transition  border-lightBlue  text-white ">About us</a>

            <a href="/#Services" className="text-base px-3   hover:border-b-2 transition  border-lightBlue text-white ">Services</a>
            <a href="/#Testimonials" className="text-base px-3  hover:border-b-2  transition border-lightBlue  text-white ">Testimomials</a>
            <a href="/#Partrners" className="text-base px-3  hover:border-b-2 transition  border-lightBlue  text-white ">Partners</a>

          </div>
          <a href="/#Contact" className=" hidden text-base px-3 py-2 rounded-md  bg-lightBlue text-white md:flex ">
            <button className=" ">Contact us</button> </a>

          {/* CONTROLS */}
          {!show && < div className=' flex items-center rounded-sm hover:bg-black hover:text-white w-8 h-8  bg-lightBlue text-light justify-center md:hidden'>< RxHamburgerMenu className="font-bold text-lg text-white transition duration-500  " onClick={handleShow} /></div>}

          {show && < div className=' flex items-center rounded-sm hover:bg-black hover:text-white w-8 h-8  bg-lightBlue text-light justify-center md:hidden'><AiOutlineClose className="font-bold text-lg text-white transition duration-500  " onClick={handleClose} /></div>}


        </div>

      </div>

      <div className={`hidden  text-white space-y-6 navlinks flex ${toggleI} bg-lightBlue transition duration-500  md:hidden    `} onClick={handleClose}>
        <div className="flex flex-col   justify-center items-center py-6 space-y-9">
          <Link to="/home" className="text-base px-2  hover:text-red-400 text-white">Home</Link>
          <a href="/#Features" className="text-base px-2 hover:text-red-400 text-white ">Features</a>
          <a href="/#Aboutus" className="text-base px-2 hover:text-red-400 text-white ">About us</a>
          <a href="/#Services" className="text-base px-2 hover:text-red-400  text-white ">Services</a>
          <a href="/#Testimonials" className="text-base px-2 hover:text-red-400 text-white ">Testimonials</a>
          <a href="/#Partners" className="text-base px-2 hover:text-red-400 text-white ">Partners</a>
          <a href="/#Contact" className="text-base px-2 hover:text-red-400 text-white ">Contact us</a>
        </div>
      </div>

    </>
  )
}
export default Navbar;