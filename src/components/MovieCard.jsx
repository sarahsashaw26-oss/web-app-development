import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MovieCard({ movie }) {
    return (
        <Card sx={{ maxWidth: "50%", margin: '20px auto' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    // height="140"
                    image={movie.primaryImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.primaryTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {movie.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
