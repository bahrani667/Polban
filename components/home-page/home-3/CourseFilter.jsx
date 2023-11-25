import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const courseData = [
  {
    id: 1,
    imgSrc: "/images/media/img_63.jpg",
    instructor: "Rashed Ka.",
    duration: "53m",
    title: "Nama Dosen",
    rating: 4,
    price: 17.949,
    discountedPrice: 29.99,
    tags: ["graphic", "it", "language", "coding"],
  },
  {
    id: 2,
    imgSrc: "/images/media/img_64.jpg",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Nama Dosen",
    rating: 4,
    price: 13,
    discountedPrice: 19.299,
    tags: ["art", "marketing", "it", "coding"],
  },
  {
    id: 3,
    imgSrc: "/images/media/img_65.jpg",
    instructor: "Rashed Ka.",
    duration: "53m",
    title: "Nama Dosen",
    rating: 4,
    ratingsCount: 310,
    price: 17.99,
    discountedPrice: 29.99,
    tags: ["coding", "it", "language", "graphic", "art"],
  },
  {
    id: 4,
    imgSrc: "/images/media/img_66.jpg",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Nama Dosen",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["graphic", "art", "marketing", "language"],
  },
  {
    id: 5,
    imgSrc: "/images/media/img_64.jpg",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Nama Dosen",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["language", "marketing", "graphic"],
  },
  {
    id: 6,
    imgSrc: "/images/media/img_65.jpg",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Nama Dosen",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["art", "marketing", "coding", "it"],
  },
];

const CourseFilter = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? courseData
      : courseData.filter((item) => item.tags.includes(filter));

  var settings = {
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <ul
        className="nav nav-tabs border-0 mb-30 lg-mb-80 md-mb-30"
        role="tablist"
        data-aos="fade-up"
      >
        <ul className="style-none text-center isotop-menu-wrapper d-flex flex-wrap">
          <li className="nav-item">
            <button
              className={filter === "*" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("*")}
            >
              All
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "graphic" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("graphic")}
            >
              Dosen
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "it" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("it")}
            >
              Berita
            </button>
          </li>
        </ul>
      </ul>
      {/* End ul */}
      <div className="slider-wrapper">
        <div
          className="tab-content position-relative zn2 course_slider_one"
          data-aos="fade-up"
        >
          <Slider {...settings} arrows={false}>
            {filteredItems.map((course) => (
              <div className="item" key={course.id}>
                <div className="card-style-twenty tran3s">
                  <div className="img-meta">
                    <Image
                      width={315}
                      height={222}
                      src={course.imgSrc}
                      alt="media"
                      className="w-100"
                    />
                  </div>
                  {/* /.img-meta */}
                  <div className="course-data">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="course-by fs-17 tx-dark opacity-75">
                        {course.instructor}
                      </div>
                      <div className="course-duration fs-17 tx-dark">
                        {course.duration}
                      </div>
                    </div>
                    <a href="#" className="course-title fw-500">
                      {course.title}
                    </a>
                  </div>
                  {/* /.course-data */}
                </div>
                {/* /.card-style-twenty */}
              </div>
            ))}
          </Slider>
        </div>
        {/* /.tab-content */}
      </div>
    </>
  );
};

export default CourseFilter;
