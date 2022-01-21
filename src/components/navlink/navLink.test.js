import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import NavLink from '.'


test("Making First react", () => {
    render(<NavLink children={"hi"} />)
        ;
    const LinkElement = screen.getByTestId('learn-react')

    expect(LinkElement).toBeInTheDocument()
    expect(LinkElement).toHaveTextContent("hi")
})


test("testing Link tag with snapshot", () => {
    const linkTag = renderer.create(<NavLink children={"HI there"} />)
    const json = linkTag.toJSON()
})