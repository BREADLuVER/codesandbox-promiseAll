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

export default function App() {
  const nestedArray = [1, [2, [3, [4, 5]]], 6];
  const flattened = flatten(nestedArray);
  console.log(flattened);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <span>flattened</span>
      </div>
    </div>
  );
}
