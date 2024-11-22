/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import chef from "../../Assets/image/chef.png"
const AboutPage = () => {
  return (
    <>
    <Header />
      <div className="about-page bg-gradient">
      {/* Hero Section */}
      <div className="bg-100 text-white py-5  m-5"> 
        <div className="container">
          <h1 className="display-4 text-center">About Us</h1>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container-fluid mb-5">
        <h2 className="text-center mb-4">Our Story</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p className="lead text-center">
              Founded in 2010, La Bella Vita has been serving authentic Italian cuisine to our community for over a decade. 
              Our passion for fresh ingredients and traditional recipes has made us a favorite among locals and visitors alike.
            </p>
            <p className="text-center">
              We believe in creating a warm and inviting atmosphere where families and friends can come together to enjoy 
              delicious food and create lasting memories.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Chef Section */}
      <div className="bg-light py-5 mb-5">
        <div className="container-fluid">
          <h2 className="text-center mb-4">Meet Our Chef</h2>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={chef} alt="Chef Maria Rossi" className="img-fluid rounded-start" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Maria Rossi</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Head Chef</h6>
                          <p className="card-text">
                            With over 20 years of experience in Italian cuisine, Chef Maria brings the flavors of her 
                            hometown in Tuscany to every dish she creates. Her innovative approach to traditional recipes 
                            has earned La Bella Vita numerous accolades and a loyal following.
                          </p>
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

      {/* Our Cuisine Section */}
      <div className="container-fluid mb-5">
        <h2 className="text-center mb-4">Our Cuisine</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fresh Ingredients</h5>
                <p className="card-text">
                  We source the finest local and imported ingredients to ensure every dish is bursting with flavor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Traditional Recipes</h5>
                <p className="card-text">
                  Our menu features time-honored Italian recipes, lovingly prepared with a modern twist.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Homemade Pasta</h5>
                <p className="card-text">
                  We take pride in our homemade pasta, crafted daily using traditional techniques.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wine Selection</h5>
                <p className="card-text">
                  Our carefully curated wine list features the best of Italian and local vintages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-fluid text-center mb-5">
        <h2 className="mb-4">Come Dine With Us</h2>
        <p className="lead mb-4">Experience the taste of Italy right here in your neighborhood.</p>
        <Link to="/menu" className="btn btn-primary btn-lg">View Our Menu</Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;

