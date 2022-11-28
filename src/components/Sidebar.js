import { useState } from "react";
import { useDispatch } from "react-redux";
import { tableSelected } from "../features/table/tableSlice";

const Sidebar = ({ open }) => {
  const columns = [
    { id: 1, title: "пользователи", active: true, table: "users" },
    { id: 2, title: "питомцы", active: false, table: "pets" },
    { id: 3, title: "должности", active: false, table: "jobs" },
  ];

  const [row, setRow] = useState(0);

  const dispatch = useDispatch();

  const toggleActive = (column) => {
    setRow(column.id);
    dispatch(
      tableSelected({
        name: column.table
      })
    );
  };

  return (
    <div className="sidebar">
      {columns.map((column) => {
        return (
          <div
            className={
              row > 0 && columns[row - 1].id === column.id
                ? "item title-column item-active"
                : "item title-column"
            }
            key={column.id}
            onClick={() => toggleActive(column)}
          >
            {column.title}&nbsp;🥳
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
