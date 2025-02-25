import "./styles.css";

function flatten(arr) {
  let accum = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      accum = accum.concat(flatten(val));
    } else {
      accum.push(val);
    }
  }
  return accum;
}

function flatten2(arr) {
  const ans = arr.reduce(
    (acum, curr) =>
      Array.isArray(curr) ? acum.concat(flatten2(curr)) : acum.concat(curr),
    []
  );
  return ans;
}

export default function App() {
  const nestedArray = [1, [2, [3, [4, 5]]], 6];
  const flattened = flatten2(nestedArray);
  console.log(flattened);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <span>Flattened Array: {JSON.stringify(flattened)}</span>
      </div>
    </div>
  );
}
