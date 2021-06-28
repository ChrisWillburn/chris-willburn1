import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/philosophy">My Philosophy</Link>
              </li>
              <li>
                <Link to="/before-and-after">Before and After</Link>
              </li>
              <li>
                <Link to="/workwithme">Work With Me</Link>
              </li>
              {/*<li>
                <Link to="/blog">Blog</Link>
              </li>*/}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
