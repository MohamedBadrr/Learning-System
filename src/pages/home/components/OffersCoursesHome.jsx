import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../../src/index.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
<FaCartShopping />;

const OffersCoursesHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on large screens
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        arrows: true, // Medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        arrows: true,
        breakpoint: 768,
        // Small screens
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="my-[30px]">
          <div className="element-center flex-col my-[30px]">
            <h1 className="font-bold text-[2.3rem] md:text-[2.9rem] mb-[15px] text-mainColor">
              أحدث العروض التي نقدمها
            </h1>
            <p className=" text-center w-75 md:w-[50%] font-semibold text-[1.1rem] md:text-[1.5rem] mb-[15px] ">
              هذه مجموعة من العروض التي لدينا و التي تتحدث باسمترار دائما تابعنا
              كل يوم للحصول علي عروض اروع
            </p>
          </div>

          <Slider {...settings}>
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-full mb-[30px]"
              >
                <div className="flex flex-col items-center justify-center w-[18rem] min-h-[440px] border-[1px] border-gray-700 rounded-lg mx-auto">
                  <img
                    src="/src/assets/images/AI_spesialCourse.jpg"
                    className="rounded-tl-[0.5rem] rounded-tr-[0.5rem]"
                    style={{
                      height: "312px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="course"
                  />
                  <h1 className="px-[10px] mt-[5px] mb-[10px] font-bold text-center">
                    دورة علم البيانات و الذكاء الاصطناعي
                  </h1>
                  <p className="px-[10px] text-[15px] text-center">
                    الذكاء الاصطناعي يلعب دورا بارزا ف تحويل العالم و شكل
                    المستقبل
                  </p>
                  <div className="bg-gray-400 mb-[10px] mt-[5px] mx-auto h-[1px] w-[90%]"></div>
                  <div className="px-[20px] flex items-center justify-between w-full pb-[10px]">
                    <p>
                      <Link
                        to={""}
                        className="flex flex-row items-center justify-center font-bold text-mainColor"
                      >
                        <FaCartShopping className="mx-[5px]" />
                        اضف الي العربة
                      </Link>
                    </p>
                    <p className="font-bold text-right flex flex-row-reverse gap-[4px]">
                      <span>450</span> ج.م
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mx-auto flex justify-center items-center mt-[80px]">
          <button className="flex items-center justify-center text-mainColor px-[70px] h-[2.5rem] rounded-[.37rem] bg-white font-semibold border-[1.5px] border-mainColor ">
            <Link>عرض المزيد</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OffersCoursesHome;
