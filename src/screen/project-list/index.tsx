import { useEffect, useState } from "react";
import { SearchPanel } from "./SearchPanel";
import { List } from "./List";

import { cleanObjEmptyKey, useDebounce, useMount } from "uitls";
import { useHttp } from "uitls/http";

const baseApi = process.env.REACT_APP_API_URL;

export interface User {
  id: string;
  name: string;
  token: string;
}

export const ProjectListScreen = () => {
  const [userParameter, setUserParameter] = useState({
    name: "",
    personId: "",
  });
  const deBounceuserParam = useDebounce(userParameter, 200);
  const [userList, setUserList] = useState([]);

  const [projectList, setProjectList] = useState([]);
  const clientHttp = useHttp();
  useMount(() => {
    clientHttp("users").then(setUserList);
  });

  useEffect(() => {
    clientHttp("projects", { data: cleanObjEmptyKey(deBounceuserParam) }).then(
      setProjectList
    );
  }, [deBounceuserParam]);

  return (
    <div>
      <SearchPanel
        userParameter={userParameter}
        setUserParameter={setUserParameter}
        userList={userList}
      />
      <List projectList={projectList} userList={userList} />
    </div>
  );
};
