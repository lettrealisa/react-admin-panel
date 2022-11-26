import { useState } from "react";

const Sidebar = ({ open }) => {
  const columns = [
    { id: 1, title: "пользователи", active: true },
    { id: 2, title: "питомцы", active: false },
    { id: 3, title: "должности", active: false },
  ];

  const [row, setRow] = useState(0);

  const toggleActive = (i) => {
    setRow(i);
  };

  return (
    <div className="sidebar">
      {columns.map((column) => {
        return (
          <>
            <div
              className={
                row > 0 && columns[row - 1].id === column.id
                  ? "item title-column item-active"
                  : "item title-column"
              }
              key={column.id}
              onClick={() => toggleActive(column.id)}
            >
              {column.title}&nbsp;🥳
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Sidebar;
