const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80 wow fadeInUp">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1534713934707!2d107.56900889678953!3d-6.872207399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e420abc30acf%3A0x10569255865460a5!2sPoliteknik%20Negeri%20Bandung!5e0!3m2!1sid!2sid!4v1705300110374!5m2!1sid!2sid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
