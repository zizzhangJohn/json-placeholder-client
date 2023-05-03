import { render, screen } from "@testing-library/react"
import AlertBox from "../AlertBox"

describe("AlertBox", () => {
    it('should render message properly', async () => {
        const message = "testing message";
        render(<AlertBox message={message} />);
        const textElement = screen.getByText(new RegExp(message, "i"));
        expect(textElement).toBeInTheDocument();
    })
})