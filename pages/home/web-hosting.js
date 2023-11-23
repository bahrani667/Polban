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
import Pricing from "../../components/home-page/home-2/Pricing";
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
      <div className="partner-section-four position-relative pt-100 sm-pt-70">
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
				Pricing Section Four
			============================================== 
			*/}
        <div className="pricing-section-four pt-170 lg-pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 col-md-9 m-auto">
                <div
                  className="title-style-seven text-center"
                  data-aos="fade-up"
                >
                  <h2 className="main-title fw-bold tx-dark">
                    Solo, Agency or Team? We’ve got you
                    <span className="position-relative d-inline-block">
                      covered
                      <img src="/images/shape/shape_96.svg" alt="shape" />
                    </span>
                  </h2>
                </div>
                {/* /.title-style-seven */}
              </div>
            </div>
          </div>
          {/* End .container */}

          <div className="wrapper pricing-table-area-four m-auto pt-80 lg-pt-30">
            <div className="row">
              <Pricing />
            </div>
          </div>
          {/* /.pricing-table-area-four */}
          <div className="wrapper position-relative">
            <CourseFilter />
            {/* /.slider-wrapper */}
          </div>
          {/* /.wrapper */}

          <div className="container">
            <div className="text-center mt-100 lg-mt-50 " data-aos="fade-up">
              <div className="d-inline-block consult-text fs-18 fw-500 tx-dark">
                Not sure which website hosting plan is right for you? We can
                help.
                <a href="#" className="fw-normal text-decoration-underline">
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.pricing-section-four */}
        {/* 
			=============================================
				Feature Section Twenty Three
			============================================== 
			*/}
        <div className="fancy-feature-twentyThree mt-180 lg-mt-100">
          <div className="container">
            <div
              className="title-style-seven text-center pb-20"
              data-aos="fade-up"
            >
              <h2 className="main-title fw-bold tx-dark">
                All Included
                <span className="position-relative d-inline-block">
                  Plan
                  <img src="/images/shape/shape_97.svg" alt="illustration" />
                </span>
              </h2>
            </div>
            {/* /.title-style-seven */}
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
