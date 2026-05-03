# useEffect
  - use effect will be called once after the component renders
  - if no dependency array => useEffect is called on every render
  - if dependency array is empty => useEffect will called on initial render (only one time)
  - if dependency array has state variable mention inside it => useEffect will get called each time when the variable is updated


 useEffect( () => {}, dependency array )


 # Routing in React
  - npm i react-router-dom

  - to create router configuration 
       import {createBrowserRouter, RouterProvider} from 'react-router-dom'

       createBrowserRouter(config)
       config = [{path: '/', element: component name}]
  - to provider the router to our app 
      import {routerProvider} from 'react-router-dom'
      root.render(<RouterProvider router={routeConfig} />)

      instead of rendering the app component in the router-dom, we will provide this router into root DOM

  - falback route / wildcard route
     in the default route, we can give the fallback error component as # ErrorElement
     // Hook which captures error related to our app
    const error = <useRouteError()>;

# Outlet - to render the route component
# link - to navigate to the specific route path from UI without reloading the page
  - <Link to="/home">Home</Link> - link is a component


# 2 types of Routing in web application
1. server side routing - when making a network call (/home), server will fetch the home html and renders in the UI after reloading
2. client side routing - all the components will be available at the initial load itself. and when router changes, components will be replaced/ refreshed

# To get the route parameter from the dynamic route
    " path/:id"

# useParam() Hook - return object with route parameter
   // import { useParam } from 'react-router-dom'
   - const {id} = useParam();



