import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CircularIndeterminate from './spinner';

const getListStyle = isDraggingOver => ({
    //background: isDraggingOver ? "lightblue" : "blue",
    background: "white",
    padding: 8,
    width: 140,
    borderColor: '#000000',
    position: "absolute",
    overflow: "auto",

});

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 1,
    paddingRight: 16,
    margin: `0 0 1px 0`,
    borderWidth: 200,
    borderColor: "black",
    borderRadius: 7,
    // change background colour if dragging
    background: isDragging ? "#FA6585" : '#f7fcff',
    fontWeight: "bold",
    color: '#343F67',
    // color: '#FFFFFF',
    // styles we need to apply on draggables
    flexWrap: "wrap",
    ...draggableStyle
});


class DayOverView extends Component {
    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    re_order(list, start, end) {
        return this.props.reorder(list, start, end);
    }

    add(poi, index) {
        this.props.updateItem(poi, index);
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        } else {
            this.re_order(
                this.props.items,
                result.source.index,
                result.destination.index,
            )
        }
    }

    render() {
        return (
            <div>
                <DragDropContext onDragEnd={this.onDragEnd} className="dragDropContext">
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                className="items-style"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle()}
                            >
                                {this.props.loading &&
                                <div className="LeftListSpinner"><CircularIndeterminate></CircularIndeterminate></div>}
                                {this.props.items.map((item, index) => (
                                    <Draggable key={index} draggableId={index + ""} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                onClick={() => {
                                                    this.add(item, index);
                                                }}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}

                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <DehazeIcon style={{marginRight: "5px"}}/>
                                                {`Day ${index + 1}`}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}

export default DayOverView;