import { render, screen } from "@testing-library/react"
import PostCard from "../PostCard"
import { Post } from "../../features/posts/posts-api-slice"
import { BrowserRouter } from "react-router-dom"

const mockPost: Post = {
    id: 1,
    userId: 1,
    body: "testing body",
    title: "testing title",
}



const MockPostCard = ({ post }: { post: Post }) => {
    return (
        <BrowserRouter>
            <PostCard post={post} />
        </BrowserRouter>
    )
}

describe("PostCard", () => {
    it("should only have 1 button", () => {
        render(<MockPostCard post={mockPost} />);
        const buttonElement = screen.getAllByRole("button");
        expect(buttonElement.length).toBe(1);
    })

    it("should show the title", () => {
        render(<MockPostCard post={mockPost} />);
        const cardTitle = screen.getByTestId("postCard-title");
        expect(cardTitle.textContent).toEqual(mockPost.title);
    })
})