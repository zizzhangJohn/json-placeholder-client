import { useNavigate, useParams } from "react-router-dom";
import { useGetPostsByIdQuery } from "../features/posts/posts-api-slice";
import AlertBox from "../components/AlertBox";
import { Box, CircularProgress, Container, IconButton, Stack, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function PostPage() {
    const navigate = useNavigate();

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
        if (process.env.DEV) {
            console.log(error)
        }
        return (<AlertBox
            message={`Error fetching post with Id:${postId}, try again later`} />)
    }

    return (
        <Container>
            {/* mobile top bar*/}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "space-between",
                    borderTop: "1px solid",
                    borderBottom: "1px solid",
                    marginTop: 2,
                    marginBottom: 2,
                    py: 1
                }}
            >
                <Box display="flex">
                    <AccountCircleIcon
                        sx={{
                            width: "3.5rem",
                            height: "3.5rem",
                        }}
                    />
                    <Typography sx={{ mt: 0.85, ml: 1, textAlign: "center" }} color="text.secondary" >
                        {`user${post?.userId}`}
                    </Typography>
                </Box>
                <IconButton onClick={() => navigate(-1)}>
                    <ExitToAppIcon
                        sx={{
                            cursor: "pointer",
                            ':hover': {
                                color: "primary.main"
                            },
                            alignSelf: "center",
                            width: "2.5rem",
                            height: "2.5rem",
                        }}
                    />
                </IconButton>
            </Box>

            <Box
                sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
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

                {/* Desktop side bar */}
                <Stack
                    sx={{
                        alignItems: "center",
                        display: {
                            xs: "none",
                            md: "flex"
                        }
                    }}
                >
                    <AccountCircleIcon sx={{
                        width: "3.5rem",
                        height: "3.5rem",
                    }} />
                    <Typography sx={{ textAlign: "center" }} color="text.secondary" >
                        {`user${post?.userId}`}
                    </Typography>
                    <IconButton sx={{ mt: 0 }} onClick={() => navigate(-1)}>
                        <ExitToAppIcon
                            sx={{
                                cursor: "pointer",
                                ':hover': {
                                    color: "primary.main"
                                }
                            }}
                            fontSize="large"
                        />
                    </IconButton>
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
