style should be added inside JSX as an javascript object
const styleCard = {
    backgroundColor: "red",
    color: "white"
}
<div style={styleCard}></div>
<div style={{backgroundColor: "red"}}></div> 


to dynamically pass data to component is known as Props
since functional component are js function its an arguments


# props
react will wrap all the properities of its component into object and passed as an argument to the function

const comp = (props) => {
    return <h1>{props.name}</h1>
}

<comp name="karthi"/>


# Config Driven UI - controlling the UI based on the config/data

when using map filter in react, we need to give unique key. Otherwise react will give warning in the console.
   - since all the items has unique key, it will re-render only the recently added item in the array by the key
   - when give unique key, we should not use index. key={index} - bad practice

# not using key(not acceptable) <<<<<<<< index as key <<<<<<<<<< unique id (best) 

