import { GUEST_LIST } from "./constant";
import React from "react";
import Slider from "react-slick";
function GuestList() {
  const settingSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="text-center px-5"
      style={{ backgroundColor: "#f5f5f5", padding: "100px 0" }}
    >
      <div className="container">
        <h3
          style={{
            fontSize: "40px",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          KHÁCH HÀNG
        </h3>
        <p
          style={{
            width: "80%",
            margin: "20px auto 0",
          }}
        >
          Trải qua nhiều năm làm việc, chúng tôi đã hợp tác với rất nhiều doanh
          nghiệp, cơ quan giáo dục lớn và nổi tiếng trên toàn lãnh thổ Việt Nam
          và quốc tế. Tất cả những đối tác từ trong nước tới nước ngoài đều có
          những phản hồi tích cực về giải pháp và phần mềm của chúng tôi.
        </p>
        <Slider className="mt-5" {...settingSlider}>
          {GUEST_LIST.map(({ id, src }) => (
            <div key={id} className="d-flex justify-content-center ">
              <div className="guest-box-list">
                <img src={src} alt="guest-list" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default GuestList;
