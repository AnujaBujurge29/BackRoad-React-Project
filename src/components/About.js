import React from "react"
import Aboutimage from "../images/about.jpeg"
import Title from "./Title"

export default function About() {
  return (
    <section className="section" id="about">
      <Title title='about' subTitle='us'/>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={Aboutimage} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            “Twenty years from now you will be more disappointed by the things
            you didn’t do than by the ones you did do. So, throw off the
            bowlines. Sail away from the safe harbor. Catch the trade winds in
            your sails. Explore. Dream. Discover.” ~Mark Twain
          </p>
          <h4>TRAVEL WITH US </h4>
          <p>
            No matter who you are, or where you are going, our travel brands
            help every type of traveler not only find the trip that’s right for
            them, but get the best value every time.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
