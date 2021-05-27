import React from 'react';

import Layout from '../components/Layout';

import ba11 from '../assets/images/ba11.jpg';
import ba9 from '../assets/images/ba9.jpg';

import ba15 from '../assets/images/ba15.jpg';
import ba16 from '../assets/images/ba16.jpg';

const AboutPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Work With Me</h2>
        {/*<p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>*/}
      </header>
      <section className="wrapper style5">
        <div className="inner">
        <h3 style={{fontSize: '1.5em', textAlign: 'center', fontStyle: 'italic'}}>
            There is more information than ever out there on how to lose weight, as well as more diets than ever.
        </h3>

            <p className="firstParagraph">So why are their more overweight and obese people than ever?</p>

            <p>Because in our society we are looking at diets and weighloss backwards.</p>

            <p>Instead of focusing on the most "hardcore" diet with the most restrictions that makes you miserable and RUNS your life...</p>

            <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '4em 0', paddingTop: '2em', paddingBottom: '2em'}}>
            <img src={ba11} style={{maxWidth: '100%', width: '300px', height: '351px'}} alt="Before and after working with Chris Willburn" />
            <img src={ba9} style={{maxWidth: '100%', width: '300px', height: '351px'}} alt="Weight loss results with Chris Willburn" />
          </div>

            <p>What if we created you a plan that was easy, enjoyable, and MADE YOUR LIFE BETTER? </p>

            <p>Sounds crazy, right? So with that in mind I created...</p>

            <h4>The Self Care Project</h4>
            <p>A unique system to help you lose weight, get healthy, reduce stress, increase happiness and positivity, and improve your quality of life overall. No more eating foods you hate, following a cycle of restriction and binging, and constantly beating yourself up. Instead, we'll focus on:</p>

            <ul>
                <li>Creating a healthy relationship with food</li>
                <li>Long term habit change</li>
                <li>Ending food restrictions</li>
                <li>Creating a lifestyle where you enjoy the process of losing weight</li>
                <li>Mastering self care and giving yourself permission to put you first</li>
            </ul>

            <p>The program is based around my 4 Pillars</p>
            <ol>
            <li>
                Mindset
                Changing how you think when pursuing weight loss and a healthier life in general is the most important thing. I will teach you how to think differently so that you can take control of the conversation in your head and greatly reduce anxiety and depression and increase mental resilience. Mindfulness and positive psychology are stressed a lot in this pillar.
            </li>

            <li>
                Nutrition coaching using “the happy method."
                This pillar uses the principles of my "happy method" that empowers you to eat foods you enjoy, get out of the "good and bad food" mentality and end food guilt forever. No foods are off limits, and I help you to incorporate foods that make you happy. So you can create a lifestyle…..Not a diet. Again EAT FOODS YOU ENJOY and NO FOODS OFF LIMITS!
            </li>
 
            <li>
                Stress relief and management
                Let’s face it stress is typically the biggest thing holding us back from not only the body we want but also the health we want. I have found that making stress relief a part of my coaching increases not only results, but also life satisfaction. And no, it won’t take sitting cross legged on a mountain to achieve it. A few simple tactics and strategies and you will wonder how you lived so stressed out for so long.
            </li>

            <li>
                The neuroscience of behavior change
                I will help you work WITH your brain and not against how your brain works to create long term sustainable habit change, AND make it more enjoyable. If you actually ENJOY the process then you will be 1000% more likely to get to your end goal and MAINTAIN it.
            </li>
            </ol>

            <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '4em 0', paddingTop: '2em', paddingBottom: '2em'}}>
            <img src={ba15} style={{maxWidth: '100%', width: '300px', height: '351px'}} alt="Before and after working with Chris Willburn" />
            <img src={ba16} style={{maxWidth: '100%', width: '300px', height: '351px'}} alt="Weight loss results with Chris Willburn" />
          </div>
            <p>“You will never get  you LOVE doing things you hate"...so let’s build you a process you LOVE.</p>
 
            <p>There are several different options for joining The Self Care Project to fit whatever your needs are. All are 12 weeks minimum.</p>
 
            <p>Ready to get started on changing your life for good?</p>
 
            <p>Fill out the form below to schedule a free consultation.</p>

          <section>
          <form method="post" action="#">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
								<input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
							</div>
							<div className="col-12">
								<select name="demo-category" id="demo-category">
									<option value="">- Area of Interest -</option>
									<option value="1">Free Consultation</option>
									<option value="1">Weight Loss</option>
									<option value="1">Mental Coaching</option>
								</select>
							</div>
							<div className="col-12">
								<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="primary" /></li>
									<li><input type="reset" value="Reset" /></li>
								</ul>
							</div>
						</div>
					</form>
				  </section>


          
        </div>
      </section>
    </article>
  </Layout>
);

export default AboutPage;
