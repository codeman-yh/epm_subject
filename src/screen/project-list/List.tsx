import { Table } from "antd";
import { User } from "./index";
import type { ColumnsType } from "antd/es/table";

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
  let columns: ColumnsType<Project> = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "负责人",
      key: "id",
      render(_, project) {
        return (
          <span key={project.id}>
            {userList.find((user) => user.id === project.personId)?.name ||
              "xxxx"}
          </span>
        );
      },
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={projectList}
      pagination={false}
      rowKey={(record) => record.id}
    />
  );
};
