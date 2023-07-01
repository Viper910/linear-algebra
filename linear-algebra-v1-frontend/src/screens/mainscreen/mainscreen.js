import { Link } from "react-router-dom";
import "./mainscreen.css";
export default function Mainscreen() {
  return (
    <div className="container main-div">
      <h2 className="mainscreen-heading">Mathematics</h2>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm d-flex align-items-center">
            <Link to="/elementarymath" className="ms-links">
              <img
                className="icon-image"
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/000000/math.png"
                alt="math"
              />
              Elementary Math
            </Link>
          </div>
          <div class="col-sm d-flex align-items-center">
          <Link to="/algebra" className="ms-links">
            <img
              className="icon-image"
              width="24"
              height="24"
              src="https://img.icons8.com/ios/24/000000/formula-fx.png"
              alt="formula-fx"
            />
            Algebra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
