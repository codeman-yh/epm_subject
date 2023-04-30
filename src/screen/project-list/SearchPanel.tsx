import { Input, Select } from "antd";
import { User } from "./index";

interface SearchPanelPorps {
  userParameter: {
    name: string;
    personId: string;
  };
  userList: User[];
  setUserParameter: (userParameter: SearchPanelPorps["userParameter"]) => void;
}

export const SearchPanel = ({
  userParameter,
  userList,
  setUserParameter,
}: SearchPanelPorps) => {
  return (
    <div>
      <Input
        type="text"
        value={userParameter.name}
        onChange={(env) =>
          setUserParameter({ ...userParameter, name: env.target.value })
        }
      />
      <Select
        value={userParameter.personId}
        onChange={(value) =>
          setUserParameter({ ...userParameter, personId: value })
        }
      >
        <Select.Option value="">负责人</Select.Option>
        {userList.map((user) => (
          <Select.Option key={user.id} value={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
