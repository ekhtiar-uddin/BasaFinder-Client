"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import "./testimonials.css";
import { reviews } from "./utils";

const Testimonials = () => {
  return (
    <section className="testimonial-container ">
      <div className="title">
        <h2 className="mb-3 ">Happy Renters</h2>
        <p className="mb-10 text-gray-500 text-center">
          Discover authentic testimonials from satisfied residents who found
          their perfect home. Read real stories of comfort, community, and
          happiness!
        </p>
      </div>

      <div className="slider-container ">
        <blockquote>
          <Image
            src="/blockquote.svg"
            alt=""
            width={150}
            height={150}
            className="top-quote quote"
          />
          <Image
            src="/blockquote.svg"
            alt=""
            width={150}
            height={150}
            className="bottom-quote quote"
          />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide className="" key={review.id}>
              <Image
                src={review.image}
                alt=""
                width={150}
                height={150}
                className="review-img"
              />

              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
