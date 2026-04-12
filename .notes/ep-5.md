# React folder sturcture
 - react doesn't have any standard folder stucture
  - but we can have all our component in src/components
      - component's file name can be same as component name
      - eg: const Header = () => {} / fileName - Header.js / Header.jsx / Header.tsx

# export and imports
 - 2 types of exports
    1. default - export default Header;
       import - import Header path
    2. Named export - export const Header = () => {}
       Named import - import { Header } path

 # State variables
    - with normal javascript variable, UI wont get updated by react. for that we need to use State variables

# React Hooks
- normal javascript function given by React to manipulate the DOM
  - react sync with data layer always, whenever the data changes react will re-render the ui

- react is fast cause of fast DOM manipulation

   # important hooks
    - useState() - super powerfull state varibale in React
    - useEffect()

  # useState()
    - state variable
       const [variableName] = useState(defaultValue)

    - whenever the state variable changes/updates, React will re-render the component
       // to update the variable
       const [variableName, setVariableName] = useState(defaultValue)
       setVariableName(updatedValue)

    - normal js varibale
      const variablename = [];
