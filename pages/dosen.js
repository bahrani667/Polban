import Link from "next/link";
import Seo from "../components/common/Seo";
import CopyrightFooter2 from "../components/footer/CopyrightFooter2";
import Footer2 from "../components/footer/Footer2";
import NewsLetter from "../components/footer/NewsLetter";
import Header2 from "../components/header/Header2";
import Team1 from "../components/home-page/home-2/Dosen";

const dosen = () => {
  return (
    <>
      <Seo pageTitle="dosen" />
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
    <div className="hero-banner-seven p-30">
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <h2 className="main-title fw-500 tx-dark">Daftar Dosen</h2>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* /.container */}
      </div>
      {/* 
        =============================================
        dosen Section One
        ============================================== 
        */}
      <div className="dosen-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
          <Team1 />
          </div>
    </div>
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
  );
};

export default dosen;
