import { IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleTheme } from "../features/themes/theme-slice";

type DarkModeButtonProps = {
    fontSize: string
}
export default function DarkModeButton({fontSize}:DarkModeButtonProps) {
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector((state) => state.theme.darkMode);

    function handleClick() {
        dispatch(toggleTheme())
    }
    return (
        <IconButton onClick={handleClick} color="inherit">
            {darkMode ? <Brightness7Icon sx={{ fontSize: fontSize }} /> : <Brightness4Icon sx={{ fontSize: fontSize }} />}
        </IconButton>
    )
}
