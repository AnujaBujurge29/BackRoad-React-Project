import React from "react"

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1> exploring the World!</h1>
        <p>
        “Travel makes one modest. You see what a tiny place you occupy in the world.” <br/><br/>
        <b>Gustav Flaubert</b>
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  )
}
