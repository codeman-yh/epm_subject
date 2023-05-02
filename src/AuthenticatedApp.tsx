import styled from "@emotion/styled";
import { Row } from "components/lib";
import { useAuthContext } from "context/AuthContext";
import { ProjectListScreen } from "screen/project-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuthContext();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <div>logo</div>
          <div>项目</div>
          <div>name</div>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)``;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main``;
