import "./algebra.css";
export default function Algebra() {
  return (
    <>
      <div className="container-fluid al-heading-div">
        <h2 className="al-heading">Algebra</h2>
        <p className="al-para">
          Algebra is one of the core subjects of mathematics. Algebra consists
          of the study of variables within number systems, along with operations
          that act on numbers and symbols
        </p>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm d-flex align-items-center">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Equation Solving</h5>
                <p class="card-text">
                  Solve equations in one variables both symbolically and
                  numerically.
                </p>
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="input Ex: x^2+2x+1=0"
                  />
                  <div class="input-group-append">
                    <button class="input-group-text" id="inputGroup-sizing-sm">
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm d-flex align-items-center">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Linear Equation 2 variable</h5>
                <p class="card-text">
                  Solve equations in 2 variables both symbolically and
                  numerically.
                </p>
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="input Ex: x+y=1,x-y=3"
                  />
                  <div class="input-group-append">
                    <button class="input-group-text" id="inputGroup-sizing-sm">
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm d-flex align-items-center">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Linear Equation</h5>
                <p class="card-text">
                  Solve equations in more than 2 variables both symbolically and
                  numerically.
                </p>
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="input Ex: x+y-z=1,x-y+z=3,x-y+z=3"
                  />
                  <div class="input-group-append">
                    <button class="input-group-text" id="inputGroup-sizing-sm">
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
