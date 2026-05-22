import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("should load the contact component with heading element", () => {
    // to render the comp inside jsdom
    render(<Contact/>);

    // screen - to check the details/ elements to verify whether the component loaded inside the dom or not
    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument()
})

test("should have button element", ()=> {
    render(<Contact></Contact>);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
})

test("should have 2 input element", ()=> {
    render(<Contact></Contact>);

    const input = screen.getAllByRole("textbox");
    // console.log(input)  returns jsx(react element)
    expect(input.length).toBe(2);
})