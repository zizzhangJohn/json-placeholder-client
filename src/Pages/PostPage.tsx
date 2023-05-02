import { useParams } from "react-router-dom";
import { useGetPostsByIdQuery } from "../features/posts/posts-api-slice";
import AlertBox from "../components/AlertBox";
import { Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function PostPage() {
    const params = useParams();
    const postId = Number(params.postId);
    const { data: post, isFetching, error, isError } = useGetPostsByIdQuery(postId);

    if (isFetching) {
        return (<CircularProgress
            sx={{
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
            }} />
        )
    }

    if (isError) {
        if (import.meta.env.DEV) {
            console.log(error)
        }
        return (<AlertBox
            message={`Error fetching post with Id:${postId}, try again later`} />)
    }

    return (
        <Container>
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    borderTop: "1px solid",
                    borderBottom: "1px solid",
                    marginBottom: 2
                }}
            >
                <AccountCircleIcon
                    sx={{
                        width: "3rem",
                        height: "3rem",
                    }}
                />
                <Typography sx={{ mt: 0.85, ml: 1, textAlign: "center" }} color="text.secondary" >
                    {`user${post?.userId}`}
                </Typography>
            </Box>

            <Box
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <Typography
                    align="left"
                    color="text.primary"
                    gutterBottom
                    textTransform={"uppercase"}
                    sx={{ typography: { xs: 'h5', sm: 'h4', md: 'h3' }, marginRight: { md: "1rem" } }}
                >
                    {post?.title}
                </Typography>
                <Stack
                    sx={{
                        alignItems: "center",
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    }}
                >
                    <AccountCircleIcon sx={{
                        width: "4rem",
                        height: "4rem",
                    }} />
                    <Typography sx={{ mb: 1.5, textAlign: "center" }} color="text.secondary" >
                        {`user${post?.userId}`}
                    </Typography>
                </Stack>
            </Box>
            <Typography
                align="left"
                color="text.primary"
                gutterBottom
                sx={{ typography: { xs: 'body2', sm: 'body1' } }}
            >
                {post?.body}
            </Typography>
            <br />
            <Typography
                align="left"
                color="text.primary"
                gutterBottom
                sx={{ typography: { xs: 'body2', sm: 'body1' } }}
            >
                {post?.body}
            </Typography>
            <Typography
                align="left"
                color="text.primary"
                gutterBottom
                sx={{ typography: { xs: 'body2', sm: 'body1' } }}
            >
                {post?.body}
            </Typography>
        </Container>
    )

}
