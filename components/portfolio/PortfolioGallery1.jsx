import { useState } from "react";
import items from "../../data/dosen";
import Link from "next/link";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";

const PortfolioGallery1 = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(0, 100)
      : items.slice(0, 100).filter((item) => item.tag.includes(filter));

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
  };

  return (
    <div className="portfolio-gallery-three pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={filter === "D3 Teknik Elektro" ? "is-checked" : ""}
            onClick={() => setFilter("D3 Teknik Elektro")}
          >
            D3 Teknik Elektro
          </li>
          <li
            className={filter === "D3 Teknik Listrik" ? "is-checked" : ""}
            onClick={() => setFilter("D3 Teknik Listrik")}
          >
            D3 Teknik Listrik
          </li>
          <li
            className={filter === "D3 Teknik Telekomunikasi" ? "is-checked" : ""}
            onClick={() => setFilter("D3 Teknik Telekomunikasi")}
          >
            D3 Teknik Telekomunikasi
          </li>
          <li
            className={filter === "D4 Teknik Elektronika" ? "is-checked" : ""}
            onClick={() => setFilter("D4 Teknik Elektronika")}
          >
            D4 Teknik Elektronika
          </li>
          <li
            className={filter === "D4 Teknik Otomasi Industri" ? "is-checked" : ""}
            onClick={() => setFilter("D4 Teknik Otomasi Industri")}
          >
            D4 Teknik Otomasi Industri
          </li>
          <li
            className={filter === "D4 Teknik Telekomunikasi" ? "is-checked" : ""}
            onClick={() => setFilter("D4 Teknik Telekomunikasi")}
          >
            D4 Teknik Telekomunikasi
          </li>
        </ul>
        <div className="row">
          {filteredItems.map((member) => (
            <div
              key={member.id}
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={`${member.id * 100}`}
            >
              <Link href={`/team/${member.id}`}>
                <div className="team-block-two mt-40">
                  <div className="img-meta position-relative">
                    <Image
                      width={312}
                      height={281}
                      src={member.imageSrc}
                      alt={member.name}
                      className="lazy-img team-img w-100"
                      style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    />
                    <div className="info text-center">
                      <h4 className="tx-dark fs-18 mb-4">{truncateText(member.name, 20)}</h4>
                      <h6 className="tx-dark fs-16 mb-3">{truncateText(member.jurusan, 20)}</h6>
                      <div className="tx-dark opacity-75 fs-14">{truncateText(member.role, 30)}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery1;
