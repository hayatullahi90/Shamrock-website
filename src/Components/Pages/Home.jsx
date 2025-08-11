import React from "react";
import { CiGlobe } from "react-icons/ci";
import { GrEmptyCircle } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { FaTruck } from "react-icons/fa6";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import bgImage from "../../assets/Banner.jpg";
import Image1 from "../../assets/course4.jpeg";
import Image2 from "../../assets/course5.jpeg";
import Image3 from "../../assets/course1.jpeg";
import Image4 from "../../assets/course3.jpeg";
import Image5 from "../../assets/course6.jpg";
import CourseCard from "../CourseCard";
import Hero from "../Hero";

function Home() {
  return (
    <div className="">
      <Hero />
      <div>
        <div className="py-2">
          <div className="mx-20">
            <div className="row text-center pt-24">
              <h1 className="font-bold text-blue-800 text-5xl mb-4">
                Shamrock Innovations
              </h1>
              <p className="text-gray-500 text-2xl font-normal">
                Shamrock Innovations is a women and youth-centered innovation
                hub in Kano, established in 2019, dedicated to empowering the
                next generation of leaders in business and technology. We
                provide a dynamic space where women and youth can collaborate,
                innovate, explore, and create solutions that address real-world
                challenges. Our hub fosters growth through education,
                mentorship, and hands-on learning, offering access to a
                professional, supportive environment where ideas flourish, and
                businesses thrive; all built on the foundation of a powerful,
                inclusive community.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-24">
              <div>
                <div className="text-pink-700 mb-5">
                  <CiGlobe size={44} />
                </div>
                <h2 className="text-blue-800 font-bold">OUR VISION</h2>
                <p className="text-gray-500 text-xl">
                  To shape the future by empowering young innovators and
                  limitless opportunities to explore, create and lead in an
                  ever-evolving digital landscape.
                </p>
              </div>
              <div>
                <div className="text-pink-700 mb-5">
                  <GrEmptyCircle size={44} />
                </div>
                <h2 className="text-blue-800 font-bold">OUR MISSION</h2>
                <p className="text-gray-500 text-xl">
                  Enhance & Support the best collaborative and empowering
                  environment to ignite curiosity,foster creativity, and equip
                  young minds with the essential skills needed for the digital
                  future
                </p>
              </div>
              <div>
                <div className="text-pink-700 mb-5">
                  <FiUser size={44} />
                </div>
                <h2 className="text-blue-800 font-bold">OUR CORE VALUES</h2>
                <p className="text-gray-500 text-xl">
                  Transparency, <br />
                  Excellence,
                  <br />
                  Goal Driven,
                  <br />
                  Innovation
                  <br />& Collaboration,
                </p>
              </div>
              <div>
                <div className="text-pink-700 mb-5">
                  <FaTruck size={44} />
                </div>
                <h2 className="text-blue-800 font-bold">OUR SERVICES</h2>
                <p className="text-gray-500 text-xl">
                  Software Development,
                  <br />
                  Pre-Incubation,
                  <br />
                  Training and Workshops,
                  <br /> IT Consultancy, Community Programme,
                  <br />
                  Digital Marketing.
                </p>
              </div>
            </div>
          </div>

          <div className="px-20 bg-gradient-to-b from-white to-gray-100 pb-20">
            <div className="mt-40 mb-10 flex flex-col items-center">
              <h1 className="text-blue-800 font-bold text-5xl">
                The top courses
              </h1>
              <p className="text-gray-500 text-xl">
                Choose from our list of courses
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20">
              <CourseCard
                title="Robotic For Kids"
                complexity="easy"
                time="2 Days/8 Weeks"
                instructor="Instructor - Auwal law"
                image={Image1}
              />
              <CourseCard
                title="Kids Coding"
                complexity="easy"
                time="2 Days/8 Weeks"
                instructor="Instructor - Auwal law"
                image={Image2}
              />
              <CourseCard
                title="Data Science For Beginners"
                complexity="easy"
                time="2 Days/8 Weeks"
                instructor="Instructor - Auwal law"
                image={Image3}
              />
              <CourseCard
                title="Data Science For Beginners"
                complexity="easy"
                time="2 Days/8 Weeks"
                instructor="Instructor - Auwal law"
                image={Image4}
              />

              {/* CourseData.map((course) => {
                    return (
                        <CourseCard title={course.title} time={course.time} image={course.image} instructor={course.instructor} complexity={course.complexity}/>
                    )
                }) */}
            </div>
          </div>

          <div>
            <div className="text-center my-20">
              <h4 className="text-red-400 font-bold">
                WORLD-CLASS INSTRUCTORS
              </h4>
              <h1 className="text-blue-800 font-bold text-xl">
                Classes Taught by Industry Experts
              </h1>
              <p className="text-gray-500 text-xl">
                Shamrocks instructors are icons, experts, and industry rock
                stars excited to share their
                <br /> experience, wisdom, and trusted tools with you.
              </p>
            </div>
          </div>
          <div className="mx-20">
            <div className="grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-3 overflow-hidden">
              <div className="col-span-3 shadow-lg rounded-xl overflow-hidden">
                <a href="#">
                  <img className="h-fit" src={Image5} />
                </a>
                <div className="card-body py-4 px-4">
                  <h4 className="mb-2 text-black hover:text-pink-800 font-bold">
                    Aminu Muhammad <br /> Bulangu{" "}
                  </h4>
                  <p className="text-xl text-gray-500">Robotics And Web</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 mb-20 text-center">
            <button className="bg-blue-950 py-2 px-4 text-white font-bold rounded-xl">
              See All Instructors
            </button>
          </div>
          <div className="container mx-auto px-16">
            <div className="flex justify-between mt-24 mb-14 gap-16">
              <div className="col-span-4">
                <h1 className="text-blue-800 text-5xl font-bold">
                  What We Do At Shamrock
                </h1>
              </div>
              <div className="col-span-8">
                <p className="text-gray-500 text-2xl">
                  We believe in technology innovations and believe with the
                  right resources our women and youth will lead sustainable
                  businesses.
                </p>
              </div>
            </div>
            <div className="mt-20">
              <div className="grid md:grid-cols-8  lg:grid-cols-12 gap-4">
                <div className="col-span-4">
                  <h2 className="text-blue-800 font-bold text-xl">Software Development</h2>
                  <p className="text-gray-500 text-xl">
                    Our software development team can help build world class
                    applications that suits your needs. We build Android, Web &
                    VR Applications.
                  </p>
                </div>
                <div className="col-span-4">
                  <h2 className="text-blue-800 font-bold text-xl">Pre Incubation</h2>
                  <p className="text-gray-500 text-xl">
                    The incubation programme is designed to help these startups
                    grow their ideas and businesses into profitable &
                    sustainable enterprises. We are looking for any person who
                    has an idea that can be transform in to business to join us.
                  </p>
                </div>
                <div className="col-span-4">
                  <h2 className="text-blue-800 font-bold text-xl">Training and Workshop</h2>
                  <p className="text-gray-500 text-xl">
                    We Conduct both free and paid trainings. Through our
                    partners we conduct free training programmes. This includes
                    school internship & workshops.
                  </p>
                </div>
                <div className="col-span-4">
                  <h2 className="text-blue-800 font-bold text-xl">IT Consultancy</h2>
                  <p className="text-gray-500 text-xl">
                    Our great team of experts leverages on its Expertise,
                    Knowledge to meet our client expectation.
                  </p>
                </div>
                <div className="col-span-4">
                  <h2 className="text-blue-800 font-bold text-xl">Community Programme</h2>
                  <p className="text-gray-500 text-xl">
                    We provide some free programme through our shamrock
                    innovations community programmes.
                  </p>
                </div>
                <div className="col-span-4">
                  <h2 className="text-blue-800 font-bold text-xl">Digital Marketing</h2>
                  <p className="text-gray-500 text-xl">
                    We can help scale a strategy to reach your ideal customers
                    online.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-20 rounded-xl">
              <button className="bg-blue-950 mt-2  text-white font-bold py-2 px-4">
                Enroll Today
              </button>
            </div>
          </div>
        </div>
        <div
          className="mx-2 h-80 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-pink-700 text-4xl font-bold">
              Join more than 6000 learners
            </h1>
            <h4 className="text-blue-800 font-bold text-2xl text-center">
              Effective learning starts with assessment. Learning a new skill is
              hard, shamrock
              <br /> makes it easier.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
