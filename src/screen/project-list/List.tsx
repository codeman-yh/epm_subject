import { User } from "./index";

interface Project {
  id: string;
  name: string;
  personId: string;
  organization: number;
  created: number;
}
interface ListProps {
  projectList: Project[];
  userList: User[];
}

export const List = ({ projectList, userList }: ListProps) => {
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
