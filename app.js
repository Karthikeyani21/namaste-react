// react code

// create an element + content using React
const heading = React.createElement("h1", {id: 'heading', xyz: 'attribute'}, "Hellow world from React...!!");

// create Root element in the react dom
const root = ReactDOM.createRoot(document.getElementById('root'))

// inject the content into the root
root.render(heading)


// create nested element

{/* <div id="parent">
    <div id="child">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div", {id: 'parent'},
                      React.createElement("div", {id: 'child'},
                        React.createElement("h1", {}, "h1 tag")
                        // array of children idenridied using keys
                        //  [React.createElement("h1", {}, "h1 tag"),
                        //   React.createElement("h2", {}, "h2 tag")
                        //  ]
                      )
)