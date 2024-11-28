import React, { useRef } from "react";

export default function Portfolio() {
    const containerRef = useRef(null);
    let scrollInterval = null;

    const startScroll = () => {
        if (containerRef.current) {
            scrollInterval = setInterval(() => {
                containerRef.current.scrollBy({ top: 5, behavior: "smooth" });
            }, 10); // Adjust the speed here
        }
    };

    const stopScroll = () => {
        clearInterval(scrollInterval);
    };
    return (
        <>

            <div className='w-[100%] bg-[#1f1f1f] h-[100vh] flex'>

                <div className='w-[350px] pt-20 pl-5 '>

                    <div className='border border-[#4c4c4c] rounded-3xl h-[98%] w-[100%] p-5'>


                        <div>
                            <img src="/user.svg" alt="" />
                        </div>
                        <div className='text-center text-white '>
                            <h1 className='text-[30px]'>Ayush Ramoliya</h1>
                            <br />
                            <p className='text-[#b2b2b2] text-[18px]'>Hi, I'm Ayush Ramoliya
                                Web designer expert and backend developer </p>
                        </div>
                        <br />
                        <div className='flex pl-5  items-center text-white mb-4'>
                            <i class="fa-regular fa-envelope text-white text-[20px] mr-5"></i>
                            ayushramoliya69@gmail.com
                        </div>
                        <div className='flex pl-5  items-center text-white mb-4'>
                            <i class="fa-brands fa-github text-white text-[20px] mr-5"></i>
                            Github
                        </div>
                        <div className='flex pl-5  items-center text-white mb-4'>
                            <i class="fa-sharp-duotone fa-solid fa-phone text-white text-[20px] mr-5"></i>
                            9687658606
                        </div>
                    </div>

                </div>


                <div className='overflow-scroll pl-[100px] pr-[200px]'>


                    <div id='home' className='h-full pt-[150px] mt-[100px]'>
                        <div className='flex justify-evenly border rounded-full p-2 w-[150px] text-white items-center'>
                            <i class="fa-solid fa-house"></i>
                            introduction
                        </div>


                        <div>
                            <h1 className='text-white text-[70px]'>
                                Hi I 'm  Ayush ,<br />
                                I'm Fullstack Developer
                            </h1>
                        </div>
                    </div>


                    <div id='about' className='h-full pr-[50px] mt-[-70px]'>

                        <div className='flex justify-evenly border rounded-full p-2 w-[100px] text-white items-center'>
                            <i class="fa-regular fa-user"></i>
                            About
                        </div>
                        <br /><br />
                        <p className='text-white text-[20px]'>I am <span className='text-[#28e98c]'>Ayush Ramoliya</span>, a passionate BCA student
                            currently in my third semester. I am actively pursuing a master course in Fullstack
                            Development at Red and White to build a strong foundation in software development.
                            While I have no professional experience yet, I am eager to apply my growing
                            knowledge and skills to real-world projects and contribute effectively to a
                            dynamic team.</p>
                        <br /><br />
                        <p className='text-[#585858]'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    </div>

                    <div id='resume' className='h-full pr-[50px] mt-[-50px]'>

                        <div className='flex justify-evenly border rounded-full p-2 w-[120px] text-white items-center'>
                            <i class="fa-solid fa-file"></i>
                            Resume
                        </div>

                        <div className='p-7 text-start '>
                            <h1 className='text-white font-bold'>Secoundary School Certificate </h1>
                            <p className='text-[#6d6d6d] text-[15px]'>2020-2021 | Rajkot</p>
                            <br />
                            <p className='text-[#a1a1a1] text-[19px]'> School , Rajkot , Gujarat</p>
                        </div>

                        <hr className='w-[100%] border border-[#444649] ' />

                        <div className='p-7 text-start '>
                            <h1 className='text-white font-bold'>Higher Secoundary Certificate </h1>
                            <p className='text-[#6d6d6d] text-[15px]'>2022-2023 | Rajkot</p>
                            <br />
                            <p className='text-[#a1a1a1] text-[19px]'> School , Rajkot , Gujarat</p>
                        </div>
                        <hr className='w-[100%] border border-[#444649] ' />

                        <div className='p-7 text-start '>
                            <h1 className='text-white font-bold'>Bachelor's Degree </h1>
                            <p className='text-[#6d6d6d] text-[15px]'>2023-2026 | Rajkot</p>
                            <br />
                            <p className='text-[#a1a1a1] text-[19px]'>Bachelor's Degree in Computer Science SPS Collage, Atkot, Gujarat</p>
                        </div>


                        <hr className='w-[100%] border border-[#444649] ' />

                        <div className='p-7 text-start '>
                            <h1 className='text-white font-bold'>Master Course </h1>
                            <p className='text-[#6d6d6d] text-[15px]'>2023-2024 | Rajkot</p>
                            <br />
                            <p className='text-[#a1a1a1] text-[19px]'>Programming Course in Red and White Multimedia Institute , Rajkot , Gujarat</p>
                        </div>

                    </div>


                    <div id='service' className='h-full pr-[50px] pt-[50px]'>

                        <div className='flex justify-evenly border rounded-full p-2 w-[150px] text-white items-center mx-[30px] mt-[10px]'>
                            <i class="fa-solid fa-layer-group"></i>
                            SERVICES
                        </div>
                        <br /><br />
                        <h1 className='text-[50px] text-white'>My <span className='text-[#28e98c]'>Specializations</span></h1> <br />


                        <div className='border rounded-2xl text-white p-10 mt-2'>
                            <h1 className='text-[30px]'>Website Design</h1><br />
                            <p>I created digital products with unique ideas use Figma & Framer</p>
                        </div>
                        <div className='border rounded-2xl text-white p-10 mt-2'>
                            <h1 className='text-[30px]'>Development</h1>
                            <br />
                            <p>I build website go live with Framer, Webflow or WordPress</p>
                        </div>
                        <div className='border rounded-2xl text-white p-10 mt-2'>
                            <h1 className='text-[30px]'>SEO/Marketing</h1>
                            <br />
                            <p>Increase the traffic for your website with SEO optimized</p>
                        </div>


                    </div>




                    <div id='skill' className='h-full pr-[50px] pt-[50px] mt-[100px] px-[10px]'>
                        <div className='flex justify-evenly border rounded-full p-2 w-[100px] text-white items-center'>
                            <i class="fa-solid fa-dice-d20"></i>
                            Skill
                        </div>
                        <br />
                        <div className="  text-white">

                            <div className="grid grid-cols-1 md:grid-col text-left">

                                <div className="animate__animated animate__backInLeft  div1 p-6 rounded-lg shadow-md text-start">
                                    <h2 className="text-xl font-bold mb-1 ml-2 text-green-400">Personal <span className='text-white'>Skills</span></h2>
                                    <br />
                                    {[
                                        { skill: "Communication", level: 90 },
                                        { skill: "Team Work", level: 70 },
                                        { skill: "Leadership", level: 60 },
                                        { skill: "Language", level: 80 },
                                    ].map(({ skill, level }, index) => (
                                        <div key={index} className="mb-4">
                                            <p className="mb-1">{skill}</p>
                                            <div className="w-full bg-[#53565b]  h-2">
                                                <div
                                                    className="bg-green-400 h-2 "
                                                    style={{ width: `${level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="animate__animated animate__backInRight div1 p-6 rounded-lg shadow-md text-start">
                                    <h2 className="text-xl font-bold mb-1 ml-2 text-green-400">Professional <span className='text-white'>Skills</span></h2>
                                    <br />
                                    {[
                                        { skill: "HTML", level: 95 },
                                        { skill: "React JS", level: 85 },
                                        { skill: "CSS / Tailwind", level: 90 },
                                        { skill: "Bootstrap ", level: 90 },
                                    ].map(({ skill, level }, index) => (
                                        <div key={index} className="mb-4">
                                            <p className="mb-1">{skill}</p>
                                            <div className="w-full bg-[#53565b]  h-2">
                                                <div
                                                    className="bg-green-400 h-2"
                                                    style={{ width: `${level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <br />

                    <div id='portfolio' className='h-full pr-[50px] pt-[50px] '>

                        <div className='flex justify-evenly border rounded-full p-2 w-[150px] text-white items-center'>
                            <i class="fa-solid fa-layer-group"></i>
                            PORTFOLIO
                        </div>
                        <br />
                        <h1 className='text-[50px] text-white'>My <span className='text-[#28e98c]'>Projects</span></h1>

                        <a href="https://resilient-moonbeam-f58a90.netlify.app/" target='_blank'>
                            <div

                                className="border rounded-2xl text-white p-10 mt-2 h-[50vh] overflow-hidden hover:overflow-auto"
                                onMouseEnter={startScroll}
                                onMouseLeave={stopScroll}
                                ref={containerRef}
                            >
                                <img src="/1.jpeg" alt="Example" />
                            </div>                        </a>

                        <a href="https://effervescent-kataifi-58504d.netlify.app/" target='_blank'>
                            <div className='border rounded-2xl text-white p-10 mt-2 h-[50vh] overflow-hidden hover:overflow-auto' onMouseEnter={startScroll}
                                onMouseLeave={stopScroll} ref={containerRef}>
                                <img src="/2.jpeg" alt="" />

                            </div>
                        </a>

                        <a href="https://stunning-begonia-961ce3.netlify.app/" target='_blank'>
                            <div className='border rounded-2xl text-white p-10 mt-2 h-[50vh] overflow-hidden hover:overflow-auto'
                             onMouseEnter={startScroll}
                                onMouseLeave={stopScroll} ref={containerRef}>
                                <img src="/3.jpeg" alt="" />

                            </div>
                        </a>

                    </div>



                    <div id='contect' className='h-full mt-[650px]'>
                        <div className='flex justify-evenly border rounded-full p-2 w-[150px] text-white items-center'>
                            <i class="fa-regular fa-envelope"></i>
                            CONTACT
                        </div>

                        <h1 className='text-[50px] text-white'>Let's Work <span className='text-[#28e98c]'>Together!</span></h1>


                        <div className=" w-[100%] mt-10 flex items-center justify-center  text-white">
                            <div className="w-[100%] p-8 rounded-[25px] shadow-md">
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="col-span-1">
                                            <label htmlFor="">FULL NAME</label>
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                                className="w-full px-4 py-4  bg-transparent text-white  focus:outline-none inp1 "
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="">EMAIL</label>
                                            <input
                                                type="email"
                                                placeholder="Your Email Address"
                                                className="w-full px-4 py-4 bg-transparent text-white  focus:outline-none inp1"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label htmlFor="">MESSAGE</label>

                                        <textarea
                                            placeholder="Write Your Message Here...."
                                            rows="4"
                                            className="w-full px-4 py-4 bg-transparent text-white  focus:outline-none inp1"
                                        ></textarea>
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="px-6 py-2  text-white rounded-lg font-bold flex items-center justify-center "
                                        >
                                            Send Message &rarr;
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>



                </div>


                <div className='text-center float-right text-white absolute right-0 top-60 mr-10 p-5 border rounded-full'>
                    <a href="#home"><i class="fa-solid fa-house"></i></a><br /><br />
                    <a href="#about"><i class="fa-regular fa-user"></i></a><br /><br />
                    <a href="#resume"><i class="fa-solid fa-file"></i></a><br /><br />
                    <a href="#service"><i class="fa-solid fa-layer-group"></i></a><br /><br />
                    <a href="#skill"><i class="fa-solid fa-dice-d20"></i></a><br /><br />
                    <a href="#portfolio"><i class="fa-solid fa-layer-group"></i></a><br /><br />
                    <a href="#contect"><i class="fa-regular fa-envelope"></i></a>
                </div>
            </div>



        </>
    )
}
