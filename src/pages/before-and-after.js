import React from 'react';

import Layout from '../components/Layout';

import beforeafter1 from '../assets/images/12-weeks-before-and-after.jpg'
import beforeafter2 from '../assets/images/before-and-after1.jpg'
import beforeafter3 from '../assets/images/heather-before-and-after.jpg'
import beforeafter4 from '../assets/images/janice-before-and-after.jpg'
import beforeafter5 from '../assets/images/karin-before-and-after.jpg'
import beforeafter6 from '../assets/images/megan-before-and-after.jpg'
import beforeafter7 from '../assets/images/monique-before-after.jpg'

const BeforePage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Before and After</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3 style={{fontSize: '1.5em', textAlign: 'center', fontStyle: 'italic'
          }}>Check out the photos below to see real results achieved by Chris Willburn Coaching clients.</h3>

          <div className="masonry-container">
						<div className="masonry-item">
              <img src={beforeafter1} className="img-shadow" alt="Chris Willburn Coaching client's results after 12 weeks" />
              </div>
              <div className="masonry-item">
              <img src={beforeafter2} className="img-shadow" alt="Before and After results after working with Chris Willburn" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter3} className="img-shadow" alt="Heather's results" />
              </div>
              <div className="masonry-item">
              <img src={beforeafter4} className="img-shadow" alt="Before and after results for Janice" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter5} className="img-shadow" alt="Karin's results" />
              </div>
            <div className="masonry-item">
              <img src={beforeafter7} className="img-shadow" alt="Fitness results for Monique" />
            </div>
          </div>

          
        </div>
      </section>
    </article>
  </Layout>
);

export default BeforePage;
