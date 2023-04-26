import { AuthenticatedApp } from "AuthenticatedApp";
import { useAuthContext } from "context/AuthContext";
import { UnAuthenticatedApp } from "unAuthenticatedApp";
import "./App.css";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
}

export default App;
