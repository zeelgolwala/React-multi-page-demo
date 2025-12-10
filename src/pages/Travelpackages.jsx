import React from "react";

function Travelpackages() {
  return (
    <div>
      <section
        className="hero-section d-flex align-items-center text-white"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1764628475357-f112fa0029b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0aWZ1bCUyMGRlc3RpbmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D')",
          height: "70vh",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            position: "absolute",
            inset: "0",
          }}
        ></div>

        <div className="container position-relative text-center">
          <h1 className="fw-bold display-4 mb-3">
            Find Your Perfect Travel Package
          </h1>
          <p className="lead mb-4">
            Explore destinations, compare prices, and plan your next adventure
            with ease.
          </p>

          <div className="row justify-content-center g-2 mt-4">
            <div className="col-md-3">
              <select className="form-select form-select-lg">
                <option selected>Destination</option>
                <option>Bali</option>
                <option>Dubai</option>
                <option>Maldives</option>
                <option>Switzerland</option>
                <option>Goa</option>
              </select>
            </div>

            <div className="col-md-3">
              <select className="form-select form-select-lg">
                <option selected>Budget</option>
                <option>₹10,000 - ₹20,000</option>
                <option>₹20,000 - ₹40,000</option>
                <option>₹40,000 - ₹60,000</option>
                <option>₹60,000+</option>
              </select>
            </div>

            <div className="col-md-2">
              <button className="btn btn-lg btn-primary w-100 fw-semibold">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* featured pacakeges */}
      <section className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Travel Packages</h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, ducimus.
          </p>
        </div>

        <div className="row g-2">
          {/* card1 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZGVzdGluYXRpb25zfGVufDB8fDB8fHww"
                alt="img1"
                className="card-img-top img-fluid rounded"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Bali – 5 Days / 4 Nights</h5>
                <p className="text-muted mb-4">
                  A tropical paradise full of beaches, temples & culture.
                </p>

                <div class="d-flex align-items-center mb-2">
                  ⭐⭐⭐⭐⭐ <span class="ms-2 text-muted">4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/177311459/photo/alley-of-a-sandstone-mansion-jaisalmer-rajas.webp?a=1&b=1&s=612x612&w=0&k=20&c=IsfTMbXf8P2fpdRXxsuQc4oHZBhoEvfbGyzaClJikQk="
                alt="img1"
                className="card-img-top img-fluid rounded"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Rajasthan – 3 Days / 2 Nights
                </h5>
                <p className="text-muted mb-4">
                  A tropical paradise full of beaches, temples & culture.
                </p>

                <div class="d-flex align-items-center mb-2">
                  ⭐⭐⭐⭐☆ <span class="ms-2 text-muted">4.6</span>
                </div>
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww"
                alt="img1"
                className="card-img-top img-fluid rounded"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Karnataka – 2 Days / 1 Nights
                </h5>
                <p className="text-muted mb-4">
                  A tropical paradise full of beaches, temples & culture.
                </p>
                <div class="d-flex align-items-center mb-2">
                  ⭐⭐⭐⭐⭐ <span class="ms-2 text-muted">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1638814175187-b7fbc1a1e46e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkaHlhJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="img1"
                className="card-img-top img-fluid rounded"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Madhya Pradesh – 6 Days / 5 Nights
                </h5>
                <p className="text-muted mb-4">
                  A tropical paradise full of beaches, temples & culture.
                </p>

                <div class="d-flex align-items-center mb-2">
                  ⭐⭐⭐⭐⭐ <span class="ms-2 text-muted">4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* card 5 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXR0YXJha2hhbmQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="img1"
                className="card-img-top img-fluid rounded"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Kerala – 7 Days / 6 Nights
                </h5>
                <p className="text-muted mb-4">
                  A tropical paradise full of beaches, temples & culture.
                </p>

                <div class="d-flex align-items-center mb-2">
                  ⭐⭐⭐⭐⭐ <span class="ms-2 text-muted">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527705381526-469031509a9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D"
                alt="img1"
                className="card-img-top img-fluid rounded"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Kanyakumari – 4 Days / 3 Nights
                </h5>
                <p className="text-muted mb-4">
                  A tropical paradise full of beaches, temples & culture.
                </p>

                <div class="d-flex align-items-center mb-2">
                  ⭐⭐⭐⭐⭐ <span class="ms-2 text-muted">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* All Packeges */}
            <section className="container my-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">All Packages</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum.</p>

                </div>
                <div className="row">
                    {/* card1 */}
                    <div className="col-md-3 shadow-lg border-0 rounded-4">
                        <div className="card-data text-center">
                            <img src="https://images.unsplash.com/photo-1593185541987-92f858cf43f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D" alt="img" className="img-fluid rounded" style={{height:"300px"}}/>
                            <h5 className="fw-bold mt-1">Kanyakumari</h5>
                            <button className="border-0 mb-2 ">45,000</button>

                        </div>

                    </div>

                       {/* card2 */}
                        <div className="col-md-3 shadow-lg border-0 rounded-4">
                        <div className="card-data text-center">
                            <img src="https://images.unsplash.com/photo-1621338613162-569877226e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGthbnlha3VtYXJpfGVufDB8fDB8fHww" alt="img" className="img-fluid rounded" style={{height:"300px"}}/>
                            <h5 className="fw-bold mt-1">Bali, Indonesia</h5>
                            <button className="border-0 mb-2 ">4,000,00</button>

                        </div>

                    </div>
                  

                       {/* card 3 */}
                    <div className="col-md-3 shadow-lg border-0 rounded-4">
                        <div className="card-data text-center">
                            <img src="https://images.unsplash.com/photo-1572886034137-b77ee990d594?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGthbnlha3VtYXJpfGVufDB8fDB8fHww" alt="img" className="img-fluid rounded" style={{height:"300px"}}/>
                            <h5 className="fw-bold mt-1">Maldives</h5>
                            <button className="border-0 mb-2 ">6,000,00</button>

                        </div>

                    </div>

                       {/* card 4 */}
                     <div className="col-md-3 shadow-lg border-0 rounded-4">
                        <div className="card-data text-center">
                            <img src="https://images.unsplash.com/photo-1572886034137-b77ee990d594?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGthbnlha3VtYXJpfGVufDB8fDB8fHww" alt="img" className="img-fluid rounded" style={{height:"300px"}}/>
                            <h5 className="fw-bold mt-1">Singapore</h5>
                            <button className="border-0 mb-2 ">45,000,90</button>

                        </div>

                    </div>

                       {/* card 5 */}
                    <div className="col-md-3 shadow-lg border-0 rounded-4">
                        <div className="card-data text-center">
                            <img src="https://plus.unsplash.com/premium_photo-1694475205503-d6c6a71f03bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGthbnlha3VtYXJpfGVufDB8fDB8fHww" alt="img" className="img-fluid rounded" style={{height:"300px"}}/>
                            <h5 className="fw-bold mt-1">Shimla</h5>
                            <button className="border-0 mb-2 ">50,000</button>

                        </div>

                    </div>

                       {/* card 6*/}
                    <div className="col-md-3 shadow-lg border-0 rounded-4">
                        <div className="card-data text-center">
                            <img src="https://images.unsplash.com/photo-1646722391520-98919b71ea72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGthbnlha3VtYXJpfGVufDB8fDB8fHww" alt="img" className="img-fluid rounded" style={{height:"300px"}}/>
                            <h5 className="fw-bold mt-1">Munnar</h5>
                            <button className="border-0 mb-2 ">67,000</button>

                        </div>

                    </div>
                       {/* card 7*/}
                  <div className="col-md-3 shadow-lg border-0 rounded-4">
                        <div className="card-data text-center">
                            <img src="https://media.istockphoto.com/id/638307098/photo/kanyakumari-south-india-fishing-boats-moored-in-cove.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZDGC0eGKaw2u7nEWGttO3NeQ3_OEsKEnYQ7jLd7Wqbc=" alt="img" className="img-fluid rounded" style={{height:"300px"}}/>
                            <h5 className="fw-bold mt-1">Kerala Backwaters</h5>
                            <button className="border-0 mb-2 ">87,0000</button>

                        </div>

                    </div>

                       {/* card 8 */}
                   <div className="col-md-3 shadow-lg border-0 rounded-4">
                        <div className="card-data text-center">
                            <img src="https://media.istockphoto.com/id/2201890679/photo/thiruvalluvar-statue-next-to-the-ocean-and-bridge-in-kanyakumari.webp?a=1&b=1&s=612x612&w=0&k=20&c=K8nBsj5YpI2jD6GnRcbiOk_vvqUDglpgJ5bKjknSXb0=" alt="img" className="img-fluid rounded" style={{height:"300px"}}/>
                            <h5 className="fw-bold mt-1">Sikkim</h5>
                            <button className="border-0 mb-2 ">86,000</button>

                        </div>

                    </div>







                </div>

            </section>
    </div>
  );
}

export default Travelpackages;
