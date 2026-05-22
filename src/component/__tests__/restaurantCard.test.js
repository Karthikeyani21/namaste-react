import { render, screen } from "@testing-library/react"
import RestroCards from "../RestroCards"
import RES_MOCK from "../mock/restroCardMock.json"
import '@testing-library/jest-dom'

it("should render the restaurant card component with props", ()=> {
    render(<RestroCards resData={RES_MOCK}></RestroCards>)

    const name = screen.getByText("KFC");
    expect(name).toBeInTheDocument()
})

