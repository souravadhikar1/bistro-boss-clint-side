import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Sectiontitle/SectionTitle";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// !Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// !import required modules
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subheading={"What Our Clint Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24">
              <p className="items-center flex flex-col my-16 mx-24">
                <div className="w-40">
                  <img
                    className=""
                    src="https://www.pngall.com/wp-content/uploads/4/Quotation-Symbol-PNG.png"
                    alt=""
                  />
                </div>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
              </p>
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review?.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
