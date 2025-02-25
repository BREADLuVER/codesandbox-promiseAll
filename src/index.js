import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import promiseAll from "./promiseUtils";

promiseAll([
  Promise.resolve(3),
  42,
  new Promise((resolve) => setTimeout(() => resolve("foo"), 100)),
])
  .then((result) => {
    console.log("Resolved before rendering:", result);
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);

    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  })
  .catch(console.error);
