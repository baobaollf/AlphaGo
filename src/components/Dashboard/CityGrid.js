import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 380,
        backgroundColor: "transparent",
    },
    gridroot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(5),
    },
    gridList: {
        flexWrap: 'wrap',
        height: 625,
        width: 300,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

export default function CityGrid(props) {
    const classes = useStyles();

    const createGridList = (data) => {

        return data.map((point) => (
            <GridListTile key={point.id}>
                <img onClick={() => props.setCity(point.name + ", " + point.country)} src={point.images[0]} alt=" "/>}
                />
                <GridListTileBar
                    title={point.name}
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                />
            </GridListTile>
        ))
    }
    console.log(props.data)
    return (

        <div className="TopList">
            <div className="TopList-text">
                Alpha Cities
            </div>
            <List
                component="div"
                className={classes.root}
            >
                <div className={classes.gridroot}>
                    <GridList cellHeight={200} spacing={1} className={classes.gridList} cols={1}>
                        {props.data.default && createGridList(props.data.default)}
                    </GridList>
                </div>
            </List>
        </div>
    );
}