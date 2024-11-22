import url from '../../Assets/image/gallery/cta-two-bg.png'
const Cta2 = () => {
  return (
    <section className="py-0">
      <div
        className="bg-holder"
        style={{
          backgroundImage:`url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      {/*/.bg-holder*/}
      <div className="container">
        <div className="row flex-center">
          <div className="col-xxl-9 py-7 text-center">
            <h1 className="fw-bold mb-4 text-white fs-6">
              Are you ready to order <br />
              with the best deals?{" "}
            </h1>
            <a className="btn btn-danger" href="#">
              {" "}
              PROCEED TO ORDER
              <i className="fas fa-chevron-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cta2