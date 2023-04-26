import { useAuthContext } from "context/AuthContext";
import { ProjectListScreen } from "screen/project-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuthContext();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
