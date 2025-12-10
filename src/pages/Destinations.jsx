import React from "react";

function Destinations() {
  return (
    <div>
      <header
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "300px",
          position: "relative",
          background:
            "url('https://images.unsplash.com/photo-1742079629935-64f626bb1c63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzdGluYXRpb24lMjBpbWFnZXMlMjBmb3IlMjBoZXJvJTIwc2VjdGlvbnxlbnwwfHwwfHx8MA%3D%3D')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* <div style={{position:"absolute",top:"0",left:"0",width:"100vh",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)"}}>

       </div> */}

        <div className="container" style={{ position: "absolute", zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Explore Destinations</h1>
          <p className="mt-5 lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, omnis!
          </p>
        </div>
      </header>

      {/* cards */}

      <div className="container">
        <div className="row mt-4 g-1 ">
          {/* card 1 */}
          <div className="col-md-4 shadow-lg border-0 rounded-4">
            <div className="card-data mt-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZGVzdGluYXRpb25zfGVufDB8fDB8fHww"
                alt="img1"
                className="card-img-top img-fluid rounded-top"
                style={{ width: "350px", objectFit: "cover" }}
              />
              <div className="text-center">
                <h6 className="fw-bold">New York</h6>
                <p className="text-muted mb-1">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="col-md-4  shadow-lg border-0 rounded-4">
            <div className="card-data mt-3">
              <img
                src="https://images.unsplash.com/photo-1610985296734-4030cece6149?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwZGVzdGluYXRpb25zfGVufDB8fDB8fHww"
                alt="img1"
                className="card-img-top img-fluid rounded-top"
                style={{ width: "350px", objectFit: "cover" }}
              />
              <div className="text-center">
                <h6 className="fw-bold">Australia</h6>
                <p className="text-muted mb-1">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="col-md-4  shadow-lg border-0 rounded-4">
            <div className="card-data mt-3">
              <img
                src="https://images.unsplash.com/photo-1593186344142-ef775a6e596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZGVzdGluYXRpb25zfGVufDB8fDB8fHww"
                alt="img1"
                className="card-img-top img-fluid rounded-top"
                style={{ width: "350px", objectFit: "cover" }}
              />
              <div className="text-center">
                <h6 className="fw-bold">Brazil</h6>
                <p className="text-muted mb-1">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="col-md-4  shadow-lg border-0 rounded-4">
            <div className="card-data mt-3">
              <img
                src="https://images.unsplash.com/photo-1664834681908-7ee473dfdec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZGVzdGluYXRpb25zfGVufDB8fDB8fHww"
                alt="img1"
                className="card-img-top img-fluid rounded-top"
                style={{ width: "350px", objectFit: "cover" }}
              />
              <div className="text-center">
                <h6 className="fw-bold">Los Angeles</h6>
                <p className="text-muted mb-1">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="col-md-4  shadow-lg border-0 rounded-4">
            <div className="card-data mt-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwZGVzdGluYXRpb25zfGVufDB8fDB8fHww"
                alt="img1"
                className="card-img-top img-fluid rounded-top"
                style={{ width: "350px", objectFit: "cover" }}
              />
              <div className="text-center">
                <h6 className="fw-bold">Newzealand</h6>
                <p className="text-muted mb-1">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div className="col-md-4  shadow-lg border-0 rounded-4">
            <div className="card-data mt-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1673240367192-c51280d8b9b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXV0aWZ1bCUyMGRlc3RpbmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="img1"
                className="card-img-top img-fluid rounded-top"
                style={{ width: "350px", objectFit: "cover" }}
              />
              <div className="text-center">
                <h6 className="fw-bold">London</h6>
                <p className="text-muted mb-1">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Map section */}
      {/* <section>
        <h3>Location Map</h3>
        <div className="ratio rounded-4 shadow-sm overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d279901.97735940607!2d72.70405135259186!3d22.993428122124524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765270751624!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </section>
       */}
    </div>
  );
}

export default Destinations;
