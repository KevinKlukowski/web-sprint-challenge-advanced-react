import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name:/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)
    const submitButton = screen.getByTestId("successButton")

    fireEvent.change(firstNameInput, {target: {value: 'Kevin' }})
    fireEvent.change(lastNameInput, {target: {value: 'Klukowski'}})
    fireEvent.change(addressInput, {target: {value: "Trisha Paytas' house"}})
    fireEvent.change(cityInput, {target: {value: 'Los Angeles'}})
    fireEvent.change(stateInput, {target: {value: 'CA'}})
    fireEvent.change(zipInput, {target: {value: 'maybe 90210'}})
    fireEvent.click(submitButton);

    expect(firstNameInput).toHaveValue('Kevin')
    expect(lastNameInput).toHaveValue('Klukowski')
    expect(addressInput).toHaveValue("Trisha Paytas' house")
    expect(cityInput).toHaveValue('CA')
    expect(zipInput).toHaveValue('maybe 90210')
});
