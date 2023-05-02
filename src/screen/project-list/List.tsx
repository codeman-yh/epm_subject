import { Table } from "antd";
import { User } from "./index";
import type { ColumnsType } from "antd/es/table";
import { format } from "node:path/win32";
import dayjs from "dayjs";

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
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "部门",
      dataIndex: "organization",
    },
    {
      title: "负责人",
      render(_, project) {
        return (
          <span>
            {userList.find((user) => user.id === project.personId)?.name ||
              "xxxx"}
          </span>
        );
      },
    },
    {
      title: "创建时间",
      render(_, project) {
        return (
          <span>
            {project.created
              ? dayjs(project.created).format("YYYY-MM-DD")
              : "无"}
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
