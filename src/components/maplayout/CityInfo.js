import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import {Link} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import backupImg from "../../assets/images/mapbackground.png"
//import {TripdataContext} from "../../contexts/TripdataContext";

const useStyles = makeStyles({
    card: {
        //display: 'flex',
        maxWidth: 300,
    },
    cardMedia: {
        height: 140,
    },
});


export default function CityInfo(props) {

    const {info} = props;
    const {addItem, deleteByLoop} = props;
    const classes = useStyles();
    const [color, setColor] = useState(info.inPlan === true ? 'secondary' : 'disabled');
    useEffect(
        () => {
           setColor(info.inPlan === true ? 'secondary' : 'disabled');
        },
        [info.inPlan],
    );

    const _setColor = () => {
        if (color === 'disabled') {
            addItem(info);
            setColor('secondary')
        } else {
            deleteByLoop(info);
            setColor('disabled')
        }
    }
    
    return (

        <div>
            <Card className={classes.card} style={{cursor: "pointer"}}>
                <CardMedia component="img"
                           className={classes.cardMedia}
                           image={info.images.length !== 0 ? info.images[0] : backupImg}
                />
                <CardContent>
                    <Typography component="h2" variant="h5">
                        {info.name}
                    </Typography>
                    <Typography variant="body2" component="p" color="textSecondary">
                      {info.snippet.length > 150 ? info.snippet.substring(0, 150) + "..." : info.snippet}
                    </Typography>
                    <FavoriteIcon
                        className="FavoriteIcon"
                        fontSize="large"
                        color={color}
                        onClick={(item) => {
                            _setColor();
                            // console.log(info);

                        }}/>

                    <Typography variant="subtitle1" color="primary">
                        <p to="#" href="#" onClick={() => console.log("more information")}>
                            More information...
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
