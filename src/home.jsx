import About from "./About";
import Services from "./Services";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    
      <div className="bg-darkBlue h-auto">

        <div className=" hero-img container pt-10 mx-auto flex flex-col items-between md:flex-row ">
          <div className="left px-4   ">

            <h1 className="text-white text-4xl  max-w-3xl font-bold">Introducing New tech,
              A Cutting-edge Technology</h1>
            <p className="text-base text-white pt-6 pb-6 leading-loose">
              We are on a mission to create Products that change the way people live,
              Passionate about creating products that enhances human experience
              Connecting and bridging tech space. We are dedicated to pushing the boundaries
              of what is possible through innovation.  </p>

            <Link to="/hero" className="  text-base p
px-3 py-2 rounded-md  bg-lightBlue text-white  ">
              <button className=" ">Learn more</button> </Link>

          </div>
          <div className="right   ">
            <img src="/heroimage.png" alt="heoimage" className=" himage   -translate-3 pt-6 md:mx-20 md:p  w={700px}" />
          </div>


        </div>


      </div>


      <section className="services py-10 " id="Features">
        <h3 className=" text-center font-bold text-xl my-10 text-darkBlue ">Why Choose Us</h3>
        <div className=" container bg-white grid mx-auto py-5 myservices md:grid-cols-3 gap-10">



          <div className="py-3 hover:scale-110 transition  duration-500  shadow-2xl flex flex-col items-center justify-center px-3 ">
            <img src="/technology.png" alt="tech" className=" rounded-full bg-darkBlue items-center p-3 w-20 h-20"></img>


            <h3 className="text-xl font-medium text-darkBlue py-2 text-center">IT Expertise</h3>
            <p className="max-w-mdtext-base  text-center text-darkBlue pt-3 pb-6">
              Lorem ipsum dolor sit amet consectetur
              adipiscing elit facilisis vestibulum, nam
              mattis posuere semper porttitor potenti s
            </p>
          </div>

          <div className=" py-3 hover:scale-110   transition  duration-500 shadow-2xl flex flex-col items-center justify-center px-3 ">
            <img src="/hand.png" alt="tech" className=" rounded-full bg-darkBlue items-center p-3 w-20 h-20"></img>


            <h3 className="text-xl font-medium text-darkBlue py-2 text-center">24/7 IT Support</h3>
            <p className="max-w-mdtext-base  text-center text-darkBlue pt-3 pb-6">
              Lorem ipsum dolor sit amet consectetur
              adipiscing elit facilisis vestibulum, nam
              mattis posuere semper porttitor potenti s
            </p>
          </div>

          <div className="py-3 hover:scale-110   transition  duration-500 shadow-2xl flex flex-col items-center justify-center px-3 ">
            <img src="/client.png" alt="tech" className=" rounded-full bg-darkBlue items-center p-3 w-20 h-20"></img>


            <h3 className="text-xl font-medium text-darkBlue py-2 text-center">Client Satisfaction</h3>
            <p className="max-w-mdtext-base  text-center text-darkBlue pt-3 pb-6">
              Lorem ipsum dolor sit amet consectetur
              adipiscing elit facilisis vestibulum, nam
              mattis posuere semper porttitor potenti s
            </p>
          </div>

        </div>


      </section>

      <section className="  bg-darkBlue aboutus py-6 md:rounded-bl-[5%] md:rounded-br-[5%] " id="Aboutus">
        <About/>
        </section>

        <section className="  Services py-6  " id="Serbices">
        <Services/>
        </section>





    </>
  );
}

export default Home;