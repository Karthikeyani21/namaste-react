

// integration testing - testing the flow of application

import { act, fireEvent, render, screen } from "@testing-library/react"
import { RestroContainer } from "../RestroContainer"
import MOCK_DATA from "../mock/restroListMock.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("should render the RestroContainer component with search button", async() => {

    // render the body component 
    // wrap with act() - state managing compnent
    // uses fetch browser method which we need to mock for testing
    await act(async () => {
        render(
          <BrowserRouter>
             <RestroContainer></RestroContainer>
          </BrowserRouter>
       )
    })

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("inputText");
    //mocking the input change event
    fireEvent.change(searchInput, {target: {value: "i"}});

    fireEvent.click(searchBtn);

    const resCardList = await screen.findAllByTestId("resCard")

    expect(searchBtn).toBeInTheDocument();
    expect(resCardList.length).toBe(5)
})

it("should have all the restaurant cards", async() =>
{
    await act(async () => {
        render(
          <BrowserRouter>
             <RestroContainer></RestroContainer>
          </BrowserRouter>
       )
    })

    const resCardList = screen.getAllByTestId("resCard");
    expect(resCardList.length).toBe(8);
});

it("should filter top rated restaurant", async() =>
{
    await act(async () => {
        render(
          <BrowserRouter>
             <RestroContainer></RestroContainer>
          </BrowserRouter>
       )
    })

    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurant"});
    expect(topRatedButton).toBeInTheDocument();

    const resCardList = screen.getAllByTestId("resCard");
    expect(resCardList.length).toBe(8);


    fireEvent.click(topRatedButton);
    const topRestaurantList = screen.getAllByTestId("resCard");
    expect(topRestaurantList.length).toBe(4)
});
