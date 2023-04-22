export const List = ({ projectList, userList }) => {
  return (
    <ul>
      {projectList.map((project) => (
        <li key={project.id}>
          <h3>
            {project.name}
            <span>
              (
              {userList.find((user) => user.id === project.personId)?.name ||
                "xxx"}
              )
            </span>
          </h3>
        </li>
      ))}
    </ul>
  );
};
