/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from '@testing-library/react'
import Counter from '../counter'

test("Cheack Couter Header", () => {
    const { getByTestId } = render(<Counter />)
    const headerEl = getByTestId("header")
    expect(headerEl).toBeInTheDocument()
    expect(headerEl.textContent).toBe("Counter NEW")
})

test("couter Value", () => {
    const { getByTestId } = render(<Counter />)
    const valueEl = getByTestId("value")
    expect(valueEl).toBeInTheDocument()
    expect(valueEl.textContent).toBe("0")
})

test("Input Field", () => {
    const { getByTestId } = render(<Counter />)
    const valueEl = getByTestId("input")
    expect(valueEl).toBeInTheDocument()
    expect(valueEl.value).toBe("0")
})


test("Plus btn", () => {
    const { getByTestId } = render(<Counter />)
    const valueEl = getByTestId("plus-btn")
    expect(valueEl).toBeInTheDocument()
    expect(valueEl.textContent).toBe("+")
})


test("Minus btn", () => {
    const { getByTestId } = render(<Counter />)
    const valueEl = getByTestId("minus-btn")
    expect(valueEl).toBeInTheDocument()
    expect(valueEl.textContent).toBe("-")
})


test("Set Counter Value", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input")
    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    })
    expect(inputEl.value).toBe("5")
})


test("Plus btn Clicked", () => {
    const { getByTestId } = render(<Counter />)

    const inputEl = getByTestId("input")
    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    })
    const btnEl = getByTestId("plus-btn")
    fireEvent.click(btnEl)

    const valueEl = getByTestId("value")
    expect(valueEl.textContent).toBe("5")
})

