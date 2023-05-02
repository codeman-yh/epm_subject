import styled from "@emotion/styled";
import { Row } from "components/lib";
import { useAuthContext } from "context/AuthContext";
import { ProjectListScreen } from "screen/project-list";
import { ReactComponent as SoftWareLogo } from "assets/software-logo.svg";
import { Dropdown, Menu } from "antd";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuthContext();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftWareLogo width={"18rem"} color={"rab(38,132,255)"} />
          <div>项目</div>
          <div>name</div>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a onClick={logout}>登出</a>
                </Menu.Item>
              </Menu>
            }
          >
            <a onClick={(e) => e.preventDefault()}>hi, {user?.name}</a>
          </Dropdown>
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

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main``;
