import { useEffect, useState, useRef } from "react";
import { Dispaly } from "../constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animationTextWithGsap } from "../utils/animation";

const Slide = () => {
  const TRANSLATE_AMOUNT = 600;
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef(null);

  useGSAP(() => {
    animationTextWithGsap(".texting", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate + container.clientWidth < container.scrollWidth);
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translate]);

  const smoothScroll = (direction) => {
    const newTranslate =
      direction === "left" ? translate - TRANSLATE_AMOUNT : translate + TRANSLATE_AMOUNT;

    if (containerRef.current) {
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;

      let finalTranslate = newTranslate;
      if (newTranslate < 0) {
        finalTranslate = 0;
      } else if (newTranslate + width >= edge) {
        finalTranslate = edge - width;
      }

      gsap.to(".hello", {
        x: -finalTranslate,
        duration: 0.8,
        ease: "power2.inOut",
      });

      setTranslate(finalTranslate);
    }
  };

  return (
    <div className="relative overflow-x-hidden" ref={containerRef}>
      <div className="flex w-[max-content] whitespace-nowrap gap-10 hello">
        {Dispaly.map((display) => (
          <div className="flex flex-col items-center w-full" key={display.id}>
            <div>
              <img
                src={display.img}
                alt="all/images"
                className="w-[35rem] h-[35rem] object-cover rounded-xl"
              />
            </div>
            <p className="my-2 font-sans text-[1.2rem] font-semibold text-amber-100 text-wrap max-w-[40rem] max-md:text-md text-end">
              {display.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-3 justify-end mt-10 mr-4">
        <div
          className={`${
            isLeftVisible
              ? "bg-white/20 rounded-full cursor-pointer p-3 text-white flex items-center"
              : "bg-white/25 rounded-full cursor-pointer p-3 text-gray"
          }`}
          onClick={() => smoothScroll("left")}
        >
          <ArrowLeft />
        </div>

        <div
          className={`${
            isRightVisible
              ? "bg-white/20 rounded-full cursor-pointer p-3 text-white flex items-center"
              : "bg-white/25 rounded-full cursor-pointer p-3 text-gray"
          }`}
          onClick={() => smoothScroll("right")}
        >
          <ArrowRight />
        </div>
      </div>

      <div className="mt-28 flex sm:gap-52 sm:px-32 overflow-y-hidden px-4 max-md:flex-col gap-10">
        <p className="texting feature-text">
          New display technology allows us to route display data under active pixels with no
          distortion, resulting in thinner borders for larger 6.3-inch and 6.9-inch{" "}
          <span className="text-white">Super Retina XDR displays </span>
          that feel great in the hand.
        </p>
        <p className="texting feature-text">
          iPhone 16 Pro is splash, water, and dust resistant. It also has our latest generation
          Ceramics Shield material that's{" "}
          <span className="text-white">two times tougher than any smartphone glass </span>
          Talk about durable.
        </p>
      </div>
    </div>
  );
};

export default Slide;