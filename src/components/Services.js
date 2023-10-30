import React from "react"
import Title from "./Title"
import { servicesData } from "../data"

export default function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesData.map((link) => {
          return (
            <article className="service" key={link.id}>
              <span className="service-icon">
                <i className="fas fa-wallet fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{link.text}</h4>
                <p className="service-text">{link.para}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
