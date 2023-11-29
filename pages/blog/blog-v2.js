import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Pagination from "../../components/blog/Pagination";
import SearchBox from "../../components/blog/SearchBox";
import Category from "../../components/blog/Category";
import RecentPost from "../../components/blog/RecentPost";
import BannerPost from "../../components/blog/BannerPost";
import Blog2 from "../../components/blog/Blog2";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer2 from "../../components/footer/Footer2";
import NewsLetter from "../../components/footer/NewsLetter";
import Header2 from "../../components/header/Header2";
import FancyBlock from "../../components/home-page/home-2/FancyBlock";
import Faq from "../../components/home-page/home-2/Faq";
import Hero from "../../components/home-page/home-2/Hero";
import IncludedPlan from "../../components/home-page/home-2/IncludedPlan";
import Partner from "../../components/home-page/home-2/Partner";
import CourseFilter from "../../components/home-page/home-3/CourseFilter";

const GridWithSidebar = () => {
  return (
    <>
      <Seo pageTitle="Grid With Sidebar" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header2 />

      {/* 
			=============================================
			Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Berita
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Check our inside news &amp; update.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <div className="row">
                    <Blog2 />
                  </div>
                </div>
                {/* /.blog-meta-wrapper */}
                <div className="page-pagination-one pt-15">
                  <Pagination />
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox />
                  </div>
                  {/* /.blog-sidebar-search */}

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <Category />
                  </div>
                  {/* /.blog-sidebar-category */}

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div>
                  {/* /.sidebar-recent-news */}

                  <BannerPost />
                  {/* /.sidebar-banner-add */}
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default GridWithSidebar;
