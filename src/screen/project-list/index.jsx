import { useEffect, useState } from "react";
import qs from "qs";
import { SearchPanel } from "./SearchPanel";
import { List } from "./List";

import { cleanObjEmptyKey } from "uitls";
const baseApi = process.env.REACT_APP_BASE_URL;
export const ProjectListScreen = () => {
  const [userParameter, setUserParameter] = useState({
    name: "",
    personId: "",
  });

  const [userList, setUserList] = useState([]);

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${baseApi}/users`).then(async (res) => {
      if (res.ok) {
        setUserList(await res.json());
      }
    });
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/projects?${qs.stringify(
        cleanObjEmptyKey(userParameter)
      )}`
    ).then(async (res) => {
      if (res.ok) {
        setProjectList(await res.json());
      }
    });
  }, [userParameter]);

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
