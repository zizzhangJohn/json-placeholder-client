import { render, screen, waitFor } from "@testing-library/react"
import PostsBoard from "../PostsBoard"
import { providersWrapper } from "../../../test/__mocks__/server/testUtils"
import { BrowserRouter } from "react-router-dom"
import dummyPost from "../../../test/__mocks__/server/dummyPost"

const MockPostBoard = () => {
    return (
        <BrowserRouter>
            {providersWrapper(<PostsBoard />)}
        </BrowserRouter>
    )
}

describe("PostsBoard", () => {
    it("should display posts correctly", async () => {
        render(<MockPostBoard />);
        expect(screen.getByTestId("postBoard-spinner")).toBeInTheDocument();

        await waitFor(() => {
            const dummyTitle = screen.findByText(new RegExp(dummyPost.data[0].title, 'i'));
            const postCards = screen.queryAllByTestId("postCard");
            expect(dummyTitle).toBeInTheDocument;
            expect(postCards.length).toBe(dummyPost.data.length);
        })
        expect(screen.queryByTestId("postBoard-spinner")).not.toBeInTheDocument();
    })
})
