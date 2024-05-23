/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Car clinic -A Website for online car service Booking 🎉",
    description:
      "Car Clinic is an online car service booking platform where users can book car service chat with mechanic and also review the mechanic. Using this platform users can select the mechanic and schedule their bookings which makes car service easier ",
    url: "https://car-service-zeta.vercel.app/",
  },
  {
    title: "Majestic Bakery-An Ecommerce application",
    description:
      "Developed and designed a fully functional E-Commerce website. This integrated solution empowers vendors to efficiently manage their products, inventory, and orders while ensuring a seamless shopping experience for customers.",
    url: "https://majesticbakery-in.onrender.com/",
  },
  {
    title: " Weather Application    ",
    description:
      "Created Weather Application using OpenWeatherMap API and GeoDB API with places autocomplete",
    url: "https://github.com/Neethusanal/WeatherApp",
  }
 
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
