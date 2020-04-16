import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  card: {
    //display: 'flex',
    maxWidth: 300,
  },
  cardMedia: {
    height: 140,
  },
});

export default function CityInfo(props)  {

  const {info} = props;
  const classes = useStyles();
  const [color, setColor] = useState('disabled');

  const _setColor = () => {
    if (color === 'disabled') {
      setColor('secondary')
    } else {
      setColor('disabled')
    }
  }


  return (
    <div>
      <Card className={classes.card}>
          <CardMedia component="img" 
            className={classes.cardMedia} 
            image={info.img[0]} 
            />
          <CardContent>
            <Typography component="h2" variant="h5">
              {info.name}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              {info.snippet.substring(0,150) + "..."}
            </Typography>
            <FavoriteIcon 
              className="FavoriteIcon" 
              fontSize="large"
              color = {color}
            onClick={() => _setColor()}
            ></FavoriteIcon>
            <Typography variant="subtitle1" color="primary">
              <Link to = "" href="#" onClick={()=> console.log("more information")}>
                More information...
              </Link>
            </Typography>
          </CardContent>
      </Card>
    </div>    
  );  
}
