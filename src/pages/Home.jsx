import React from "react";

function Home() {
  return (
    <>
      <div className="container-fluid mt-3 mb-5">
        <header
          className="text-center d-flex align-items-center justify-content-center"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1764411368560-f31cc69e3535?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZCUyMGltZ2VzJTIwZm9yJTIwdHJhdmVsJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D)",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
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
            <h1 className="mt-4">Discover the World, One Trip at a Time</h1>

            <h5 className="mt-5">Escape the ordinary. Embrace the world</h5>
            <p className="mt-5 text-secondary display-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sed
              accusantium qui repudiandae incidunt rem.
            </p>

            <div className="btn">
              <button className="simple-btn">Destinations</button>
              <button className="simple-btn">Book Now</button>
            </div>
          </div>
        </header>
      </div>

      {/* card */}
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwaW1hZ2VzfGVufDB8fDB8fHww"
                className="card-img-top"
                alt="card1"
              />
              <div className="card-body">
                <h5>Australia</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, odio.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-primary px-4">
                    Action
                  </button>
                  <button className="btn btn-primary px-4">More</button>
                </div>
              </div>
            </div>
          </div>

                {/* card2 */}
           <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1486324142883-bf35968080ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwaW1hZ2VzfGVufDB8fDB8fHww"
                className="card-img-top"
                alt="card1"
              />
              <div className="card-body">
                <h5>New York</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, odio.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-primary px-4">
                    Action
                  </button>
                  <button className="btn btn-primary px-4">More</button>
                </div>
              </div>
            </div>
          </div>

          {/* card 3 */}

           <div className="col-md-4">
            <div className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1669689972847-2cafbf3a6f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwaW1hZ2VzfGVufDB8fDB8fHww"
                className="card-img-top"
                alt="card1"
              />
              <div className="card-body">
                <h5>India</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, odio.
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-primary px-4">
                    Action
                  </button>
                  <button className="btn btn-primary px-4">More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wyy choose us */}
     <section className="container py-5">
  <h2 className="text-center mb-4">Why Choose Us</h2>
  <p className="text-center text-muted mb-5">
    We provide high-quality services with a focus on reliability, clarity, and customer satisfaction.
  </p>

  <div className="row text-center">
    <div className="col-md-4 mb-4">
      <i className="bi bi-star-fill fs-1 text-primary mb-3"></i>
      <h5>High Quality</h5>
      <p>We deliver top-notch products built with the latest technology.</p>
    </div>

    <div className="col-md-4 mb-4">
      <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
      <h5>Trusted Team</h5>
      <p>Our expert team ensures the best results for your business.</p>
    </div>

    <div className="col-md-4 mb-4">
      <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
      <h5>Secure & Reliable</h5>
      <p>We prioritize safety and reliability in everything we build.</p>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
