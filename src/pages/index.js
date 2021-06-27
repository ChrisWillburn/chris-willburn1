import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

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
          <h2 style={{borderBottom: 'none', margin: '0', paddingBottom: '0'}}>
          <span className="home-headline headline-copy">What if weight loss</span>
          <br />
          <span className="home-headline headline-copy">was more about self care and self love,</span>
          <br />
          <span className="home-headline headline-copy">and less about restrictions and self hate?</span>
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
          My life's purpose is to help people become the best version's of themselves. We do this my mastering your self care (inside and outside) so you can unlock your best self.
            <p style={{marginTop: '2em'}}><a href="/about" className="button primary">About Me</a></p>
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
        
        <form method="post" action="https://chriswillburnfitness.us15.list-manage.com/subscribe/post?u=500bd36b7f4b0afe5f0ff162f&amp;id=5882b2c255" className="home-signup validate" target="_blank" noValidate>
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
                <input type="text" value="" name="FNAME" id="mce-FNAME" defaultValue="" placeholder="First Name" />
							</div>
							<div className="col-6 col-12-xsmall">
                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" defaultValue="" placeholder="Email" />
							</div>
							<div className="col-12">

              <div id="mce-responses" className="clear">
		<div className="response" id="mce-error-response" style={{display: 'none'}}></div>
		<div className="response" id="mce-success-response" style={{display: 'none'}}></div>
	</div>


  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_500bd36b7f4b0afe5f0ff162f_5882b2c255" tabindex="-1" value="" /></div>

								<ul className="actions">
									<li><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button primary" /></li>
								</ul>
							</div>
						</div>
					</form>

        </div>
      </section>

    <section className="spotlight">
        <div className="content">
          <h2>
          My clients get real, long lasting results because I use methods and strategies that make your life BETTER while you're doing them. Not worse.
          </h2>
          <p>
          You'll enjoy the process so you'll stick to it and YOU WILL GET RESULTS THAT LAST A LIFETIME. 
          </p>
        </div>
        <div className="image home-ba">
        <img className="img-shadow bahome1" src={bahome1} style={{maxWidth: '100%', width: '200px', height: '234px'}} alt="Before and after working with Chris Willburn" />
        <img className="img-shadow bahome2" src={bahome2} style={{maxWidth: '100%', width: '200px', height: '234px'}} alt="Before and after working with Chris Willburn" />
        <img className="img-shadow bahome3" src={bahome3} style={{maxWidth: '100%', width: '200px', height: '234px'}} alt="Before and after working with Chris Willburn" />
        </div>
      </section>
      </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>See What People Are Saying</h2>
          <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
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

            <div className="col-6 col-12-xsmall">
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
        <a href="/contact" className="button fit primary">
              Get in Touch
        </a>
      </p>
          
      </div>
    </section>
  </Layout>
);

export default IndexPage;
