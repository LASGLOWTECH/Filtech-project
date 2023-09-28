
import ServicesItems from "./servicemap";


const Services = () => {
 return (

  <div className="bg-white ke p-6 ">
   <h4 className=" text-center font-medium text-lg  text-darkBlue ">Our Services</h4>

   <h3 className=" text-center font-bold text-2xl mt-2 py-6 text-darkBlue ">What we Do</h3>
   <div className="mx-auto  w-[100px] border border-1 border-lightBlue"></div>



   <div className=" container  grid mx-auto py-5 myservices md:grid-cols-3 gap-3">

{ServicesItems.map((items, index) =>{
 return (
  <div className="bg-white  hover:scale-110 transition  duration-500  shadow-xl hover:bg-blue-50 p-2 flex flex-row justify-between " key={index}>
  <img src={items.marker} alt="tech" className=" pt-3 pr-3 w-[100px] h-[60px]"></img>
  
  
  <div className="">

  <h4 className="  font-bold text-xl mt-2 pb-1 text-darkBlue ">{items.title}</h4>
   <p className="text-base text-darkBlue pt-2 pb-3">
    {items.text}
   </p>
   
  </div>
   



  </div>
 )
 

})}
   


   


   </div>



  </div>



 );
}

export default Services;