import React from "react";

function Aboutus() {
  return (
    <div>
      <section
        className=" container-fluid mt-3 mb-5 text-center hero-section d-flex align-items-center text-white"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1764628475357-f112fa0029b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0aWZ1bCUyMGRlc3RpbmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D')",
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className=""
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
          <h1 className="fw-bold" style={{ color: "GrayText" }}>
            About Us
          </h1>
          <p className="" style={{ color: "InfoBackground" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            aliquam!
          </p>
        </div>
      </section>

      {/* 2nd part */}

      <section className="container my-5 py-5">
        <div className="row align-items-center g-4">
          {/* left img */}
          <div className="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt=""
              className="img-fluid rounded-4 shadow-lg"
              style={{}}
            />
          </div>

          {/* right content */}

          <div className="col-lg-7">
            <h2 className="fw-bold mb-3">OUR STORY</h2>

            <p className="text-muted mb-4">
              Founded with a passion for exploration and meaningful experiences,
              our travel company has helped thousands of travelers discover the
              beauty of the world. We believe travel is not just about visiting
              places — it’s about creating memories, connecting cultures, and
              experiencing life from a new perspective.
            </p>
            <h5 className="fw-semibold mb-3">OUR PURPOSE & MISSION</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                ✔ Deliver premium travel experiences with comfort and
                reliability.
              </li>
              <li className="mb-2">
                ✔ Make global travel accessible, affordable, and memorable for
                everyone.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3rd part */}

      <section className="container my-5 py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">OUR MISSION</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            {" "}
            We aim to redefine how people experience travel by offering safe,
            memorable, and perfectly curated journeys to destinations around the
            world.
          </p>
        </div>

        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded-4 shadow-sm h-100">
              <i className="bi bi-shield-check display-5 text-primary mb-3"></i>
              <h5 className="fw-bold">Safe Travel</h5>
              <p className="text-muted">
                Your safety is our top priority with reliable planning and
                trusted partners.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded-4 shadow-sm h-100">
              <i className="bi bi-globe-americas display-5 text-primary mb-3"></i>
              <h5 className="fw-bold">Best Travel Experience</h5>
              <p className="text-muted">
                We deliver seamless and unforgettable journeys tailored to your
                needs.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded-4 shadow-sm h-100">
              <i className="bi bi-people-fill display-5 text-primary mb-3"></i>
              <h5 className="fw-bold">Expert Guides</h5>
              <p className="text-muted">
                Travel with our experienced and knowledgeable tour experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4th part */}
      <section className="container my-5 py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Trusted By Travellers</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://i.pravatar.cc/80?img=32"
                    className="rounded-circle me-3"
                    style={{ width: "60", height: "60" }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">Amit Sharma</h6>
                    <small className="text-muted">Trip to Bali</small>
                  </div>
                </div>
                <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
                <p class="text-muted">
                  Amazing experience! The trip was perfectly organized,
                  comfortable and exactly what I needed for a relaxing vacation.
                </p>
              </div>
            </div>


                {/* 2nd review */}
             <div className="col-md-4">
              <div className="card border-0 shadow rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://i.pravatar.cc/80?img=32"
                    className="rounded-circle me-3"
                    style={{ width: "60", height: "60" }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">Neha Dabhi</h6>
                    <small className="text-muted">Trip to Kerala</small>
                  </div>
                </div>
                <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-muted">
                  Amazing experience! The trip was perfectly organized,
                  comfortable and exactly what I needed for a relaxing vacation.
                </p>
              </div>
            </div>

                {/* 3rd review */}
             <div className="col-md-4">
              <div className="card border-0 shadow rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://i.pravatar.cc/80?img=32"
                    className="rounded-circle me-3"
                    style={{ width: "60", height: "60" }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">Hetaxi Nayak</h6>
                    <small className="text-muted">Trip to Jaisalmer</small>
                  </div>
                </div>
                <div className="text-warning mb-2">⭐⭐⭐⭐</div>
                <p class="text-muted">
                  Amazing experience! The trip was perfectly organized,
                  comfortable and exactly what I needed for a relaxing vacation.
                </p>
              </div>
            </div>



          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
