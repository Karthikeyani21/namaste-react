# foundation

script to run npx parcel index.js

package.jon - script : { start: "parcel index.html"}
- npm start/ npm run start -  to run the script

npm start	Shortcut for start script
npm run start	Standard way (works for all scripts)



JSX - javascript XML
  - not html inside JS
  - html-like or xml-like syntax

js engine wont understand jsx code

JSX -> tranplied by parcel(babel) -> browser js engine
   Babel - javascript compiler / transpiler

JSX -> React.CreateElement() by babel -> React element-js Object -> HTML element(render)


attribute in JSX - JSX follows camelcase
class - className
tabindex - tabIndex

jsx has multiline - (<h1></h1>) wrap it with ()

React components
1. Functional component
2. class based component

1. Functional component - js function which return JSX
    - should follow the Pascal naming convention -> HeadingComponent = () => {}
    - to render the functional component root.render(<HeadingComponent/>)

Component composition - composing(adding) one component into another 

{} - we can write any js code inside {} in JSX
    <h1>something {variablefromJs}</h1>
    - jsx will sanitize the data before rendering into browser so that we can avoid mallicious data