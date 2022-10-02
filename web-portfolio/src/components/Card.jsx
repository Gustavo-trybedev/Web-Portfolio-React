import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@material-ui/core/Link';

export default function MediaCard({ cardDescription, cardTitle, cardAlt, imgSRC, repoLink }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= { imgSRC }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { cardTitle }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { cardDescription }
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={ repoLink }>      
        <Button size="small">Visite o repositório</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
