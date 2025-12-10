import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="text-light pt-4 pb-2"
        style={{ backgroundColor: "purple" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>About Us</h5>
              <p className="small">
                We provide high-quality services and tools to help you grow your
                business.
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-3">
              <h5>Contact</h5>
              <p className="small mb-1">Email: info@example.com</p>
              <p className="small mb-1">Phone: +123 456 7890</p>
              <p className="small">Address: 123 Main Street, City</p>
            </div>
          </div>

          <hr className="border-light" />

          <div className="text-center small">
            © 2025 Your Company. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
