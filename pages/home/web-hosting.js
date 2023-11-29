import Link from "next/link";
import Seo from "../../components/common/Seo";
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

const WebHosting = () => {
  return (
    <>
      <Seo pageTitle="Teknik Telekomunikasi" />

      {/* <!--  =============================================
      Theme Header2 Menu
      ============================================== 	--> */}
      <Header2 />

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <Hero />

      {/* 
			=============================================
				Partner Section Four
			============================================== 
			*/}
      <div className="partner-section-four position-relative pt-20 sm-pt-70">
        <div className="wrapper m-auto">
          <div className="partner_slider_one row">
            <Partner />
          </div>
        </div>
        {/* /.wrapper */}
      </div>
      {/* /.partner-section-four */}
<>
        {/* 
			=============================================
				Feature Section Twenty Three
			============================================== 
			*/}
        <div className="fancy-feature-twentyThree mt-50 lg-mt-100">
          <div className="container">
            <div
              className="title-style-seven text-center pb-20"
              data-aos="fade-up"
            >
              <h2 className="main-title fw-bold tx-dark">
                Daftar Dosen
              </h2>
            </div>
            {/* /.title-style-seven */}
            <div className="row gx-xl-5">
              <CourseFilter />
            </div>
            <div className="row gx-xl-5">
              <IncludedPlan />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-feature-twentyThree */}
        {/* 
			=============================================
				Feature Section Twenty Three
			============================================== 
			*/}
        <div className="fancy-feature-twentyThree mt-35">
          <div className="container">
            <div className="border-top">
              <div className="row gx-xxl-5">
                <FancyBlock />
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-feature-twentyThree */}
        {/* 
			=============================================
				Feature Section Twenty Five
			============================================== 
			*/}
        <div className="fancy-feature-twentyFive mt-170 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 m-auto" data-aos="fade-up">
                <div
                  className="title-style-seven text-center pb-120 lg-pb-50"
                  data-aos="fade-up"
                >
                  <h2 className="main-title fw-bold tx-dark">
                    Got questions? <br /> Well, we&lsquo;ve got
                    <span className="position-relative d-inline-block">
                      answers <img src="/images/shape/shape_99.svg" alt="" />
                    </span>
                  </h2>
                </div>
                {/* /.title-style-seven */}
              </div>
              <div className="col-xl-9 col-lg-10 m-auto " data-aos="fade-up">
                <Faq />

                <div className="text-center  mt-80 lg-mt-50">
                  <h3 className="fw-bold tx-dark mb-30">
                    Didn’t get your answer?
                  </h3>
                  <Link
                    href="/contact"
                    className="btn-fourteen fw-500 tran3s"
                  >
                    Submit your question
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/*
		=====================================================
		Footer
		=====================================================
		*/}
        <div className="footer-style-seven p-30 theme-basic-footer">
          <div className="bg-wrapper position-relative">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-2 footer-intro mb-40">
                  <div className="logo">
                    <Link href="/">
                      <img src="/images/logo/logo_01.png" alt="brand" />
                    </Link>
                  </div>
                </div>
                {/* End .col */}

                <Footer2 />

                <div className="col-xl-4 col-lg-5 mb-30 form-widget">
                  <h5 className="footer-title tx-dark fw-normal">
                    Newslettert
                  </h5>
                  <h6 className="pt-15 pb-20 md-pt-10">Join our newsletter</h6>
                  <NewsLetter />
                  <div className="fs-14 mt-10">
                    We only send interesting and relevant emails.
                  </div>
                </div>
                {/* End .col-xl-4 */}
              </div>
              {/* End .row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.bg-wrapper */}
          <CopyrightFooter2 />
          {/* /.bottom-footer */}
        </div>
        {/* /.footer-style-seven */}
      </>
    </>
  );
};

export default WebHosting;
