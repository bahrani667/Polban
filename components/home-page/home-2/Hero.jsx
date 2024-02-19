import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-150 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <h1 className="hero-heading fw-bold tx-dark mt-25">
                Teknik Elektro
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
                Jurusan Teknik Elektro merupakan salah satu jurusan unggulan di Politeknik Negeri Bandung dengan visi menjadi pusat pendidikan vokasi kelas dunia di bidang teknik elektro. Jurusan ini telah banyak melahirkan alumni-alumni hebat yang saat ini menjadi insinyur profesional di berbagai perusahaan ternama.
              </p>
              <Link
                href="https://polban.ac.id"
                className="btn-fourteen fw-500 tran3s"
              >
                JOIN
              </Link>
            </div>
          </div>
          {/* End .container */}

          <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/ils_05.svg"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Hero;
