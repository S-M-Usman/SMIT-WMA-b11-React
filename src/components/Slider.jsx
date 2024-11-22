import searchPizza from "../../Assets/image/gallery/search-pizza.png";
import burger from "../../Assets/image/gallery/burger.png";
import noodles from "../../Assets/image/gallery/noodles.png";
import subSandwitch from "../../Assets/image/gallery/sub-sandwich.png";
import chowmein from "../../Assets/image/gallery/chowmein.png";
import steak from "../../Assets/image/gallery/steak.png";


const Slider = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="container">
        <div className="row flex-center mb-6">
          <div className="col-lg-7">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm text-center text-lg-start">
              Search by Food
            </h5>
          </div>
          <div className="col-lg-4 text-lg-end text-center">
            <a className="btn btn-lg text-800 me-2" href="#" role="button">
              VIEW ALL <i className="fas fa-chevron-right ms-2" />
            </a>
          </div>
          <div className="col-lg-auto position-relative">
            <button
              className="carousel-control-prev s-icon-prev carousel-icon"
              type="button"
              data-bs-target="#carouselSearchByFood"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon hover-top-shadow"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next s-icon-next carousel-icon"
              type="button"
              data-bs-target="#carouselSearchByFood"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon hover-top-shadow"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-12">
            <div
              className="carousel slide"
              id="carouselSearchByFood"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <div className="row h-100 align-items-center">
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={searchPizza}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            pizza
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={burger}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Burger
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={noodles}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Noodles
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={subSandwitch}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Sub-sandwiches
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={chowmein}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Chowmein
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={steak}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Steak
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={5000}>
                  <div className="row h-100 align-items-center">
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={searchPizza}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            pizza
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={burger}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Burger
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={noodles}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Noodles
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={subSandwitch}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Sub-sandwiches
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={chowmein}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Chowmein
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={steak}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Steak
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                  <div className="row h-100 align-items-center">
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={searchPizza}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            pizza
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={burger}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Burger
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={noodles}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Noodles
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={subSandwitch}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Sub-sandwiches
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={chowmein}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Chowmein
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={steak}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Steak
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row h-100 align-items-center">
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={searchPizza}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            pizza
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={burger}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Burger
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={noodles}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Noodles
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={subSandwitch}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Sub-sandwiches
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={chowmein}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Chowmein
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div className="card card-span h-100 rounded-circle">
                        <img
                          className="img-fluid rounded-circle h-100"
                          src={steak}
                          alt="..."
                        />
                        <div className="card-body ps-0">
                          <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                            Steak
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of .container*/}
    </section>
  );
};

export default Slider;
