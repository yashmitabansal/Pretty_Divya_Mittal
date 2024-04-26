import { useCallback } from "react";

const FrameComponent3 = () => {
  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServiceTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='serviceLink']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onReviewTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='clientLinkContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-[114px] box-border max-w-full text-left text-9xl text-black font-inter mq800:pb-[74px] mq800:box-border">
      <div className="w-[1400.5px] flex flex-col items-start justify-start gap-[41.8px] max-w-full mq800:gap-[21px]">
        <header className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-21xl font-rubik-mono-one">
          <h1 className="m-0 h-[37.6px] w-[291px] relative text-inherit font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#71691a,_rgba(138,_126,_12,_0.67)_35.42%,_rgba(100,_94,_42,_0.33)_81.25%,_rgba(113,_104,_15,_0.14)_91.67%,_rgba(108,_99,_12,_0.05)_97.4%,_rgba(0,_0,_0,_0.03)_99.98%,_rgba(0,_0,_0,_0.01)_99.99%,_rgba(138,_126,_12,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 whitespace-nowrap z-[1]">{`Pretty `}</h1>
          <nav className="m-0 w-[764px] flex flex-col items-start justify-start pt-[8.8px] px-0 pb-0 box-border max-w-full">
            <nav className="m-0 w-[616.6px] flex flex-row items-start justify-start max-w-full text-left text-6xl text-black font-poppins">
              <h2 className="m-0 w-[178.6px] relative text-inherit font-normal font-inherit text-darkgoldenrod inline-block shrink-0 [debug_commit:1de1738]">{`Home `}</h2>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 ml-[-48.6px]">
                <h2
                  className="m-0 w-[178.6px] relative text-inherit font-normal font-inherit inline-block shrink-0 [debug_commit:1de1738] whitespace-nowrap cursor-pointer z-[1]"
                  onClick={onAboutUsTextClick}
                >
                  About Us
                </h2>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 ml-[-48.6px] text-9xl">
                <h2
                  className="m-0 w-[149px] h-[36.2px] relative text-inherit font-normal font-inherit inline-block shrink-0 [debug_commit:1de1738] whitespace-nowrap cursor-pointer z-[2]"
                  onClick={onServiceTextClick}
                >
                  Service
                </h2>
              </div>
              <h2
                className="m-0 w-[178.6px] relative text-inherit font-normal font-inherit inline-block shrink-0 [debug_commit:1de1738] cursor-pointer z-[3] ml-[-48.6px]"
                onClick={onReviewTextClick}
              >
                Review
              </h2>
            </nav>
          </nav>
          <div className="w-[59.5px] flex flex-col items-start justify-start pt-[12.8px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[32.1px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/group-9.svg"
            />
          </div>
        </header>
        <div className="w-[1067.2px] flex flex-row items-start justify-start py-0 pr-11 pl-[44.2px] box-border max-w-full mq1125:pl-[22px] mq1125:pr-[22px] mq1125:box-border">
          <div className="h-[386px] flex-1 relative max-w-full">
            <div className="absolute top-[333px] left-[80.8px] w-[264px] h-[53px] text-white">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[238px]">
                <div className="absolute top-[0px] left-[0px] rounded-16xl bg-rosybrown-100 w-full h-full" />
                <img
                  className="absolute top-[27px] left-[176px] w-[45px] h-[22.1px] z-[1]"
                  alt=""
                  src="/arrow-2.svg"
                />
              </div>
              <h2 className="m-0 absolute top-[7px] left-[20px] text-inherit font-light font-inherit inline-block w-[244px] h-11 z-[1] mq450:text-3xl">
                Shop Now
              </h2>
            </div>
            <div className="absolute top-[0px] left-[8.8px] w-full flex flex-row items-start justify-start max-w-full text-55xl font-alike">
              <div className="h-[255px] flex-1 relative max-w-full">
                <div className="absolute top-[0px] left-[0.2px] w-full flex flex-row items-start justify-start max-w-full h-full">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[85px] font-normal font-inherit inline-block max-w-full mq450:text-25xl mq450:leading-[51px] mq800:text-40xl mq800:leading-[68px]">
                    <p className="m-0">Care Your Skin</p>
                    <p className="m-0 whitespace-pre-wrap"> With Natural</p>
                    <p className="m-0">Ingredients</p>
                  </h1>
                  <div className="h-[414px] w-[881.7px] absolute !m-[0] right-[-399.7px] bottom-[-144px] text-3xs text-pink-100 font-poppins">
                    <img
                      className="absolute top-[0px] left-[0px] w-[55.8px] h-11 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <div className="absolute top-[51.1px] left-[540.7px] rounded-mini bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] w-[341px] h-32 z-[1]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-mini w-full h-full hidden"
                        alt=""
                        src="/rectangle-1.svg"
                      />
                      <div className="absolute top-[21.3px] left-[13px] rounded-mini [background:linear-gradient(180deg,_rgba(230,_139,_123,_0.63),_rgba(253,_111,_86,_0.23)_64.06%,_rgba(242,_130,_110,_0.07)_88.54%,_rgba(241,_133,_114,_0.05)_92.19%,_rgba(236,_150,_135,_0),_rgba(193,_105,_89,_0))] w-[96.3px] h-[92.3px] z-[1]" />
                      <h2 className="m-0 absolute top-[15.5px] left-[146.5px] text-6xl font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#7a1b1b,_rgba(239,_171,_171,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[247.8px] h-[80.6px] z-[2] mq450:text-xl">
                        Balancing Gel
                      </h2>
                      <div className="absolute top-[51.5px] left-[152.5px] font-light inline-block w-[187.6px] h-[36.9px] z-[3]">
                        <p className="m-0">{`contain gylcolic acid & protein`}</p>
                      </div>
                      <img
                        className="absolute top-[67.4px] left-[145.5px] w-[26.1px] h-[27.9px] z-[4]"
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className="absolute top-[66.3px] left-[232.8px] w-[26.1px] h-[27.9px] z-[4]"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className="absolute top-[67.4px] left-[175.6px] w-[26.1px] h-[27.9px] z-[4]"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <img
                        className="absolute top-[67.4px] left-[203.7px] w-[26.1px] h-[27.9px] z-[4]"
                        alt=""
                        src="/vector-3.svg"
                      />
                      <img
                        className="absolute top-[66.3px] left-[262.9px] w-[26.1px] h-[27.9px] z-[4]"
                        alt=""
                        src="/vector-4.svg"
                      />
                      <div className="absolute top-[99.5px] left-[146.5px] text-xl text-black inline-block w-[57.2px] h-[18.5px] whitespace-nowrap z-[2] mq450:text-base">
                        $25
                      </div>
                      <div className="absolute top-[99.1px] left-[248.8px] w-[105.3px] h-[20.4px] text-white font-inter">
                        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darksalmon w-[65.2px] h-[20.4px] z-[2]" />
                        <div className="absolute top-[4.8px] left-[7px] font-light inline-block w-[98.3px] h-[15.5px] z-[3]">
                          Add to cart
                        </div>
                      </div>
                      <div className="absolute top-[83.9px] left-[319px] text-4xs font-light text-darksalmon inline-block w-[13px] h-[17.5px] min-w-[13px] z-[4]">
                        4.5
                      </div>
                    </div>
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[152px] w-[614px] bg-[url('/public/beautifulgirlfaceperfectskinremovebgpreview-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                        alt=""
                        src="/beautifulgirlfaceperfectskinremovebgpreview-1@2x.png"
                      />
                      <img
                        className="absolute top-[49.1px] left-[418.8px] w-[74.3px] h-[137px] object-contain z-[2]"
                        loading="lazy"
                        alt=""
                        src="/frontviewcoloredfragrancedesignedisolatedwhitefloorremovebgpreview-1-1@2x.png"
                      />
                    </div>
                    <img
                      className="absolute top-[290.3px] left-[7.9px] w-[166.6px] h-[110.3px] object-contain z-[3]"
                      alt=""
                      src="/closeupshotelegantgoldskincarecontainergoldbackgroundremovebgpreview-1@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="absolute top-[101px] left-[0px] rounded-61xl w-[145px] h-[57px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/womanhomeapplyingcreammask-1@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[296px] left-[0px] w-[249.8px] h-[11.5px] flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[3px] top-[0px] [transform:scale(1.023)]"
                alt=""
                src="/line-1.svg"
              />
            </div>
            <div className="absolute top-[253.5px] left-[525.7px] w-[372.3px] h-[132.5px] text-6xl font-poppins">
              <h2 className="m-0 absolute top-[15.8px] left-[124.5px] text-inherit font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#8f910b,_rgba(239,_171,_171,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[247.8px] h-[81.7px] z-[2] mq450:text-xl">
                Smooth Affairs
              </h2>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[342.2px]">
                <div className="absolute top-[6.4px] left-[20.1px] rounded-mini [background:linear-gradient(180deg,_rgba(188,_148,_8,_0.63),_rgba(215,_219,_18,_0.23)_64.06%,_rgba(220,_187,_71,_0.07)_88.54%,_rgba(241,_133,_114,_0.05)_92.19%,_rgba(236,_150,_135,_0),_rgba(249,_246,_159,_0))] w-24 h-[90.4px]" />
                <div className="absolute top-[0px] left-[0px] w-full h-full z-[1] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[1] object-contain absolute left-[0px] top-[2px] [transform:scale(1.113)]"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <img
                  className="absolute top-[66.3px] left-[124.5px] w-[26.1px] h-[27.9px] z-[4]"
                  alt=""
                  src="/vector-5.svg"
                />
                <img
                  className="absolute top-[66.3px] left-[155.6px] w-[26.1px] h-[27.9px] z-[3]"
                  alt=""
                  src="/vector-6.svg"
                />
                <img
                  className="absolute top-[66.3px] left-[217.8px] w-[26.1px] h-[27.9px] z-[3]"
                  alt=""
                  src="/vector-7.svg"
                />
                <img
                  className="absolute top-[66.3px] left-[186.7px] w-[26.1px] h-[27.9px] z-[3]"
                  alt=""
                  src="/vector-8.svg"
                />
                <img
                  className="absolute top-[66.3px] left-[248.9px] w-[26.1px] h-[27.9px] z-[3]"
                  alt=""
                  src="/vector-9.svg"
                />
              </div>
              <div className="absolute top-[97.3px] left-[124.5px] text-xl inline-block w-[37px] h-[18.7px] min-w-[37px] whitespace-nowrap z-[4] mq450:text-base">
                $25
              </div>
              <div className="absolute top-[100.5px] left-[226.8px] w-[105.3px] h-[20.7px] text-3xs text-white font-inter">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-olive-100 w-[65.2px] h-[20.7px] z-[2]" />
                <div className="absolute top-[4.9px] left-[7px] font-light inline-block w-[98.3px] h-[15.8px] z-[3]">
                  Add to cart
                </div>
              </div>
              <div className="absolute top-[78.8px] left-[302.1px] text-4xs font-light text-darksalmon inline-block w-[13px] h-[17.7px] min-w-[13px] z-[3]">
                4.5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
