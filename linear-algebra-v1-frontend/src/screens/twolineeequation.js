import { useEffect, useState } from "react";
import { postToSolve } from "../service/twolineequation";
export default function Twolineequation() {
  const equation = {
    a: "",
    b: "",
    c: "",
  };

  const [equation1, setEquation1] = useState(equation);
  const [equation2, setEquation2] = useState(equation);
  const [img, setImg] = useState(false);
  const [result, setResult] = useState(null);
  const onSubmitHandler = async () => {
    const requestdata = [equation1, equation2];
    postToSolve(requestdata)
      .then((res) => {
        const timestamp = new Date().getTime();
        res.data.graph = res.data.graph + "?t=" + timestamp;
        setResult(res.data);
      })
      .catch((err) => console.log(err));
  };

  const graphHandler = async () => {
    setImg(!img);
  };

  console.log(result);
  useEffect(() => {}, [result]);

  return (
    <>
      <div className="d-flex p-3 justify-content-center align-middle">
        <input
          className="input-group-text input"
          placeholder="a"
          type="number"
          onChange={(e) => setEquation1({ ...equation1, a: e.target.value })}
        />
        <span> x + </span>
        <input
          className="input-group-text input"
          placeholder="b"
          type="number"
          onChange={(e) => setEquation1({ ...equation1, b: e.target.value })}
        />
        <span> y = </span>
        <input
          className="input-group-text input"
          placeholder="c"
          type="number"
          onChange={(e) => setEquation1({ ...equation1, c: e.target.value })}
        />
      </div>
      <div className="d-flex p-3 justify-content-center align-middle">
        <input
          className="input-group-text input"
          placeholder="a"
          type="number"
          onChange={(e) => setEquation2({ ...equation2, a: e.target.value })}
        />
        <span> x + </span>
        <input
          className="input-group-text input"
          placeholder="b"
          type="number"
          onChange={(e) => setEquation2({ ...equation2, b: e.target.value })}
        />
        <span> y = </span>
        <input
          className="input-group-text input"
          placeholder="c"
          type="number"
          onChange={(e) => setEquation2({ ...equation2, c: e.target.value })}
        />
      </div>
      <div className="container text-center">
        <button type="button" class="btn btn-dark" onClick={onSubmitHandler}>
          Solve
        </button>
      </div>
      {result ? (
        <div className="container">
          <p class="h3">TYPE OF SOLUTION</p>
          <p class="font-weight-normal mt-4">{result.typeofsoln.reason}.</p>
          <p class="font-weight-normal">
            So the solution type , {result.typeofsoln.type}.
          </p>
          <p class="h3 mt-4">SOLUTION OF THE EQUATION</p>
          <p class="mt-4">
            {" "}
            The solution of the equation{" "}
            <span className="font-weight-bold">
              {result.equation1}
            </span> and{" "}
            <span className="font-weight-bold">{result.equation2}</span> is x=
            {result.solution.x} y={result.solution.y}.
          </p>
          {img ? (
            <img className="img-fluid" src={result.graph} alt="output.jpeg" />
          ) : (
            <></>
          )}
          <button className="btn btn-dark" onClick={graphHandler}>
            {!img ? "Show Graph" : "Close Graph"}
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
