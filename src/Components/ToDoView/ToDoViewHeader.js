import React from 'react';

function ToDoViewHeader(props) {
    return (
        <div className="viewHeader">
              <h3 className="listTitle">{props.currentToDoTitle}</h3>  
        </div>
    )
}

export default ToDoViewHeader;