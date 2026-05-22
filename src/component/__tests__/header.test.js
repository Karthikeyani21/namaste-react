import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react"
import { BrowserRouter , MemoryRouter } from "react-router-dom"
import { Header } from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import '@testing-library/jest-dom'

it("should render header comp with login button", ()=> {
    render(
        //header comp uses redux and react-router-dom
       <BrowserRouter>
          <Provider store={appStore}>
             <Header></Header>
          </Provider>
       </BrowserRouter>
   )

   const loginButton = screen.getByRole("button", {name: "Login"});

   // assert 
   expect(loginButton).toBeInTheDocument()
})

it("should change the button label from login to loout on click", ()=> {
    render(
        //header comp uses redux and react-router-dom
       <BrowserRouter>
          <Provider store={appStore}>
             <Header></Header>
          </Provider>
       </BrowserRouter>
   )

   const loginButton = screen.getByRole("button", {name: "Login"});

   // to mock the click event inside the testing DOM
   fireEvent.click(loginButton);
   const logoutButton = screen.getByRole("button", {name: "Logout"})

   // assert 
   expect(logoutButton).toBeInTheDocument()
})

it("should render header comp has cart has 0 item", ()=> {
    render(
        //header comp uses redux and react-router-dom
       <BrowserRouter>
          <Provider store={appStore}>
             <Header></Header>
          </Provider>
       </BrowserRouter>
   )

   const cart = screen.getByText("Cart (0)");

   // assert 
   expect(cart).toBeInTheDocument()
})

it("should render header comp has cart item", ()=> {
    render(
        //header comp uses redux and react-router-dom
       <MemoryRouter>
          <Provider store={appStore}>
             <Header></Header>
          </Provider>
       </MemoryRouter>
   )

   const cart = screen.getByText(/Cart/);

   // assert 
   expect(cart).toBeInTheDocument()
})