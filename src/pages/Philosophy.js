import React from 'react';

import Layout from '../components/Layout';

import aboutthumb from '../assets/images/aboutthumb.jpg';
import ba2 from '../assets/images/before-and-after2.jpg';
import ba3 from '../assets/images/before-and-after3.jpg';

const AboutPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>My Philosophy</h2>
        {/*<p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>*/}
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3 style={{textAlign: 'center', fontStyle: 'italic'
          }}>I believe that there is a best version of ourselves inside all of us that has the capability to give us everything we want in life.</h3>

            <p>Everything you need to live the life you always wanted is already I side you!</p>

            <p>And the way you let it out is to master your own self care. </p>

            <p>When we come to the table with our own cup filled, the stresses and the challenges of life are more easily dealt with and we are able to find the joy in our life.</p>

            <p>Too many of us put everyone else first and ourselves last. That's a recipe for burnout, frustration and poor health.</p>

            <p>The answer to that is mastering your own self care so your best self can start running the show.</p>

            <p>When you realize that there is nothing wrong with you,  and all you need to do is start acting from the best version of yourself.......a whole transformation occurs. </p>

            <p>It's my highest passion to help as many people as possible discover how amazing they really are and meet the best version of themselves by learning how to put their own self care on the top of their to do list.</p>

            <p>This definitely includes weighloss and your physical body. But their also needs to be a whole person approach that works on the mental and emotional aspects as well.</p>

            <p>When you maximize all three aspects of health, you start to live the life you always wanted.</p>


          
        </div>
      </section>
    </article>
  </Layout>
);

export default AboutPage;
