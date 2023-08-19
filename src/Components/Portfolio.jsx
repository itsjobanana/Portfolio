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
import image from "../images/projects.jpg";

const imageAltText = "keyboard rgb";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Ticket Booth",
    description:
      "Collaboration Python project on ticketing system for concerts and movies",
    url: "https://github.com/itsjobanana/IM2TicketBooth",
  },
  {
    title: "Teknoy Archives",
    description:
      "Collaboration project on library app for CIT University students",
    url: "https://github.com/itsjobanana/TeknoyArchives",
  },
  {
    title: "Google Developer Student Clubs",
    description:
      "Chapter Lead and CEO for A.Y. 2022-2023",
    url: "https://gdsc.community.dev/cebu-institute-of-technology/",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    description:
      "Student Ambassador since July 2023",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/2cd7b34a-7026-4ec7-a526-9d783f22834b",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
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
