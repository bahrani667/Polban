import { useState } from "react";
import items from "../../data/portfolio";
import "photoswipe/dist/photoswipe.css";

const PortfolioGallery1 = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(0, 8)
      : items.slice(0, 8).filter((item) => item.category.includes(filter));

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
  
      </div>
    </div>
  );
};

export default PortfolioGallery1;
