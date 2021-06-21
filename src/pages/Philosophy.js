import React from 'react';

import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>My Philosophy</h2>
        {/*<p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>*/}
      </header>
      <section className="wrapper style5">
        <div className="inner">
        <h3 style={{fontSize: '1.5em', textAlign: 'center', fontStyle: 'italic'}}>
          I believe that there is a best version of ourselves inside all of us that has the capability to give us everything we want in life.</h3>

            <p className="firstParagraph">Everything you need to live the life you always wanted is already inside side you!</p>

            <p>And the way you let it out is to master your own self care. </p>

            <p>When we come to the table with our own cup filled, the stresses and the challenges of life are more easily dealt with and we are able to find the joy in our life.</p>

            <p>Too many of us put everyone else first and ourselves last. That's a recipe for burnout, frustration and poor health.</p>

            <p>The answer to that is mastering your own self care so your best self can start running the show.</p>

            <hr />

            <p>When you realize that there is nothing wrong with you,  and all you need to do is start acting from the best version of yourself.......a whole transformation occurs. </p>

            <p>It's my highest passion to help as many people as possible discover how amazing they really are and meet the best version of themselves by learning how to put their own self care on the top of their to do list.</p>

            <p>This definitely includes weighloss and your physical body. But their also needs to be a whole person approach that works on the mental and emotional aspects as well.</p>

            <p>When you maximize all three aspects of health, you start to live the life you always wanted.</p>

            <p style={{textAlign: 'center'}}><a href="/Contact" className="button primary">Get Started</a></p>


          
        </div>
      </section>
    </article>
  </Layout>
);

export default AboutPage;
