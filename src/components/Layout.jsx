import { useState, useLayoutEffect } from "react";
// import "./App.css";
function Layout() {
  const [value, setValue] = useState(0);
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  //   const [value, setValue] = useState(0);
  //   useEffect(() => {
  //     if (value === 0) {
  //       setValue(10 + Math.random() * 200);
  //     }
  //   }, [value]);
  console.log("render", value);
  return (
    <div className="App">
      <p>Value: {value}</p>
      <button onClick={() => setValue(0)}>Generate Random Value</button>
    </div>
  );
}
export default Layout;
