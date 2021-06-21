import React from 'react';

import Layout from '../components/Layout';

import contactcw from '../assets/images/contact-chris-willburn.jpg'

const ContactPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contact Me</h2>
        {/*<p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>*/}
      </header>
      <section className="wrapper style5">
        <div className="inner">
        <h3 style={{fontSize: '1.5em', textAlign: 'center', fontStyle: 'italic'
          }}>Thank you for your interest in Chris Willburn Coaching.</h3>

		<img src={contactcw} className="img-shadow" style={{margin: 'auto', maxWidth: '100%', display: 'block'}} alt="Fill out the form below to contact Chris Willburn" />

          <p className="firstParagraph">
            Fill out the form below and I'll get back to you shortly.
          </p>

         

          <hr />

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

        </div>
      </section>
    </article>
  </Layout>
);

export default ContactPage;
