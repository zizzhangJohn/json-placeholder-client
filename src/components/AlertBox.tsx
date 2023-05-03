import { Alert, Box } from '@mui/material'
import "./alert.css"
interface AlertBoxProps {
    message: string;
}
export default function AlertBox({ message }: AlertBoxProps) {
    return (
        <Box>
            <Alert severity='error'>{message}</Alert>
        </Box>
    )
}