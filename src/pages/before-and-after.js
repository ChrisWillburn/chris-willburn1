import React from 'react';

import Layout from '../components/Layout';

import beforeafter1 from '../assets/images/12-weeks-before-and-after.jpg';
import beforeafter2 from '../assets/images/before-and-after1.jpg';
import beforeafter3 from '../assets/images/heather-before-and-after.jpg';
import beforeafter4 from '../assets/images/janice-before-and-after.jpg';
import beforeafter5 from '../assets/images/karin-before-and-after.jpg';
import beforeafter7 from '../assets/images/monique-before-after.jpg';
import beforeafter11 from '../assets/images/before-and-after11.jpg';
import beforeafter12 from '../assets/images/before-and-after12.jpg';
import beforeafter14 from '../assets/images/before-and-after14.jpg';
import beforeafter15 from '../assets/images/before-and-after15.jpg';
import beforeafter16 from '../assets/images/before-and-after16.jpg';
import beforeafter17 from '../assets/images/before-and-after17.jpg';
import jessy from '../assets/images/before-and-after2.jpg';
import beforeafter8 from '../assets/images/before-and-after8.png';
import beforeafter9 from '../assets/images/before-and-after9.png';
import beforeafter10 from '../assets/images/before-and-after10.png';


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
            <div className="masonry-item">
              <img src={beforeafter11} className="img-shadow" alt="Before and after working with Chris Willburn" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter12} className="img-shadow" alt="Results after working with Chris Willburn" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter14} className="img-shadow" alt="Chris Willburn Coaching gets you results" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter15} className="img-shadow" alt="Weight loss results from Chris Willburn Coaching" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter16} className="img-shadow" alt="Chris Willburn delivers weight loss results" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter17} className="img-shadow" alt="Lose weight with Chris Willburn Coaching" />
            </div>
            <div className="masonry-item">
              <img src={jessy} className="img-shadow" alt="Fitness results for Jessy" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter8} className="img-shadow" alt="More fitness results from Chris Willburn Coaching" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter9} className="img-shadow" alt="Before and after results from working with Chris Willburn" />
            </div>
            <div className="masonry-item">
              <img src={beforeafter10} className="img-shadow" alt="Chris Willburn gets you results" />
            </div>
          </div>

          
        </div>
      </section>
    </article>
  </Layout>
);

export default BeforePage;
