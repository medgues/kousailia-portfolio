"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  const app = useRef();
  useLayoutEffect(() => {
    var currentImg = undefined,
      currentImgProps = { x: 0, y: 0 },
      isZooming = false,
      column = -1,
      mouse = { x: 0, y: 0 },
      delayedPlay;

    function pauseBoxes(b) {
      var classStr = "pb-col0";
      if (b.classList.contains("pb-col1")) classStr = "pb-col1";
      if (b.classList.contains("pb-col2")) classStr = "pb-col2";
      for (
        var i = 0;
        i < document.querySelector(".mainBoxes").children.length;
        i++
      ) {
        var b = document.querySelector(".mainBoxes").children[i];
        if (b.classList.contains(classStr))
          gsap.to(b.tl, { timeScale: 0, ease: "sine" });
      }
    }

    function playBoxes() {
      for (
        var i = 0;
        i < document.querySelector(".mainBoxes").children.length;
        i++
      ) {
        var tl = document.querySelector(".mainBoxes").children[i].tl;
        tl.play();
        gsap.to(tl, {
          duration: 0.4,
          timeScale: 1,
          ease: "sine.in",
          overwrite: true,
        });
      }
    }

    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      const onEnter = ({ currentTarget }) => {
        if (currentImg) return;
        if (delayedPlay) delayedPlay.kill();
        pauseBoxes(currentTarget);
        var _t = currentTarget;
        gsap.to(".photoBox", {
          duration: 0.2,
          overwrite: "auto",
          opacity: function (i, t) {
            return t == _t ? 1 : 0.33;
          },
        });
        gsap.fromTo(
          _t,
          { zIndex: 100 },
          { duration: 0.2, scale: 0.62, overwrite: "auto", ease: "power3" }
        );
      };

      const onLeave = ({ currentTarget }) => {
        if (currentImg) return;
        var _t = currentTarget;

        if (gsap.getProperty(_t, "scale") > 0.62)
          delayedPlay = gsap.delayedCall(0.3, playBoxes);
        // to avoid jump, add delay when mouseout occurs as big image scales back down (not 100% reliable because the scale value sometimes evaluates too late)
        else playBoxes();

        gsap
          .timeline()
          .set(_t, { zIndex: 1 })
          .to(
            _t,
            { duration: 0.3, scale: 0.5, overwrite: "auto", ease: "expo" },
            0
          )
          .to(
            ".photoBox",
            { duration: 0.5, opacity: 1, ease: "power2.inOut" },
            0
          );
      };
      const onClick = ({ currentTarget }) => {
        if (!isZooming) {
          //only tween if photoBox isn't currently zooming

          isZooming = true;
          gsap.delayedCall(0.8, function () {
            isZooming = false;
          });

          if (currentImg) {
            gsap
              .timeline({ defaults: { ease: "expo.inOut" } })
              .to(
                ".mainClose",
                { duration: 0.1, autoAlpha: 0, overwrite: true },
                0
              )
              .to(
                ".mainBoxes",
                {
                  duration: 0.5,
                  scale: 1,
                  left: "75%",
                  width: 1200,
                  rotationX: 14,
                  rotationY: -15,
                  rotationZ: 10,
                  overwrite: true,
                },
                0
              )
              .to(
                ".photoBox",
                { duration: 0.6, opacity: 1, ease: "power4.inOut" },
                0
              )
              .to(
                currentImg,
                {
                  duration: 0.6,
                  width: 400,
                  height: 640,
                  borderRadius: 20,
                  x: currentImgProps.x,
                  y: currentImgProps.y,
                  scale: 0.5,
                  rotation: 0,
                  zIndex: 1,
                },
                0
              )
              .add(playBoxes, 0.8);
            currentImg = undefined;
          } else {
            pauseBoxes(currentTarget);

            currentImg = currentTarget;
            currentImgProps.x = gsap.getProperty(currentImg, "x");
            currentImgProps.y = gsap.getProperty(currentImg, "y");

            gsap
              .timeline({ defaults: { duration: 0.6, ease: "expo.inOut" } })
              .set(currentImg, { zIndex: 100 })
              .fromTo(
                ".mainClose",
                { x: mouse.x, y: mouse.y, background: "rgba(0,0,0,0)" },
                { autoAlpha: 1, duration: 0.3, ease: "power3.inOut" },
                0
              )
              .to(".photoBox", { opacity: 0 }, 0)
              .to(
                currentImg,
                {
                  width: "100%",
                  height: "100%",
                  borderRadius: 0,
                  x: 0,
                  top: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                },
                0
              )
              .to(
                ".mainBoxes",
                {
                  duration: 0.5,
                  left: "50%",
                  width: "100%",
                  rotationX: 0,
                  rotationY: 0,
                  rotationZ: 0,
                },
                0.15
              )
              .to(
                ".mainBoxes",
                { duration: 5, scale: 1.06, rotation: 0.05, ease: "none" },
                0.65
              );
          }
        }
      };

      for (var i = 0; i < 12; i++) {
        if (i % 4 == 0) column++;

        var b = document.createElement("div");
        b.addEventListener("mouseover", onEnter);
        b.addEventListener("mouseleave", onLeave);
        b.addEventListener("click", onClick);
        document.querySelector(".mainBoxes").append(b);

        gsap.set(b, {
          attr: {
            id: "b" + i,
            class: "photoBox absolute pb-col" + column,
            // onmouseenter: { onEnter },
            // onmouseleave: { onLeave },
            // ref: { btl },
          },
          backgroundImage:
            "url(https://assets.codepen.io/721952/" + i + ".jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          // x: [1360, 1580, 1800][column],
          x: [210, 430, 650][column],
          width: 400,
          height: 640,
          borderRadius: 20,
          scale: 0.5,
          zIndex: 1,
        });
        b.tl = gsap
          .timeline({ paused: true, repeat: -1 })
          // .fromTo(
          //   b,
          //   {
          //     y: [-675, 600, 600][column],
          //     rotation: -0.05,
          //   },
          //   {
          //     duration: [40, 35, 26][column],
          //     y: [700, -775, -775][column],
          //     rotation: 0.05,
          //     ease: "none",
          //   }
          // )
          .fromTo(
            b,
            { y: [-575, 800, 800][column], rotation: -0.05 },
            {
              duration: [40, 35, 26][column],
              y: [800, -575, -575][column],
              rotation: 0.05,
              ease: "none",
            }
          )
          .progress((i % 4) / 4);
      }

      var _tl = gsap
        .timeline({ onStart: playBoxes })
        .set(".main", { perspective: 800 })
        .set(".photoBox", { opacity: 1, cursor: "pointer" })
        .set(".mainBoxes", {
          left: "75%",
          xPercent: -50,
          width: 1200,
          rotationX: 14,
          rotationY: -15,
          rotationZ: 10,
        })
        .set(".mainClose", {
          autoAlpha: 0,
          width: 60,
          height: 60,
          left: -30,
          top: -31,
          pointerEvents: "none",
        })
        .fromTo(
          ".main",
          { autoAlpha: 0 },
          { duration: 0.6, ease: "power2.inOut", autoAlpha: 1 },
          0.2
        );
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component
      if (!!("ontouchstart" in window)) {
        console.log("touch device!");
        var a = document.querySelector(".mainBoxes");
        gsap.set(".mainBoxes", { display: "none" });
      }
      //gsap.to(".box", {...});
      // or we can use refs
    }, app); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div className="main overflow-hidden" ref={app}>
      <div className="text-left left-5 flex flex-row justify-center items-center  top-28 absolute">
        <div className="flex flex-col before:content-[''] before:w-[2px] before:h-[80px] before:self-center before:bg-black after:content-[''] after:w-[2px] after:h-[80px] after:self-center after:bg-black">
          {" "}
          {/* social icons */}
          <SocialIcon
            onClick={() => window.open("https://www.linkedin.com/in/med-gues/")}
            network="email"
            fgColor="currentColor"
            bgColor=" transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full pr-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open("https://www.linkedin.com/in/med-gues/")}
            network="pinterest"
            fgColor="currentColor"
            bgColor=" transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full pr-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open("https://github.com/medgues")}
            network="instagram"
            fgColor="currentColor"
            bgColor="transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() => window.open(" fb://page/100873834998317")}
            network="facebook"
            fgColor="currentColor"
            bgColor="transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
          <SocialIcon
            onClick={() =>
              window.open(
                "https://wa.me/+213698179358?text=hey%2C%0Ai%20am%20interested%20in%20your%20services%2C"
              )
            }
            network="whatsapp"
            fgColor="currentColor"
            bgColor="transparent"
            className="cursor-pointer  hover:text-gray-800 text-gray-500 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
          />
        </div>
        <div>
          <p className="font-Abhaya -mb-4 ">
            <span className="text-[50px]  font-extrabold ">Photographer </span>
            <span className=" text-[30px] font-[50] italic ">
              Koussaila Mehdi
            </span>
          </p>
          <p className="text-[40px] -mt-4 mb-8 font-[50] ">
            Creating more then just Memories{" "}
          </p>
          {/* <p className="font-Abhaya text-[50px] text-center">Memories</p> */}
          <Image
            src="/img/hero/camera.webp"
            width={500}
            height={300}
            alt="camera objective"
          />
        </div>
      </div>
      <div className="mainBoxes fs scale-90 " id="mainBoxes"></div>
      <div className="mainClose"></div>
    </div>
  );
};

export default Hero;
