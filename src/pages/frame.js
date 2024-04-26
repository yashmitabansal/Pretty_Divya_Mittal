import FrameComponent3 from "../components/frame-component3";
import DataAggregator from "../components/data-aggregator";
import ServiceLink from "../components/service-link";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const Frame = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-end justify-start pt-[33.2px] px-0 pb-0 box-border gap-[18px] leading-[normal] tracking-[normal] text-left text-base text-white font-poppins">
      <img
        className="w-[434px] h-[301px] absolute !m-[0] top-[-783px] left-[478.5px]"
        alt=""
      />
      <FrameComponent3 />
      <DataAggregator />
      <div className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[3]" />
      <section className="w-[1125px] flex flex-row items-start justify-end pt-0 px-6 pb-[87px] box-border max-w-full text-center text-45xl text-black font-prata mq800:pb-[57px] mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[22px] max-w-full mq1125:flex-wrap">
          <div className="flex-1 flex flex-col items-end justify-start gap-[4px] max-w-full mq800:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="h-[297.5px] w-[602px] relative max-w-full">
                <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-end justify-start gap-[16.7px] max-w-full h-full">
                  <div className="self-stretch h-[128.8px] relative leading-[75px] inline-block shrink-0 z-[1] mq450:text-5xl mq450:leading-[45px] mq800:text-13xl mq800:leading-[60px]">
                    <span>Y</span>
                    <span className="text-21xl">our</span>
                    <span> B</span>
                    <span className="text-21xl">eauty</span>
                    <span>{` & S`}</span>
                    <span className="text-21xl">uccess</span>
                    <span className="whitespace-pre-wrap"> S</span>
                    <span className="text-21xl">tarts</span>
                    <span> H</span>
                    <span className="text-21xl">ere</span>
                  </div>
                  <div className="w-[552px] flex flex-row items-start justify-start relative max-w-full text-mini font-poppins">
                    <img
                      className="h-[416px] w-[519px] absolute !m-[0] bottom-[-288px] left-[-380px] rounded-tl-none rounded-tr-281xl rounded-b-none object-cover"
                      loading="lazy"
                      alt=""
                      src="/sideviewsmileybridegettingready-1@2x.png"
                    />
                    <div className="h-[152px] flex-1 relative leading-[20px] font-light inline-block max-w-full z-[2]">
                      Your beauty and sucess starts here ... if clients beauty
                      is emhanced then success of our fashion desigmer is also
                      increased
                    </div>
                  </div>
                </div>
                <div className="absolute top-[202.5px] left-[209px] w-[210px] h-[50px] text-xl font-poppins">
                  <div className="absolute top-[8px] left-[0px] leading-[20px] font-light inline-block w-[210px] h-[42px] whitespace-nowrap z-[4] mq450:text-base mq450:leading-[16px]">
                    Learn More
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[37px] w-[168px] h-[42.1px]">
                    <div className="absolute top-[0px] left-[0px] rounded-16xl bg-pink-100 w-[168px] h-[39px] z-[3]" />
                    <img
                      className="absolute top-[20px] left-[129px] w-[21px] h-[22.1px] z-[5]"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
            <img
              className="w-[235px] h-[284px] relative rounded-t-none rounded-b-281xl object-cover"
              loading="lazy"
              alt=""
              src="/youngbeautifulblondegirlcaresfaceskinwithmoisturizerfrontmirror-2@2x.png"
            />
          </div>
          <div className="h-[524.5px] w-[370px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border min-w-[370px] max-w-full mq450:min-w-full mq1125:flex-1">
            <img
              className="self-stretch flex-1 relative rounded-t-281xl rounded-br-[22px] rounded-bl-none max-w-full overflow-hidden max-h-full object-cover mq1125:self-stretch mq1125:w-auto"
              loading="lazy"
              alt=""
              src="/sideviewmakeupartistdoingherjob-1@2x.png"
            />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[26px] pb-[53.4px] box-border max-w-full mq800:pb-5 mq800:box-border mq1125:pb-[23px] mq1125:box-border mq1300:pb-[35px] mq1300:box-border">
        <div className="w-[1429px] flex flex-col items-start justify-start gap-[28px] max-w-full">
          <ServiceLink />
          <FrameComponent2 />
        </div>
      </section>
      <div className="w-[599.6px] h-[64.2px] absolute !m-[0] right-[295.8px] bottom-[-15px] font-light inline-block z-[1]">
        Preety.com-All Rights Reserved
      </div>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Frame;
