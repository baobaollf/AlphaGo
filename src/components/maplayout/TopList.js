import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CollectionsIcon from '@material-ui/icons/Collections';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { TripdataContext } from "../../contexts/TripdataContext";
import CircularIndeterminate from "../maplayout/LeftList/spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: "white",
  },
  gridroot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  gridList: {
    flexWrap: 'wrap',
    height: "65vh",
    width: 250,
    transform: 'translateZ(0)',
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const scrollRef = useRef();
  const [open, setOpen] = React.useState(true);
  const { TopList, setPopupinfo, fetchMoreTopListData, TopListLoading } = React.useContext(TripdataContext)

  const handleClick = () => {
    setOpen(!open);
  };

  const loadData = () => {
    if (scrollRef.current.scrollTop + scrollRef.current.clientHeight >= scrollRef.current.scrollHeight) {
      fetchMoreTopListData();
    }
  }

  const createGridList = (data) => {
    return TopList.map((point) => (
      <GridListTile key={point.id} onClick={() => setPopupinfo(point)}>
        <img src={point.images[0]} alt=" " />} />
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
  
  return (
    <div className="TopList">
      <List
        component="div"
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <CollectionsIcon color="secondary" style={{marginRight: 5}}/>
          </ListItemIcon>
          <ListItemText primary="Popular Places" style={{
            fontFamily: "-apple-system,system-ui"
          }}/>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className={classes.gridroot} onScroll={loadData}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList} cols={1} ref={scrollRef} style={{fontFamily: "-apple-system,system-ui"}}>
              {TopList && createGridList(TopList)}
              {TopListLoading && <div className="TopListSpinner"><CircularIndeterminate></CircularIndeterminate></div> } 
            </GridList>
            
          </div>
          
        </Collapse>
      </List>
    </div>
  );
}
