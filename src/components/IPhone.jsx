import { useState, useEffect } from "react";
import { Glider } from "../constants";
import { useGSAP } from "@gsap/react";
import { color1 } from "../utils";
import { animationWithGsap } from "../utils/animation";
import gsap from "gsap";

const iPhone = () => {
  const [phone, setPhone] = useState({
    img: color1,
    title: "iPhone 15 Pro in all Titanium",
    color: "#C9C8C2",
  });

  useGSAP(() => {
    animationWithGsap("#texting", { opacity: 1, duration: 1, ease: "power1.inOut" });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".phone-image",
      { filter: "blur(10px)" }, 
      { filter: "blur(0px)", duration: 0.8, ease: "power2.inOut" }  
    );
  }, [phone]);

  return (
    <section className="common-padding bg-black w-screen h-full flex-col justify-center items-center mt-32">
      <div className="flex flex-col screen-max-width">
        <p className="text-6xl font-semibold max-md:text-4xl opacity-0 mb-20 text-start" id="texting">
          Take a closer look
        </p>

        <div className="flex items-center justify-center flex-col">
          {/* iPhone Image with Smooth Blur Transition */}
          <div className="max-sm:w-[25rem] max-sm:h-[40rem] w-[50rem] h-[40rem] relative">
            <img
              src={phone.img}
              className="w-full h-full object-cover p-0 m-0 phone-image"
            />
            <p className="text-center absolute bottom-2 w-full text-sm" style={{ color: phone.color }}>
              {phone.title}
            </p>
          </div>

          {/* Color Picker with Clickable Buttons */}
          <div className="flex items-center mt-8 rounded-full bg-gray-300 backdrop-blur">
            {Glider.map((glides, index) => (
              <div className="flex h-14 px-2 items-center" key={index}>
                <span
                  className={`${
                    glides.color === phone.color
                      ? "h-8 w-8 rounded-full max-md:h-6 max-md:w-6 cursor-pointer border-4 border-gray-50"
                      : "h-8 w-8 rounded-full max-md:h-6 max-md:w-6 cursor-pointer"
                  }`}
                  style={{ backgroundColor: glides.color }}
                  onClick={() => setPhone(glides)}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default iPhone;

