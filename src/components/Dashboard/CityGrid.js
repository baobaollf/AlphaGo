import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CollectionsIcon from '@material-ui/icons/Collections';
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
        height: 600,
        width: 300,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

export default function CityGrid(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    // const createList = (data) => {
    //   return data.map((point) => (
    //     <ListItem button className={classes.nested}>
    //       <ListItemIcon>
    //         <StarBorder />
    //       </ListItemIcon>
    //       <ListItemText primary={point.name} />
    //     </ListItem>
    //   ))
    // }

    const createGridList = (data) => {

        // const iconStyle = {
        //     color: "#ffff",
        // }
        return data.map((point) => (
            <GridListTile key={point.id}>
                <img onClick={()=>props.setCity(point.name)} src={point.images[0]} alt=" "/>} />
                <GridListTileBar
                    title={point.name}
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                    // actionIcon={
                    //     {/*<IconButton>*/}
                    //     {/*    <FavoriteIcon style={iconStyle} />*/}
                    //     {/*</IconButton>*/}
                    // }
                />
            </GridListTile>
        ))
    }
console.log(props.data)
    return (
        <div className="TopList">
            <List
                component="div"
                className={classes.root}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <CollectionsIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary="Popular Places" />
                    {/*{open ? <ExpandLess /> : <ExpandMore />}*/}
                </ListItem>
                {/*<Collapse in={open} timeout="auto" unmountOnExit>*/}
                    {/* <List component="div" disablePadding>
            {props.data && createList(props.data)}
          </List> */}
                    <div className={classes.gridroot}>
                        <GridList cellHeight={200} spacing={1} className={classes.gridList} cols={1}>
                            {props.data.default && createGridList(props.data.default)}
                        </GridList>
                    </div>

                {/*</Collapse>*/}
            </List>
        </div>
    );
}