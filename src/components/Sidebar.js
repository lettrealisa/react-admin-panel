import { useDispatch } from "react-redux";

const Sidebar = ({ open, table, setTable }) => {
  const columns = [
    { id: 1, title: "пользователи", active: true, table: "users" },
    { id: 2, title: "питомцы", active: false, table: "pets" },
    { id: 3, title: "должности", active: false, table: "jobs" },
  ];

  const dispatch = useDispatch();

  const toggleActive = (column) => {
    setTable(column);
  };

  return (
    <div className="sidebar">
      {columns.map((column) => {
        return (
          <div
            className={
              table.id > 0 && columns[table.id - 1].id === column.id
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
