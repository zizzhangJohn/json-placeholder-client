import { Box, Link, Typography } from "@mui/material";

export default function NotFoundPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: "column",
                alignItems: 'center',
                gap: 1,
                minHeight: '100vh',
            }}
        >
            <Typography sx={{
                typography: {
                    xs: "h5",
                    sm: "h4",
                    md: "h3"
                },
                textAlign: "center"
            }}>
                You seem lost,<br /> there's nothing here
            </Typography>
            <Link href="/"
                sx={{
                    color: "primary.dark",
                    fontSize: {
                        sm: "1.5rem",
                        md: "1.75rem"
                    }
                }}
            >
                go back to home page
            </Link>
        </Box>
    )
}
