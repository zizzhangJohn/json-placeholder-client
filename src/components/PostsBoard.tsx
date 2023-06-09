import { useGetPostsQuery } from "../features/posts/posts-api-slice";
import { Box, CircularProgress, Container, Pagination, useMediaQuery, useTheme } from "@mui/material";
import PostCard from "./PostCard";
import AlertBox from "./AlertBox";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function PostsBoard({ }) {
    const [searchParams, setSearch] = useSearchParams();
    const navigate = useNavigate();


    const page = searchParams.get('page')
        ? Number(searchParams.get('page')) : 1;
    const postsPerPage = 12;
    const startIndex = (page - 1) * postsPerPage;
    const { data, isFetching, error, isError } = useGetPostsQuery({ start: startIndex, limit: postsPerPage });
    const maxPage = !isFetching ? Math.ceil((data!.totalCount) / postsPerPage) : 0;
    const handlePageChange = (_: React.ChangeEvent<unknown>, pageNumber: number) => {
        if (pageNumber === 1) {
            navigate("/");
        }
        else {
            setSearch({ page: pageNumber.toString() })
        }
    }

    const theme = useTheme();
    const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

    if (isError) {
        if (process.env.DEV) {
            console.log(error)
        }
        return (
            <AlertBox message="Error fetching post data, try again later" />
        )
    }

    if (data?.posts.length === 0) {
        return (<AlertBox message="There is no post on this page, go back please" />)
    }
    return (
        <Container>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr"
                    },
                    gridAutoRows: "1fr",
                    gridGap: "0.5rem",
                }}

            >
                {isFetching ? <CircularProgress data-testid="postBoard-spinner" sx={
                    {
                        position: "fixed",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }
                } /> :
                    data!.posts.map((post, index) => (
                        <PostCard post={post} key={index} />
                    ))
                }
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                }}
            >
                {isFetching ? <></> :
                    <Pagination
                        page={page}
                        count={maxPage}
                        color="primary"
                        onChange={handlePageChange}
                        size={lessThanSmall ? "small" : "large"}
                    />}
            </Box>
        </Container>
    )
}

