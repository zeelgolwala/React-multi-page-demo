import React from "react";

function Gallery() {
  return (
    <div>
      <section
        className=" container-fluid mt-3 mb-5 text-center hero-section d-flex align-items-center text-white"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1649935767507-7ec07394eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsbGVyeSUyMG9tZ3xlbnwwfHwwfHx8MA%3D%3D')",
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
            Gallery
          </h1>
          <p className="" style={{ color: "InfoBackground" }}>
            Travels,Photos,Reels and Your Moments
          </p>
        </div>
      </section>

      {/* 2nd part */}

      <section className="container my-5">
        <h2 className="fw-bold text-center mb-4">Photo Gallery</h2>

        <div className="row g-3">
          <div className="col-12 col-sm-6 col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1498473956271-69e18b4dde5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbGxlcnklMjBvbWd8ZW58MHx8MHx8fDA%3D"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1706023303251-d1fece103464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsbGVyeSUyMG9tZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1596649300028-340ad0ec6146?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsbGVyeSUyMG9tZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1743119638006-a01d4625745d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FsbGVyeSUyMG9tZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1706022626447-00c598315c09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbGxlcnklMjBvbWd8ZW58MHx8MHx8fDA%3D"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1700241547646-51d1ebb966bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbGxlcnklMjBvbWd8ZW58MHx8MHx8fDA%3D"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 3rd part */}
      <section class="container my-5">
        <h2 class="fw-bold text-center mb-4">Travel Video Reels</h2>

        <div class="row g-4">
          {/* <!-- Video Thumb --> */}
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="video-card position-relative overflow-hidden rounded-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMHZpZGVvfGVufDB8fDB8fHww"
                class="img-fluid"
                style={{height:"300px"}}
              />
              <div class="play-icon text-center">
                <i class="bi bi-play-circle-fill"></i>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4">
            <div class="video-card position-relative overflow-hidden rounded-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1484506399805-c273b8e91dce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwdmlkZW98ZW58MHx8MHx8fDA%3D"
                className="img-fluid"
                style={{height:"300px"}}
              />
              <div className="play-icon text-center">
                <i className="bi bi-play-circle-fill"></i>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4">
            <div class="video-card position-relative overflow-hidden rounded-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1517411020229-9cbb75afed2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwdmlkZW98ZW58MHx8MHx8fDA%3D"
                className="img-fluid"
                style={{height:"300px"}}
              />
              <div className="play-icon text-center">
                <i className="bi bi-play-circle-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4th part */}
      <section className="container my-5 py-4">
  <h2 className="fw-bold text-center mb-4">User Memories</h2>
  <p className="text-muted text-center mb-5">Beautiful moments captured by our travelers</p>

  <div class="row g-4">

    {/* <!-- User 1 --> */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="memory-card text-center">
        <div className="memory-img-wrapper overflow-hidden rounded-4 shadow-sm">
          <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"className="img-fluid rounded-4" style={{height:"300px"}}/>
        </div>
        <h6 className="mt-3 fw-bold">A Trip to the Mountains</h6>
        <p className="text-muted small">– Rohan Sharma</p>
      </div>
    </div>

    {/* <!-- User 2 --> */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="memory-card text-center">
        <div className="memory-img-wrapper overflow-hidden rounded-4 shadow-sm">
          <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww" className="img-fluid rounded-4"  style={{height:"300px"}} />
        </div>
        <h6 className="mt-3 fw-bold">Sunset at Bali Beach</h6>
        <p className="text-muted small">– Sid Malhotra</p>
      </div>
    </div>
{/* 
    <!-- User 3 --> */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="memory-card text-center">
        <div className="memory-img-wrapper overflow-hidden rounded-4 shadow-sm">
          <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid rounded-4"  style={{height:"300px"}} />
        </div>
        <h6 className="mt-3 fw-bold">Adventure in Dubai</h6>
        <p className="text-muted small">– Kabir Singh</p>
      </div>
    </div>

    {/* <!-- User 4 --> */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="memory-card text-center">
        <div className="memory-img-wrapper overflow-hidden rounded-4 shadow-sm">
          <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid rounded-4"  style={{height:"300px"}} />
        </div>
        <h6 className="mt-3 fw-bold">Exploring the Forest Trails</h6>
        <p className="text-muted small">– Aisha Khan</p>
      </div>
    </div>

  </div>
</section>

      





    </div>
  );
}

export default Gallery;
