import React from 'react';

import Layout from '../components/Layout';

import aboutthumb from '../assets/images/aboutthumb.jpg';

const AboutPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Meet Chris Willburn</h2>
        {/*<p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>*/}
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3 style={{fontSize: '1.5em', textAlign: 'center', fontStyle: 'italic'
          }}>In 2010 I tipped the scales at around 300 pounds.</h3>

          <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
          <a style={{borderBottom: 'none'}} href="https://www.youtube.com/embed/sx5KFCHrgrc" 
            className="fresco"
            data-fresco-options="
              rel: 0,
              html5: 1,
              vq: hd720,
              modestbranding: 1,
            ">
            <img className="img-shadow" src={aboutthumb} style={{maxWidth: '100%'}} alt="Meet Chris Willburn, transformation coach" /></a>
          </div>
          <div className="col-6 col-12-xsmall">
          <p>I was depressed, anxious, struggling with insomnia, on a ton of different prescription medications, and DEEPLY unhappy. </p>

          <p>I had gained a bunch of weight slowly after a downward spiral when my dad died several years earlier. I also had developed some really <b>unhealthy habits</b> to cope with my grief and sadness.</p>

          <p>All I wanted in the world was to <b>lose that weight</b> and get back to "myself" because I knew it would make me happy.</p>

          <p>So over the course of about a year I lost weight, almost 100 pounds. (I would eventually lose the whole 100 plus).</p>
          </div>
          </div>

          <p><b>Except I wasn't happy.</b></p>

          <p>Intrinsically <b>I knew I wasn't going to find happiness in something external</b>, like weight loss. Even though that was part of the puzzle.</p>

          <p>So I went on a journey to learn how to be happy. I learned how to control stress, to stop being so negative and stop beating myself up all the time.</p>

          <p>I learned the <b>benefits of positivity</b> and simple steps to start using it.</p>

          <p className="about-centered">I learned happiness was a choice<br></br>and I chose it every day.</p>

          <p>And during that journey I decided I wanted to help others lose weight too.</p>

          <p>So by early 2014 I had obtained the necessary requirements/certifications to start working with clients. </p>

          <p>I quickly realized my clients were all struggling with the same things I struggled with when I was super overweight and super unhappy.</p>

          <p>The things they don't teach in the classes, courses, and certifications.</p>

          <p>So along with my simple, <b>no nonsense approach to nutrition</b>, I eventually created a system of mental, emotional, and physical health that incorporated everything I've learned in over a decade of work.</p>

          <hr />

          <p>So what became my true passion was helping people change their relationship with themselves. To put themselves first and to <b>practice self love</b> every day. </p>

          <p>Because that is what I've found produces not only weight loss, but <b>radical transformation.</b> So much more than just weight loss. I believe it's the answer to weight loss.....forever.</p>

          <p>And that's my origin story.</p>

          <p>You can find out a little more about me personally in the video on this page.</p>
          </div>
      </section>
    </article>
  </Layout>
);

export default AboutPage;
