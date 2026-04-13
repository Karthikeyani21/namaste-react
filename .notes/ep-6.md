# Micro service Architecture
   - separate repo for each service - BE, FE, DB, Auth
   - separation of control - single responsibility principle - each has its own work

we can make an api call and render the data in two ways

1. load UI -> api call -> render
     - this will make the UI froze for seconds
2. load UI -> render -> api -> render again
   - better UX, followed in react

# useEffect Hook
  - useEffect is a js function, which takes 2 arguments
  - will gets called once after the component renders
     useEffect(callback fn, [])

# useState
  - when ever the useState variable value changes, react will re-render the whole component with reconciliation (react triggers reconciliation cycle)
     - reconcilation - react will create a diff tree with prev and new virtual DOM, so it will only update the Actual DOM with modified value alone