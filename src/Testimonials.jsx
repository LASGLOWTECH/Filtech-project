const Testimonials = () => {
    return ( 


<div className="bg-gray-50 rounded-full">
<h4 className=" text-center font-medium text-lg  text-darkBlue ">Testimonials</h4>

<h3 className=" text-center font-bold text-2xl mt-2 pb-1 text-lightBlue ">What Client Say About Us</h3>
<div className="mx-auto  w-[100px] border border-1 border-lightBlue"></div>

    <div className=" container  grid mx-auto px-4 mt-10  myservices md:grid-cols-2 gap-5">

    <div className="flex items-center md:items-start  flex-col">
    <h4 className="  font-bold text-xl mt-2 pb-1 text-darkBlue ">User Friendly and Secure</h4>
    <p className="text-base  text-center md:text-left text-darkBlue pt-3 pb-3">
    Lorem ipsum dolor sit amet consectetur adipiscing elit facilisis
vestibulum, nam mattis posuere semper porttitor potenti sem non
ridiculus inceptos, curabitur lacinia massa in volutpat arcu auctor
rhoncus. 
            </p>
            <div className="flex mt-6  flex-row">
            <img src="/responsive.png" alt="tech" className=" w-[150px] h-auto rounded-3xl"></img>
            <div className="flex px-4 my-5  flex-col">

            <h4 className="  font-bold text-xl mt-2 pb-1 text-darkBlue ">Jamses Scoth</h4>
            <p className="text-base text-light text-darkBlue pt-1 pb-3">Co-founder </p>

            </div>

            </div>


            

    </div>


  

    <div className="flex items-center md:items-start  flex-col">
    <h4 className="  font-bold text-xl mt-2 pb-1 text-darkBlue ">Security guaranteed</h4>
    <p className="text-base  text-center md:text-left text-darkBlue pt-3 pb-3">
    Lorem ipsum dolor sit amet consectetur adipiscing elit facilisis
vestibulum, nam mattis posuere semper porttitor potenti sem non
ridiculus inceptos, curabitur lacinia massa in volutpat arcu auctor
rhoncus. 
            </p>
            <div className="flex mt-6  flex-row">
            <img src="/responsive.png" alt="tech" className=" w-[150px] h-auto "></img>
            <div className="flex px-4 my-5  flex-col">

            <h4 className="  font-bold text-xl mt-2 pb-1 text-darkBlue ">Mariana Kuno</h4>
            <p className="text-base text-light text-darkBlue pt-1 pb-3">Cooperate Member </p>

            </div>

            </div>


            

    </div>



</div> 
      
      
      
      
      
      
      </div>


     );
}
 
export default Testimonials;