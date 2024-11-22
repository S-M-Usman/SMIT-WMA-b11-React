import cheeseBurger from "../../Assets/image/gallery/cheese-burger.png"
import toffesCake from "../../Assets/image/gallery/toffes-cake.png"
import dancake from "../../Assets/image/gallery/dancake.png"
import sandwitch from "../../Assets/image/gallery/crispy-sandwitch.png"
import thaiSoup from "../../Assets/image/gallery/thai-soup.png"
const PopularItems = () => {
  return (
    <section className="py-4 overflow-hidden">
    <div className="container">
      <div className="row h-100">
        <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
          <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Popular items</h5>
        </div>
        <div className="col-12">
          <div
            className="carousel slide"
            id="carouselPopularItems"
            data-bs-touch="false"
            data-bs-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={10000}>
                <div className="row gx-3 h-100 align-items-center">
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={cheeseBurger}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Cheese Burger
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Burger Arena</span>
                        </div>
                        <span className="text-1000 fw-bold">$3.88</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={toffesCake}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Toffe's Cake
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Top Sticks</span>
                        </div>
                        <span className="text-1000 fw-bold">$4.00</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={dancake}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Dancake
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Cake World</span>
                        </div>
                        <span className="text-1000 fw-bold">$1.99</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={sandwitch}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Crispy Sandwitch
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Fastfood Dine</span>
                        </div>
                        <span className="text-1000 fw-bold">$3.00</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={thaiSoup}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Thai Soup
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Foody Man</span>
                        </div>
                        <span className="text-1000 fw-bold">$2.79</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <div className="row gx-3 h-100 align-items-center">
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={cheeseBurger}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Cheese Burger
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Burger Arena</span>
                        </div>
                        <span className="text-1000 fw-bold">$3.88</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={toffesCake}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Toffe's Cake
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Top Sticks</span>
                        </div>
                        <span className="text-1000 fw-bold">$4.00</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={dancake}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Dancake
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Cake World</span>
                        </div>
                        <span className="text-1000 fw-bold">$1.99</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={sandwitch}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Crispy Sandwitch
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Fastfood Dine</span>
                        </div>
                        <span className="text-1000 fw-bold">$3.00</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={thaiSoup}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Thai Soup
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Foody Man</span>
                        </div>
                        <span className="text-1000 fw-bold">$2.79</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={3000}>
                <div className="row gx-3 h-100 align-items-center">
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={cheeseBurger}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Cheese Burger
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Burger Arena</span>
                        </div>
                        <span className="text-1000 fw-bold">$3.88</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={toffesCake}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Toffe's Cake
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Top Sticks</span>
                        </div>
                        <span className="text-1000 fw-bold">$4.00</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={dancake}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Dancake
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Cake World</span>
                        </div>
                        <span className="text-1000 fw-bold">$1.99</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={sandwitch}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Crispy Sandwitch
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Fastfood Dine</span>
                        </div>
                        <span className="text-1000 fw-bold">$3.00</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={thaiSoup}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Thai Soup
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Foody Man</span>
                        </div>
                        <span className="text-1000 fw-bold">$2.79</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row gx-3 h-100 align-items-center">
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={cheeseBurger}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Cheese Burger
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Burger Arena</span>
                        </div>
                        <span className="text-1000 fw-bold">$3.88</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={toffesCake}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Toffe's Cake
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Top Sticks</span>
                        </div>
                        <span className="text-1000 fw-bold">$4.00</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={dancake}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Dancake
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Cake World</span>
                        </div>
                        <span className="text-1000 fw-bold">$1.99</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={sandwitch}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Crispy Sandwitch
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Fastfood Dine</span>
                        </div>
                        <span className="text-1000 fw-bold">$3.00</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                    <div className="card card-span h-100 rounded-3">
                      <img
                        className="img-fluid rounded-3 h-100"
                        src={thaiSoup}
                        alt="..."
                      />
                      <div className="card-body ps-0">
                        <h5 className="fw-bold text-1000 text-truncate mb-1">
                          Thai Soup
                        </h5>
                        <div>
                          <span className="text-warning me-2">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <span className="text-primary">Foody Man</span>
                        </div>
                        <span className="text-1000 fw-bold">$2.79</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        className="btn btn-lg btn-danger"
                        href="#!"
                        role="button"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev carousel-icon"
              type="button"
              data-bs-target="#carouselPopularItems"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon hover-top-shadow"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carousel-icon"
              type="button"
              data-bs-target="#carouselPopularItems"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon hover-top-shadow"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* end of .container*/}
  </section>
  )
}

export default PopularItems