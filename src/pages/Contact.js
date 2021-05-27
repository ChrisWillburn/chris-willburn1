import React from 'react';

import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contact Me</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Lorem ipsum dolor</h3>
          <p>
            Morbi mattis mi consectetur tortor elementum, varius pellentesque
            velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
            scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
            lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
            Maecenas sagittis felis ac sagittis semper. Curabitur purus leo,
            tempus sed finibus eget, fringilla quis risus. Maecenas et lorem
            quis sem varius sagittis et a est. Maecenas iaculis iaculis sem.
            Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo.
            Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
            fringilla tincidunt. Aliquam eleifend ligula non velit accumsan
            cursus. Etiam ut gravida sapien.
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

        </div>
      </section>
    </article>
  </Layout>
);

export default ContactPage;
