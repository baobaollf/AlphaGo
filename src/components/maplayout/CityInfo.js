import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

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
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Card className={classes.card}>
          <CardMedia component="img" 
            className={classes.cardMedia} 
            image={"http://parisbym.com/wp-content/uploads/2014/06/paris_1984746c-300x187.jpg"} 
            />
          <CardContent>
            <Typography component="h2" variant="h5">
              {info.properties.NAME}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              {info.properties.DESCRIPTIO}
            </Typography>
            <span>Add to plan</span>
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
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
