import foodWorld from "../../Assets/image/gallery/food-world.png"
import foodWorldLogo from "../../Assets/image/gallery/food-world-logo.png"
import pizzaHub from "../../Assets/image/gallery/pizza-hub.png"
import pizzaHubLogo from "../../Assets/image/gallery/pizzahub-logo.png"
import donutHut from "../../Assets/image/gallery/donuts-hut.png"
import donutHutLogo from "../../Assets/image/gallery/donuts-hut-logo.png"
import donutHut2 from "../../Assets/image/gallery/donuthut.png"
import donutHut2Logo from "../../Assets/image/gallery/donut-hut-logo.png"
import rubeyTuesday from "../../Assets/image/gallery/ruby-tuesday.png"
import rubeyTuesdayLogo from "../../Assets/image/gallery/ruby-tuesday-logo.png"
import kFC1 from "../../Assets/image/gallery/kuakata.png"
import kFC1Logo from "../../Assets/image/gallery/kuakata-logo.png"
import redsquare from "../../Assets/image/gallery/red-square.png"
import redsquareLogo from "../../Assets/image/gallery/red-square-logo.png"
import tacoBell from "../../Assets/image/gallery/taco-bell.png"
import tacoBellLogo from "../../Assets/image/gallery/taco-bell-logo.png"

const FeaturedRestraunt = () => {
  return (
    <section id="testimonial">
    <div className="container">
      <div className="row h-100">
        <div className="col-lg-7 mx-auto text-center mb-6">
          <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
            Featured Restaurants
          </h5>
        </div>
      </div>
      <div className="row gx-2">
        <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
          <div className="card card-span h-100 text-white rounded-3">
            <img
              className="img-fluid rounded-3 h-100"
              src={foodWorld}
              alt="..."
            />
            <div className="card-img-overlay ps-0">
              <span className="badge bg-danger p-2 ms-3">
                <i className="fas fa-tag me-2 fs-0" />
                <span className="fs-0">20% off</span>
              </span>
              <span className="badge bg-primary ms-2 me-1 p-2">
                <i className="fas fa-clock me-1 fs-0" />
                <span className="fs-0">Fast</span>
              </span>
            </div>
            <div className="card-body ps-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid"
                  src={foodWorldLogo}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <h5 className="mb-0 fw-bold text-1000">Food world</h5>
                  <span className="text-primary fs--1 me-1">
                    <i className="fas fa-star" />
                  </span>
                  <span className="mb-0 text-primary">46</span>
                </div>
              </div>
              <span className="badge bg-soft-danger p-2">
                <span className="fw-bold fs-1 text-danger">Opens Tomorrow</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
          <div className="card card-span h-100 text-white rounded-3">
            <img
              className="img-fluid rounded-3 h-100"
              src={pizzaHub}
              alt="..."
            />
            <div className="card-img-overlay ps-0">
              <span className="badge bg-danger p-2 ms-3">
                <i className="fas fa-tag me-2 fs-0" />
                <span className="fs-0">10% off</span>
              </span>
              <span className="badge bg-primary ms-2 me-1 p-2">
                <i className="fas fa-clock me-1 fs-0" />
                <span className="fs-0">Fast</span>
              </span>
            </div>
            <div className="card-body ps-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid"
                  src={pizzaHubLogo}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <h5 className="mb-0 fw-bold text-1000">Pizza hub</h5>
                  <span className="text-primary fs--1 me-1">
                    <i className="fas fa-star" />
                  </span>
                  <span className="mb-0 text-primary">40</span>
                </div>
              </div>
              <span className="badge bg-soft-danger p-2">
                <span className="fw-bold fs-1 text-danger">Opens Tomorrow</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
          <div className="card card-span h-100 text-white rounded-3">
            <img
              className="img-fluid rounded-3 h-100"
              src={donutHut}
              alt="..."
            />
            <div className="card-img-overlay ps-0">
              <span className="badge bg-danger p-2 ms-3">
                <i className="fas fa-tag me-2 fs-0" />
                <span className="fs-0">15% off</span>
              </span>
              <span className="badge bg-primary ms-2 me-1 p-2">
                <i className="fas fa-clock me-1 fs-0" />
                <span className="fs-0">Fast</span>
              </span>
            </div>
            <div className="card-body ps-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid"
                  src={donutHutLogo}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <h5 className="mb-0 fw-bold text-1000">Donuts hut</h5>
                  <span className="text-primary fs--1 me-1">
                    <i className="fas fa-star" />
                  </span>
                  <span className="mb-0 text-primary">20</span>
                </div>
              </div>
              <span className="badge bg-soft-success p-2">
                <span className="fw-bold fs-1 text-success">Open Now</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
          <div className="card card-span h-100 text-white rounded-3">
            <img
              className="img-fluid rounded-3 h-100"
              src={donutHut2}
              alt="..."
            />
            <div className="card-img-overlay ps-0">
              <span className="badge bg-danger p-2 ms-3">
                <i className="fas fa-tag me-2 fs-0" />
                <span className="fs-0">15% off</span>
              </span>
              <span className="badge bg-primary ms-2 me-1 p-2">
                <i className="fas fa-clock me-1 fs-0" />
                <span className="fs-0">Fast</span>
              </span>
            </div>
            <div className="card-body ps-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid"
                  src={donutHut2Logo}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <h5 className="mb-0 fw-bold text-1000">Donuts hut</h5>
                  <span className="text-primary fs--1 me-1">
                    <i className="fas fa-star" />
                  </span>
                  <span className="mb-0 text-primary">50</span>
                </div>
              </div>
              <span className="badge bg-soft-success p-2">
                <span className="fw-bold fs-1 text-success">Open Now</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
          <div className="card card-span h-100 text-white rounded-3">
            <img
              className="img-fluid rounded-3 h-100"
              src={rubeyTuesday}
              alt="..."
            />
            <div className="card-img-overlay ps-0">
              <span className="badge bg-danger p-2 ms-3">
                <i className="fas fa-tag me-2 fs-0" />
                <span className="fs-0">10% off</span>
              </span>
              <span className="badge bg-primary ms-2 me-1 p-2">
                <i className="fas fa-clock me-1 fs-0" />
                <span className="fs-0">Fast</span>
              </span>
            </div>
            <div className="card-body ps-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid"
                  src={rubeyTuesdayLogo}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <h5 className="mb-0 fw-bold text-1000">Ruby tuesday</h5>
                  <span className="text-primary fs--1 me-1">
                    <i className="fas fa-star" />
                  </span>
                  <span className="mb-0 text-primary">50</span>
                </div>
              </div>
              <span className="badge bg-soft-success p-2">
                <span className="fw-bold fs-1 text-success">Open Now</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
          <div className="card card-span h-100 text-white rounded-3">
            <img
              className="img-fluid rounded-3 h-100"
              src={kFC1}
              alt="..."
            />
            <div className="card-img-overlay ps-0">
              <span className="badge bg-danger p-2 ms-3">
                <i className="fas fa-tag me-2 fs-0" />
                <span className="fs-0">10% off</span>
              </span>
              <span className="badge bg-primary ms-2 me-1 p-2">
                <i className="fas fa-clock me-1 fs-0" />
                <span className="fs-0">Fast</span>
              </span>
            </div>
            <div className="card-body ps-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid"
                  src={kFC1Logo}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <h5 className="mb-0 fw-bold text-1000">
                    Kuakata Fried Chicken
                  </h5>
                  <span className="text-primary fs--1 me-1">
                    <i className="fas fa-star" />
                  </span>
                  <span className="mb-0 text-primary">50</span>
                </div>
              </div>
              <span className="badge bg-soft-success p-2">
                <span className="fw-bold fs-1 text-success">Open Now</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
          <div className="card card-span h-100 text-white rounded-3">
            <img
              className="img-fluid rounded-3 h-100"
              src={redsquare}
              alt="..."
            />
            <div className="card-img-overlay ps-0">
              <span className="badge bg-danger p-2 ms-3">
                <i className="fas fa-tag me-2 fs-0" />
                <span className="fs-0">10% off</span>
              </span>
              <span className="badge bg-primary ms-2 me-1 p-2">
                <i className="fas fa-clock me-1 fs-0" />
                <span className="fs-0">Fast</span>
              </span>
            </div>
            <div className="card-body ps-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid"
                  src={redsquareLogo}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <h5 className="mb-0 fw-bold text-1000">
                    Kuakata Fried Chicken
                  </h5>
                  <span className="text-primary fs--1 me-1">
                    <i className="fas fa-star" />
                  </span>
                  <span className="mb-0 text-primary">50</span>
                </div>
              </div>
              <span className="badge bg-soft-success p-2">
                <span className="fw-bold fs-1 text-success">Open Now</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
          <div className="card card-span h-100 text-white rounded-3">
            <img
              className="img-fluid rounded-3 h-100"
              src={tacoBell}
              alt="..."
            />
            <div className="card-img-overlay ps-0">
              <span className="badge bg-danger p-2 ms-3">
                <i className="fas fa-tag me-2 fs-0" />
                <span className="fs-0">10% off</span>
              </span>
              <span className="badge bg-primary ms-2 me-1 p-2">
                <i className="fas fa-clock me-1 fs-0" />
                <span className="fs-0">Fast</span>
              </span>
            </div>
            <div className="card-body ps-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid"
                  src={tacoBellLogo}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <h5 className="mb-0 fw-bold text-1000">Taco bell</h5>
                  <span className="text-primary fs--1 me-1">
                    <i className="fas fa-star" />
                  </span>
                  <span className="mb-0 text-primary">50</span>
                </div>
              </div>
              <span className="badge bg-soft-success p-2">
                <span className="fw-bold fs-1 text-success">Open Now</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          {" "}
          <a className="btn btn-lg btn-primary" href="#!">
            View All <i className="fas fa-chevron-right ms-2"> </i>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturedRestraunt