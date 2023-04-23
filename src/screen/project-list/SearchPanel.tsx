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
      <input
        type="text"
        value={userParameter.name}
        onChange={(env) =>
          setUserParameter({ ...userParameter, name: env.target.value })
        }
      />
      <select
        onChange={(env) =>
          setUserParameter({ ...userParameter, personId: env.target.value })
        }
      >
        <option value="">负责人</option>
        {userList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
