// import React, { Component } from "react";
// import { render } from "react-dom";

function Button() {
    return <button>Tag 1</button>
}

function AppLinks() {
    return (<>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
    </>)
}

ReactDOM.render(<Button />, document.getElementById("app-tags"))

ReactDOM.render(<AppLinks />, document.getElementById("app-links"))
