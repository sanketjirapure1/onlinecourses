import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-y py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <Link  to="/" className="d-flex align-items-center logonamefooter">
              Online Courses
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-6">
                <h5>Online Business</h5>
                <ul className="list-unstyled">
                  <li><Link to="/teach">Teach on Udemy</Link></li>
                  <li><Link to="/app">Get the app</Link></li>
                </ul>
              </div>
              <div className="col-sm-6">
                <h5>Company</h5>
                <ul className="list-unstyled">
                  <li><Link to="/investors">Investors</Link></li>
                  <li><Link to="/terms">Terms</Link></li>
                  <li><Link to="/privacy">Privacy policy</Link></li>
                  <li><Link to="/sitemap">Sitemap</Link></li>
                  <li><Link to="/accessibility">Accessibility statement</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200" />
        <div className="row align-items-center">
          <div className="col-sm-6 text-center text-sm-left mb-2 mb-sm-0">
            <span className="text-gray-500">
              © {new Date().getFullYear()} Online Course Sales. All Rights Reserved.
            </span>
          </div>
          <div className="col-sm-6 text-center text-sm-right">
          </div>
        </div>
      </div>
    </footer>
  );
}

