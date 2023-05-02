import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Post } from "../features/posts/posts-api-slice"

type PostCardProps = {
    post: Post
}
export default function PostCard({ post }: PostCardProps) {

    const truncateTitle = (title: string) => {
        return title.length > 60 ? title.substring(0, 60) + "..." : title;
    }

    const bodyPreview = (body: string) => {
        return body.substring(0, 80) + "...";
    }

    return (
        <Card sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}
            variant="outlined"
        >
            <CardContent
                sx={{
                    paddingBottom: "0%",
                    minHeight: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="subtitle1" component="div" textTransform={"uppercase"}
                    fontWeight='fontWeightMedium'
                >
                    {truncateTitle(post.title)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                    {`user${post.userId}`}
                </Typography>
                <Typography variant="body2">
                    {bodyPreview(post.body)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => window.open(`/post/${post.id}`)}>Read More</Button>
            </CardActions>
        </Card>
    )
}
