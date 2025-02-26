import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

const StudentAward = () => {
  const achievementSlideObj = [
    {
      studentImg: "StudentAchievement.jpg",
      achievementType: "Student Achievement",
      studentName: "Student 1",
      caption: `Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
              bibendum vitae pellentesque ultricies porttitor.`,
    },
    {
      studentImg: "StudentAchievement.jpg",
      achievementType: "Student Achievement",
      studentName: "Student 1",
      caption: `Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
              bibendum vitae pellentesque ultricies porttitor.`,
    },
    {
      studentImg: "StudentAchievement.jpg",
      achievementType: "Student Achievement",
      studentName: "Student 1",
      caption: `Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
              bibendum vitae pellentesque ultricies porttitor.`,
    },
    {
      studentImg: "StudentAchievement.jpg",
      achievementType: "Student Achievement",
      studentName: "Student 1",
      caption: `Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
              bibendum vitae pellentesque ultricies porttitor.`,
    },
    {
      studentImg: "StudentAchievement.jpg",
      achievementType: "Student Achievement",
      studentName: "Student 1",
      caption: `Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
              bibendum vitae pellentesque ultricies porttitor.`,
    },
    {
      studentImg: "StudentAchievement.jpg",
      achievementType: "Student Achievement",
      studentName: "Student 1",
      caption: `Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
              bibendum vitae pellentesque ultricies porttitor.`,
    },
    {
      studentImg: "StudentAchievement.jpg",
      achievementType: "Student Achievement",
      studentName: "Student 1",
      caption: `Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
              bibendum vitae pellentesque ultricies porttitor.`,
    },
  ];
  const awardSlideObj = [
    {
      awardImg: "StudentAchievement.jpg",
      awardName: "Award 1",
      caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
            in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
    },
    {
      awardImg: "StudentAchievement.jpg",
      awardName: "Award 2",
      caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
            in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
    },
    {
      awardImg: "StudentAchievement.jpg",
      awardName: "Award 3",
      caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
            in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
    },
    {
      awardImg: "StudentAchievement.jpg",
      awardName: "Award 4",
      caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
            in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
    },
    {
      awardImg: "StudentAchievement.jpg",
      awardName: "Award 5",
      caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
            in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
    },
    {
      awardImg: "StudentAchievement.jpg",
      awardName: "Award 6",
      caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
            in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
    },
    {
      awardImg: "StudentAchievement.jpg",
      awardName: "Award 7",
      caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
            in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
    },
  ];

  const awardSlides = awardSlideObj.map((data) => {
    return (
      <SwiperSlide key={data.awardName} >
        <div className="relative h-full  bg-[#F8FEFF] ">
          <div className="absolute  top-0 left-0 inset-0 flex  ">
            <img
              src={`/StudentAward/${data.awardImg}`}
              className="object-cover h-full w-3/5 lg:w-1/2  ml-auto"
              alt={data.awardName}
            />
            <div className=" bg-gradient-to-r  from-[#F8FEFF] absolute left-[40%] lg:left-[50%]  to-30% to-transparent h-full w-full "></div>
          </div>
          <div className="relative py-12 lg:py-20 xl:py-24  px-6 xl:px-14 space-y-2">
            <div className="text-2xl xl:text-3xl   font-semibold">{data.awardName}</div>
            <div className="text-slate-600 text-xs lg:text-sm 2xl:text-base w-[70%]">
              {data.caption}
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  const achivementSlides = achievementSlideObj.map((data) => {
    return (
      <SwiperSlide key={data.studentName}>
        <div className="relative h-full  bg-[#F8FEFF]">
          <div className="absolute  top-0 left-0 inset-0 flex  ">
          <div className="absolute bg-gradient-to-b  from-transparent via-transparent to-[#000000bf] h-full w-full "></div>

            <img
              src={`/StudentAward/${data.studentImg}`}
              className="object-cover h-full w-full"
              alt={data.studentName}
            />
          </div>
          <div className="relative pt-20 lg:pt-32 xl:pt-40 2xl:pt-52 pb-6  px-6 xl:px-8 space-y-2">
            <div className="text-xs xl:text-sm bg-white rounded-full w-max px-2 py-px">
              {data.achievementType}
            </div>
            <div className="text-white text-xs  lg:text-sm 2xl:text-base ">
              {data.caption}
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className=" gap-4 flex flex-col md:flex-row">
      {/* left section */}

      <Swiper
        className=" h-auto w-full lg:w-[48%] border rounded-lg xl:rounded-xl"
        // install Swiper modules
        modules={[Navigation, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
          disabledClass: "swiper-button-disabled",
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {awardSlides}
        <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
        </div>
      </Swiper>

      {/* right section */}

      <Swiper
        className=" h-auto w-full lg:w-[48%] border rounded-lg xl:rounded-xl "
        // install Swiper modules
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
          disabledClass: "swiper-button-disabled",
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {achivementSlides}
      </Swiper>
    </div>
  );
};

export default StudentAward;
