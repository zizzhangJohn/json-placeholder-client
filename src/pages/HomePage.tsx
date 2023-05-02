import { Typography } from "@mui/material";
import { Outlet} from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <Typography
                align="center"
                color="text.primary"
                gutterBottom
                sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' } }}
            >
                Posts Website
            </Typography>
            <Outlet />
        </>
    )
}
