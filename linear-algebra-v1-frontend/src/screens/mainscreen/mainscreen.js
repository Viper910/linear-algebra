import { Link } from "react-router-dom";
import "./mainscreen.css";
export default function Mainscreen() {
  return (
    <>
      <div className="container-fluid mainscreen-top-card">
        <h2 className="mainscreen-top-card-header">Mathematics</h2>
        <p>
          Get help with math homework, solve specific math problems or find
          information on mathematical subjects and topics.Get help with math
          homework, solve specific math problems or find information on
          mathematical subjects and topics.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <Link to="/elementarymath"><h5 class="card-title">Elementary Mathematics</h5></Link>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Do basic arithmetic. Work with fractions, percentages and
                  similar fundamentals. Solve place value and word problems.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Algebra</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Find roots of and expand, factor or simplify mathematical
                  expressions everything from polynomials to fields and groups.
                </p>
              </div>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Linear Algebra</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Solve line equation.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            
          </div>
        </div>
      </div>
    </>
  );
}
