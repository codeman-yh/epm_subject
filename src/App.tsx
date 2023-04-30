import { AuthenticatedApp } from "AuthenticatedApp";
import { useAuthContext } from "context/AuthContext";
import { loadDevTools } from "jira-dev-tool";
import { UnAuthenticatedApp } from "unAuthenticatedApp";
import "./App.css";
function App() {
  const { user } = useAuthContext();
  loadDevTools(() => {});
  return <div>{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</div>;
}

export default App;
