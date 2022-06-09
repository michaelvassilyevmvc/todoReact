import React from "react";
import axios from "axios";

import classNames from "classnames";
import Badge from "../Badge";

import "./List.scss";
import removeSvg from "../../assets/img/remove.svg";

const List = ({ items, isRemovable, onClick, onRemove }) => {
  const onRemoveList = (item) => {
    if (window.confirm("Вы действительно хотите удалить списка?")) {
      axios.delete("http://localhost:3001/lists/" + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>
            {item.icon ? item.icon : <Badge color={item.color.name}></Badge>}
          </i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={() => onRemoveList(item)}
            ></img>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
