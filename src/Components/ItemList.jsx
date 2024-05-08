import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export function ItemList(props) {
  return (
    <div className="listContainer">
      <li className="itemList">
        {props.item}
        <span className="icons">
          <DeleteForeverIcon
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          />
        </span>
      </li>
    </div>
  );
}
