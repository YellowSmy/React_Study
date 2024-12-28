import React from "react";

function Movie ({props}) {
  return <h3>This is {props.fav} </h3>
}

function App() {
  return  <div>
      <h1>Hello</h1>
      <Movie fav="0" />
      <Movie fav="1" />
      <Movie fav="2" />
    </div>;
}

export default App;
