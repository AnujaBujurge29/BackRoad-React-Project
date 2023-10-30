import React from "react"
import Title from "./Title"
import { tourData } from "../data"

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured " subTitle="tours" />
      <div className="section-center featured-center">
        {tourData.map((link) => {
          return (
            <article className="tour-card" key={link.id}>
              <div className="tour-img-container">
                <img src={link.image} className="tour-img" alt="" />
                <p className="tour-date">{link.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{link.title}</h4>
                </div>
                <p>{link.para}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {link.loaction}
                  </p>
                  <p>{link.duration}</p>
                  <p>{link.price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
