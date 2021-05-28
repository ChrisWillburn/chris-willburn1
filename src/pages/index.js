import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic3 from '../assets/images/pic03.jpg';

import chrishome from '../assets/images/chris-home.png';
import bahome1 from '../assets/images/ba-home1.jpg';
import bahome2 from '../assets/images/ba-home2.jpg';
import bahome3 from '../assets/images/ba-home3.jpg';
import monique from '../assets/images/cw-monique.jpg';
import trisha from '../assets/images/cw-trisha.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          {/*<li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>*/}
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2 style={{borderBottom: 'none'}}>
          <span className="home-headline"><span className="headline-copy">I BELIEVE THERE IS A BEST VERSION OF OURSELVES</span></span>
          <br />
          <span className="home-headline"><span className="headline-copy">INSIDE ALL OF US THAT HAS THE CAPABILITY TO</span></span>
          <br />
          <span className="home-headline"><span className="headline-copy">GIVE US EVERYTHING WE WANT IN LIFE.</span></span>
          </h2>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={chrishome} alt="Chris Willburn, coach and transformation specialist" />
        </div>
        <div className="content">
          <h2>
            Hi, I'm Chris Willburn
          </h2>
          <p>
            My life's purpose is to help people just like you live their best lives. We'll do this by getting your mindset on the right track and getting you the tools to be your best self.
            <p style={{marginTop: '2em'}}><a href="/About" className="button primary">About Me</a></p>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image home-ba">
        <img className="img-shadow bahome1" src={bahome1} style={{maxWidth: '100%', width: '200px', height: '234px'}} alt="Before and after working with Chris Willburn" />
        <img className="img-shadow bahome2" src={bahome2} style={{maxWidth: '100%', width: '200px', height: '234px'}} alt="Before and after working with Chris Willburn" />
        <img className="img-shadow bahome3" src={bahome3} style={{maxWidth: '100%', width: '200px', height: '234px'}} alt="Before and after working with Chris Willburn" />
        </div>
        <div className="content">
          <h2>
            Real Results
          </h2>
          <p>
            My clients get real results that last a lifetime.
            That's the difference between creating a solid 
            plan and jumping from diet to diet.
          </p>
        </div>
      </section>
      <section className="spotlight">
      <div className="content">
          <h2>
            Sign up to my newsletter to get updates.
          </h2>
        </div>
        <div className="image">
        <form method="post" action="#" className="home-signup">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
								<input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="First Name" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Subscribe" className="primary" /></li>
								</ul>
							</div>
						</div>
					</form>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>See What People Are Saying</h2>

          <div className="home-videos">
            <div className="first-home-video">
              <a style={{borderBottom: 'none'}} href="https://www.youtube.com/embed/s06JrfHiOts" 
                className="fresco"
                data-fresco-options="
                  rel: 0,
                  html5: 1,
                  vq: hd720,
                  modestbranding: 1,
              ">
              <figure>
              <img className="img-shadow" src={monique} style={{maxWidth: '100%'}} alt="Watch Monique's story of working with Chris Willburn" />
              <figcaption>Monique's Journey of 150 pounds lost <br /> with Project Breakthrough</figcaption>
              </figure></a>
            </div>

            <div className="first-home-video">
              <a style={{borderBottom: 'none'}} href="https://www.youtube.com/embed/DZx-VCgQ8HY" 
                className="fresco"
                data-fresco-options="
                  rel: 0,
                  html5: 1,
                  vq: hd720,
                  modestbranding: 1,
              ">
              <figure>
              <img className="img-shadow" src={trisha} style={{maxWidth: '100%'}} alt="Watch Monique's story of working with Chris Willburn" />
              <figcaption>Trisha's Sucess Story</figcaption>
              </figure>
              </a>
            </div>
          </div>
        </header>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        
      <p style={{margin: 'auto'}}>
        <a href="/#" className="button fit primary">
              Get in Touch
        </a>
      </p>
          
      </div>
    </section>
  </Layout>
);

export default IndexPage;
