import Link from "next/link";
import {
  menuItems,
  pagesItems,
  blogItems,
} from "../../data/menu";

import { useRouter } from "next/router";


const MainMenu = () => {
  const router = useRouter();


  

  const isActive = (link) => {
    return router.pathname.replace('/[id]', '') === link.replace(/\/\d+$/, '');
  };


  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/Polban.png" alt="" width={60} />
              </Link>
            </div>
          </li>
          {/* End li */}
          <li
            className={
              router.pathname === "/" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/" role="button" className="nav-link">
              Home
            </Link>
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item  dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={(pagesItems.some(menu=>menu.subItems.some(elm=>isActive(elm.link))) || isActive('#') || isActive('#') ) ? 'nav-link dropdown-toggle active-menu' : 'nav-link dropdown-toggle'}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Jurusan
            </a>
            <ul className="dropdown-menu  ">
              <li>
                <Link href="#" className={isActive("#") ? 'dropdown-item active-menu' : 'dropdown-item'} >
                  <span>D-3 Teknik Elektro</span>
                </Link>
              </li>
              <li>
                <Link href="#" className={isActive("#") ? 'dropdown-item active-menu' : 'dropdown-item'} >
                  <span>D-3 Teknik Listrik</span>
                </Link>
              </li>
              <li>
                <Link href="#" className={isActive("#") ? 'dropdown-item active-menu' : 'dropdown-item'} >
                  <span>D-3 Teknik Telekomunikasi</span>
                </Link>
              </li>
              <li>
                <Link href="#" className={isActive("#") ? 'dropdown-item active-menu' : 'dropdown-item'} >
                  <span>D-4 Teknik Elektronika</span>
                </Link>
              </li>
              <li>
                <Link href="#" className={isActive("#") ? 'dropdown-item active-menu' : 'dropdown-item'}>
                  <span>D-4 Teknik Otomasi Industri</span>
                </Link>
              </li>
              <li>
                <Link href="#" className={isActive("#") ? 'dropdown-item active-menu' : 'dropdown-item'}>
                  <span>D-4 Teknik Telekomunikasi</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (pages) */}
          <li
            className={
              router.pathname === "/dosen" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/dosen" role="button" className="nav-link">
              Dosen
            </Link>
          </li>
          <li
            className={
              router.pathname === "/blog/blog-v2" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/blog/blog-v2" role="button" className="nav-link">
              Berita
            </Link>
          </li>

          <li
            className={
              router.pathname === "/contact" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/contact" role="button" className="nav-link">
              Contact
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
