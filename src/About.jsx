import { RxHamburgerMenu } from "react-icons/rx"

const About = () => {
 return ( 
<div className="">
<h4 className=" text-center font-medium text-lg  text-white ">About Us</h4>

<h3 className=" text-center font-bold text-2xl mt-2 pb-1 text-white ">Who we are</h3>
<div className="mx-auto  w-[100px] border border-1 border-lightBlue"></div>

    <div className=" container  grid mx-auto py-5 myservices md:grid-cols-2 gap-3">

    <div className="bg-white  text-center md:text-left p-6 ">
    <h4 className="  font-bold text-xl mt-2 pb-1 text-darkBlue ">We are Creative Design Agencies</h4>
    <p className="text-base text-darkBlue pt-3 pb-3">
    Lorem ipsum dolor sit amet consectetur adipiscing elit facilisis
vestibulum, nam mattis posuere semper porttitor potenti sem non
ridiculus inceptos, curabitur lacinia massa in volutpat arcu auctor
rhoncus. Imperdiet ornare iaculis egestas fusce faucibus nisi
pellentesque, cursus suspendisse quam venenatis taciti consequat.
Nec magnis urna felis lacinia dapibus idunt luctus lacus ultrices.

            </p>
            <img src="/responsive.png" alt="tech" className=" w-full"></img>



    </div>


    <div className="bg-white  text-center md:text-left p-6">


    <h4 className="  font-bold text-xl mt-2 pb-1 text-darkBlue ">Leveraging our Skills across
Various Level of Expertise</h4>
    <p className=" text-base  text-left text-darkBlue pt-3 pb-6">
    Lorem ipsum dolor sit amet consectetur adipiscing elit facilisis
vestibulum, nam mattis posuere semper porttitor potenti sem non
ridiculus inceptos, curabitur lacinia massa in volutpat arcu auctor
rhoncus. Imperdiet ornare iaculis egestas fusce faucibus nisi
pellentesque, cursus suspendisse quam venenatis taciti consequat.
Nec magnis urna felis lacinia dapibus idunt luctus lacus ultrices.

            </p>
            <img src="/responsive2.png" alt="tech" className=" w-full"></img>

    </div>


</div> 
      
      
      
      
      
      
      </div>
  );
}
 
export default About;