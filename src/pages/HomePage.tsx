import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import PostsBoard from "../components/PostsBoard";
import DarkModeButton from "../components/DarkModeButton";

export default function HomePage() {
    const theme = useTheme();
    const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <Container sx={{ position: "relative" }}>

                <Typography
                    color="text.primary"
                    gutterBottom
                    sx={{
                        marginTop: 2, typography: { xs: 'h4', sm: 'h3', md: 'h2' },
                        textAlign: { xs: "left", md: "center" }
                    }}
                >
                    Posts Website
                    <Box sx={{ position: "absolute", right: "0.5rem", top: "50%", transform: "translate(0, -50%)" }}>
                        <DarkModeButton fontSize={lessThanSmall ? "2rem" : "3rem"} />
                    </Box>

                </Typography>
            </Container>

            <PostsBoard />
        </>
    )
}
