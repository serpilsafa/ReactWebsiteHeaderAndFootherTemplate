import React from 'react';
import './Foother.css'

function Foother(){
    return (
        <section className="footer">
          <hr className="footer-seperator" />
          <section className="footer-social-media">
            <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </section>
          <section className="footer-info">
            <section className="footer-info-left">
              <section className="footer-info__name">
                  Software Engineer Serpil
              </section>
              <section className="footer-info__returns">
                Returns Policy
                <br />
                Delivery
              </section>        
            </section>
            <section className="footer-info-center">
              <section className="footer-info__email">
                info@safasoftware.com
              </section>
              <section className="footer-info__terms">
                Terms and Conditions
                <br />
                Copyright
              </section>
            </section>
            <section className="footer-info-right">
              <section className="footer-info__number">
                99999999999
              </section>
              <section className="footer-info__contact">
                My Story
                <br />
                Contact Us
              </section>
            </section>
          </section>
          <hr className="footer-seperator" />
        </section>
      )
}

export default Foother;
