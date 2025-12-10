import React from "react";

function Contactus() {
  return (
    <div>
      <section
        classNameName=" container-fluid mt-3 mb-5 text-center hero-section d-flex align-items-center text-white"
        style={{
          background:
            "url('https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww')",
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="display: flex  justify-content-center  align-items-center text-align-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
          }}
        >
          <h1 className="fw-bold text-center" style={{ color: "GrayText" }}>
            Contact Us
          </h1>
          <p className="text-center" style={{ color: "InfoBackground" }}>
            We Are Here To Plan Your Trip
          </p>
        </div>
      </section>

      {/* 2nd part */}
      <section className="container my-5 py-5">
        <div className="row g-5">
          {/* <!-- LEFT COLUMN : Contact Details --> */}
          <div className="col-md-5">
            <h2 className="fw-bold mb-4">Contact Us</h2>
            <p className="text-muted mb-4">
              We’d love to hear from you. Reach out anytime for inquiries or
              support.
            </p>

            <h5 className="fw-bold">Office Address</h5>
            <p className="text-muted">
              123 Travel Street, Wanderlust City, India
            </p>

            <h5 className="fw-bold mt-4">Phone</h5>
            <p className="text-muted">+91 98765 43210</p>

            <h5 className="fw-bold mt-4">Email</h5>
            <p className="text-muted">support@travelcompany.com</p>

            <h5 className="fw-bold mt-4">Working Hours</h5>
            <p className="text-muted">Mon – Sat: 9:00 AM – 7:00 PM</p>

            {/* <!-- Social Icons --> */}
            <h5 className="fw-bold mt-4">Follow Us</h5>
            <div className="d-flex gap-3 mt-2 fs-4">
              <a href="#" className="text-primary">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-info">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-danger">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* <!-- RIGHT COLUMN : Contact Form --> */}
          <div className="col-md-7">
            <div className="p-4 border rounded-4 shadow-sm">
              <h4 className="fw-bold mb-4">Send Us a Message</h4>

              <form>
                <div className="row g-3">
                  {/* <!-- Name --> */}
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-3"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* <!-- Email --> */}
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control p-3 rounded-3"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* <!-- Phone --> */}
                  <div className="col-12">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control p-3 rounded-3"
                      placeholder="Enter phone number"
                    />
                  </div>

                  {/* <!-- Message --> */}
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      rows="4"
                      className="form-control p-3 rounded-3"
                      placeholder="Write your message"
                    ></textarea>
                  </div>

                  {/* <!-- Submit --> */}
                  <div className="col-12 text-end">
                    <button className="btn btn-primary px-5 py-2 rounded-3">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd part */}
      <section className="container my-5 py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Book Your Perfect Trip</h2>
          <p className="text-muted">
            Select your preferences and start your journey
          </p>
        </div>

        <div className="p-4 p-md-5 border rounded-4 shadow-sm bg-white">
          <form>
            <div className="row g-4">
              {/* <!-- Trip Type --> */}
              <div className="col-md-6 col-lg-4">
                <label className="form-label fw-semibold">Trip Type</label>
                <select className="form-select p-3 rounded-3">
                  <option>Adventure</option>
                  <option>Family Trip</option>
                  <option>Honeymoon</option>
                  <option>Friends Trip</option>
                  <option>Solo Travel</option>
                </select>
              </div>

              {/* <!-- Destination --> */}
              <div className="col-md-6 col-lg-4">
                <label className="form-label fw-semibold">Destination</label>
                <select className="form-select p-3 rounded-3">
                  <option>Goa</option>
                  <option>Manali</option>
                  <option>Kashmir</option>
                  <option>Bali</option>
                  <option>Dubai</option>
                  <option>Thailand</option>
                </select>
              </div>

              {/* <!-- Travel Dates --> */}
              <div className="col-md-6 col-lg-4">
                <label className="form-label fw-semibold">Travel Dates</label>
                <input type="date" className="form-control p-3 rounded-3" />
              </div>

              {/* <!-- Travellers --> */}
              <div className="col-md-6 col-lg-4">
                <label className="form-label fw-semibold">
                  Number of Travellers
                </label>
                <select className="form-select p-3 rounded-3">
                  <option>1 Traveller</option>
                  <option>2 Travellers</option>
                  <option>3 Travellers</option>
                  <option>4 Travellers</option>
                  <option>5+</option>
                </select>
              </div>

              {/* <!-- Budget --> */}
              <div className="col-md-6 col-lg-4">
                <label className="form-label fw-semibold">Budget</label>
                <select className="form-select p-3 rounded-3">
                  <option>₹10,000 - ₹20,000</option>
                  <option>₹20,000 - ₹40,000</option>
                  <option>₹40,000 - ₹60,000</option>
                  <option>₹60,000 - ₹1,00,000</option>
                  <option>₹1,00,000+</option>
                </select>
              </div>

              {/* <!-- Submit Button --> */}
              <div className="col-md-6 col-lg-4 d-flex align-items-end">
                <button className="btn btn-primary w-100 p-3 fw-semibold rounded-3">
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* 4th part */}

      <section className="container my-5">
        <h2 className="fw-bold text-center mb-4">Find Us on Map</h2>
        <p className="text-muted text-center mb-4">
          Visit our office or reach out anytime — we’re here to help!
        </p>

        <div className="map-container shadow rounded-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0186940908584!2d72.55409277386586!3d23.023085816311763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85558e268fcd%3A0xe5ba6fa8382060ed!2sFelix%20IT%20Systems%20%7C%20UI%20UX%20Design%20Courses%20in%20Ahmedabad%20%7C%20Fullstack%20courses%20with%20Placement!5e0!3m2!1sen!2sin!4v1765283336847!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "100%",
              border: "0",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
