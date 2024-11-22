/* eslint-disable no-unused-vars */
import CheeseBurger from "../../Assets/image/gallery/cheese-burger.png"
import Caprese_Salad from "../../Assets/image/Caprese-Salad.jpg"
import Calamari_Fritti from "../../Assets/image/calamari-fritti.jpg" 
import Spaghetti_Carbonara from "../../Assets/image/spaghetti-carbonara.jpg"
import Alfredo from "../../Assets/image/to-die-for-fettuccine-alfredo3.jpg"
import Lasagna from "../../Assets/image/Lasagna.jpg"
import Chicken_Parmesan from "../../Assets/image/Chicken-Parmesan.jpg"
import Osco_Buco from "../../Assets/image/Osco-Buco.jpg"
import Salmon from "../../Assets/image/Salmon.jpg"
import Tiramisu from "../../Assets/image/tiramisu.jpg"
import Panna_Cotta from "../../Assets/image/Panna_Cotta.jpg"
import Canoli from "../../Assets/image/canoli.jpg"
import Header from "../components/Header";
import Footer from "../components/Footer";
const MenuPage = () => {
  const menuSections = [
    {
      title: "Appetizers",
      items: [
        { name: "CheeseBurger", description: "Grilled Burger with rich beef patty and filled with cheese", price: "$8.99", image: CheeseBurger+"?height=200&width=300" },
        { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and sweet basil drizzled with a balsamic glaze", price: "$10.99", image: Caprese_Salad+"?height=200&width=300" },
        { name: "Calamari Fritti", description: "Crispy fried calamari served with marinara sauce", price: "$12.99", image: Calamari_Fritti+"?height=200&width=300" },
      ]
    },
    {
      title: "Pasta",
      items: [
        { name: "Spaghetti Carbonara", description: "Spaghetti with a creamy sauce of eggs, cheese, pancetta, and black pepper", price: "$16.99", image: Spaghetti_Carbonara+"?height=200&width=300" },
        { name: "Fettuccine Alfredo", description: "Fettuccine tossed with a rich, creamy Parmesan cheese sauce", price: "$15.99", image: Alfredo+"?height=200&width=300" },
        { name: "Lasagna", description: "Layers of pasta, ricotta cheese, and our homemade meat sauce", price: "$18.99", image: Lasagna+"?height=200&width=300" },
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Chicken Parmesan", description: "Breaded chicken breast topped with marinara sauce and melted mozzarella", price: "$19.99", image: Chicken_Parmesan+"?height=200&width=300" },
        { name: "Osso Buco", description: "Braised veal shanks with vegetables, white wine, and broth", price: "$24.99", image: Osco_Buco+"?height=200&width=300" },
        { name: "Grilled Salmon", description: "Fresh salmon fillet grilled and served with lemon butter sauce", price: "$22.99", image: Salmon+"?height=200&width=300" },
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Tiramisu", description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream", price: "$8.99", image: Tiramisu+"?height=200&width=300" },
        { name: "Panna Cotta", description: "Silky smooth Italian custard topped with fresh berries", price: "$7.99", image: Panna_Cotta+"?height=200&width=300" },
        { name: "Cannoli", description: "Crispy pastry shells filled with sweet ricotta cream and chocolate chips", price: "$6.99", image: Canoli+"?height=200&width=300" },
      ]
    }
  ];

  return (
   <>
   <Header />
    <div className="menu-page">
      {/* Hero Section */}
      <div className=" text-white py-5 m-5">
        <div className="container-fluid">
          <h1 className="display-4 text-center">Our Menu</h1>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {menuSections.map((section, index) => (
              <div key={index} className="mb-5">
                <h2 className="text-center mb-4">{section.title}</h2>
                <div className="row">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100">
                        <img src={item.image} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="card-title mb-0">{item.name}</h5>
                            <span className="font-weight-bold">{item.price}</span>
                          </div>
                          <p className="card-text">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-fluid text-center mb-5">
        <h2 className="mb-4">Ready to Order?</h2>
        <p className="lead mb-4">Join us for an unforgettable Italian dining experience.</p>
        <a href="tel:+1234567890" className="btn btn-primary btn-lg">Call for Reservations</a>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MenuPage;

