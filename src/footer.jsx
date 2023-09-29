
import { useState } from "react";
import  {BiEnvelope}  from "react-icons/bi";
import { BsTelephone,  } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaInstagram, } from "react-icons/fa"

const Footer = () => {

    
  const today = new Date().getFullYear();
  const [newDay] = useState(today)
    return ( 

<div className="bg-darkBlue h-auto w-full">

<div className="flex items-center justify-center ">
<p className="text-sm text-center md:text-left font-lighter text-gray-500   pt-8"> Copyright &copy; 50 rein  All rights reserved <span className="  text-center text-greyDark">{newDay} </span><br></br> powered by Lasglowtech</p>
 

</div>

<div className='Email    flex  justify-center'>

<span className=" rounded-[100%]   my-5 me-2 text-white bg-orangeRed  text-2xl"><a href="https://twitter.com/50rein2023"><BsTwitter className="p-1" /></a></span>
<span className="rounded-[100%] my-5  mx-2  text-white bg-orangeRed  text-2xl"><a href="https://www.facebook.com/50rein"><FaFacebookF className="p-1" /></a></span>
<span className=" rounded-[100%] my-5 mx-2 text-white  bg-orangeRed text-2xl"><a href="https://instagram.com/50rein/"><FaInstagram className="p-1" /></a></span>
<span className=" rounded-[100%] my-5 mx-2 text-white  bg-orangeRed text-2xl"><a href="https://linkedin.com/company/feeds/posts/"><BsLinkedin className="p-1" /></a></span>

</div>


</div>

    );
}
 
export default Footer;