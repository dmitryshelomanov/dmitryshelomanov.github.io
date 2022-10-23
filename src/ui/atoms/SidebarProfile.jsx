import { Typography, Col, Row } from "antd";
import { Link } from "react-router-dom";
import st from "./sidebar.module.less";

export function SideBarProfile({ userName }) {
  return (
    <div className={st.wrapper}>
      <Row>
        <Col span={4}>
          <img src="https://avatars.githubusercontent.com/u/19505559?v=4" />
        </Col>
        <Col span={18}>
          <Typography.Text className={st.name} ellipsis>
            <Link to="/">{userName}</Link>
          </Typography.Text>
          <Row>
            <Typography.Text className={st.subtitle} ellipsis>
              Демки и задачи
            </Typography.Text>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
