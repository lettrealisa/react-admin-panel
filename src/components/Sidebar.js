const Sidebar = ({ open }) => {
  const columns = [
    { id: 1, title: "пользователи", active: true },
    { id: 2, title: "питомцы", active: false },
    { id: 3, title: "должности", active: false },
  ];

  return (
    <div className="sidebar">
      {columns.map((column) => {
        return (
          <div
            className={
              column.active ? "item-active item title-column" : "item title-column"
            }
            key={column.id}
          >
            {column.title}&nbsp;🥳
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
