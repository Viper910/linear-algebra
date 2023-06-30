import { useState } from "react";
import { postToSolve } from "../../service/elementarymath";
export default function Elementarymath() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState();

  const onSubmitHandler = () => {
    const data = {
      expression: expression,
    };
    postToSolve(data)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>ElementaryMath</h1>
      <div class="input-group input-group-sm mb-3">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="input Ex: 2+3"
          onChange={(e) => setExpression(e.target.value)}
        />
        <div class="input-group-append">
          <button
            class="input-group-text"
            id="inputGroup-sizing-sm"
            onClick={onSubmitHandler}
          >
            =
          </button>
        </div>
      </div>
      {result ? (
        <>
          {console.log(result)}
          <h3>Input:{result.input}</h3>
          <h3>Output:{result.output}</h3>
          <h3>Number Name:{result.numbername}</h3>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
