import Location from "../../Assets/image/gallery/location.png"
import Order from "../../Assets/image/gallery/order.png"
import Pay from "../../Assets/image/gallery/pay.png"
import Meal from "../../Assets/image/gallery/meals.png"

const HowItWorks = () => {
  return (
    <section className="py-0 bg-primary-gradient">
    <div className="container">
      <div className="row justify-content-center g-0">
        <div className="col-xl-9">
          <div className="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
            <h5 className="fw-bold text-danger fs-3 fs-lg-5 lh-sm my-6">
              How does it work
            </h5>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3 mb-6">
              <div className="text-center">
                <img
                  className="shadow-icon"
                  src={Location}
                  height={112}
                  alt="..."
                />
                <h5 className="mt-4 fw-bold">Select location</h5>
                <p className="mb-md-0">
                  Choose the location where your food will be delivered.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-6">
              <div className="text-center">
                <img
                  className="shadow-icon"
                  src={Order}
                  height={112}
                  alt="..."
                />
                <h5 className="mt-4 fw-bold">Choose order</h5>
                <p className="mb-md-0">
                  Check over hundreds of menus to pick your favorite food
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-6">
              <div className="text-center">
                <img
                  className="shadow-icon"
                  src={Pay}
                  height={112}
                  alt="..."
                />
                <h5 className="mt-4 fw-bold">Pay advanced</h5>
                <p className="mb-md-0">
                  It's quick, safe, and simple. Select several methods of
                  payment
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-6">
              <div className="text-center">
                <img
                  className="shadow-icon"
                  src={Meal}
                  height={112}
                  alt="..."
                />
                <h5 className="mt-4 fw-bold">Enjoy meals</h5>
                <p className="mb-md-0">
                  Food is made and delivered directly to your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end of .container*/}
  </section>
  )
}

export default HowItWorks