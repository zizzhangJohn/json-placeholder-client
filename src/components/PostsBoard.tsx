import { useGetPostsQuery } from "../features/posts/posts-api-slice";
import { Box, CircularProgress, Container, Pagination, useMediaQuery, useTheme } from "@mui/material";
import PostCard from "./PostCard";
import AlertBox from "./AlertBox";
import { useSearchParams } from "react-router-dom";

export default function PostsBoard({ }) {
    const [searchParams, setSearch] = useSearchParams();
    const page = Number(searchParams.get('page'));
    const postsPerPage = 12;
    const startIndex = page !== 0 ? (page - 1) * postsPerPage : 0;
    const { data, isFetching, error, isError } = useGetPostsQuery({ start: startIndex, limit: postsPerPage });
    const maxPage = !isFetching ? Math.ceil((data!.totalCount) / postsPerPage) : 0;

    const handlePageChange = (_: React.ChangeEvent<unknown>, pageNumber: number) => {
        setSearch({ page: pageNumber.toString() })
    }

    const theme = useTheme();
    const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

    if (isError) {
        if (import.meta.env.DEV) {
            console.log(error)
        }
        return (
            <AlertBox message="Error fetching post data, try again later" />
        )
    }

    if (data?.posts.length === 0) {
        return (<AlertBox message="There is nothing here, go back pls" />)
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
                    gridTemplateRows: {
                        xs: "repeat(12, 1fr)",
                        sm: "repeat(6, 1fr)",
                        md: "repeat(4, 1fr)"
                    },
                    gridGap: "0.5rem",
                }}

            >
                {isFetching ? <CircularProgress sx={
                    {
                        position: "fixed",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }
                } /> :
                    data?.posts.map((post, index) => (
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

