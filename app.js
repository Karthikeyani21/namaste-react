import React from "react";
import ReactDOM from "react-dom/client"

// react element -> object -> after render -> htmlElement
// const jsxHeading = <h1>heading inside JSX 🚀</h1>

// React component
const JsxHeading = () => (
   <h1>heading  inside JSX 🚀</h1>
);

// React component
// Functioal component - new
// class based component - old

// react element
const jsVariable = (
    <h1>javascript variable inside JSX 👌</h1>
)

// functional component - normal js function which returns ReactElement which is JSX
const FunctionalComponent = () => {
    return (
        <div className="container">
            {jsVariable}
            <JsxHeading/>
            <h1>Namaste React Functional Component 💕🚀</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading)

// render component

root.render(<FunctionalComponent/>)

