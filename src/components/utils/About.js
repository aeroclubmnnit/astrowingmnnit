import React from 'react'
import '../../css/About.css'

export default function About() {
  return (
    <section>
      <div className="grid-flex">
        <div className="col col-image" data-aos="zoom-in">
        </div>
        <div className="col col-text">
          <div className="Aligner-item">
            <div className="pageTitle titleBold headingc white-headingc" style={{ marginBottom: '5px', color: 'white' }} data-aos="fade-down">ABOUT US</div>
            <div className="miniSep" style={{ marginBottom: '10px' }} ></div>
            <p className="abttxt" data-aos="zoom-in" style={{ paddingBottom: '10px' }}>Astrowing is an offshoot of the AeroClub MNNIT, focusing across the entire length and breadth of the field of Astronomy and core sciences.
            The main goal of Astrowing is to increase involvement & interest in astronomy by spreading knowledge and resources to the masses. We have organized various events, quizzes, and classes with some participation of 100+ participants and own a telescope for observations. Many individuals have completed their projects under the guidance of club instructors in topics ranging from 3D printing a telescope, machine learning in astronomy to orbital mechanics, astronomy data processing, and so on. Apart from projects, our members frequently click pictures of celestial objects and star trails. Our wing has boomed well under the guidance of revered professionals and parent club AeroClub.
            We are continuously striving towards merging our prowess in technology with our passion for astronomy and aspire to share the spirit with you.
            </p>
          </div>
        </div>
      </div>

    </section>

  )
}