import { Typography, Alert, Col, Button, Row, Space } from "antd";
import { DefaultSidebar } from "../../features/common/sidebar";
import { Card, useGuess } from "../../features/tasks/guess";
import { Content, MainTemplate } from "../../ui";

export function GuessPage() {
  const { currentCard, ...rest } = useGuess();

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title>Guess</Typography.Title>

      <Content jc="center" ai="center">
        <Row style={{ marginBottom: 15 }}>
          <Card card={currentCard.card} suit={currentCard.suit} />
        </Row>

        <Space size="middle">
          <Col>
            <Button onClick={rest.greater} disabled={rest.failed}>
              Больше
            </Button>
          </Col>

          <Col>
            <Button onClick={rest.less} disabled={rest.failed}>
              Меньше
            </Button>
          </Col>

          <Col>
            <Button onClick={rest.restart}>Заново</Button>
          </Col>
        </Space>
      </Content>

      {rest.failed && <Alert type="error" message="Проиграли" showIcon />}
      {rest.winner && !rest.failed && (
        <Alert type="success" message="Победа !" showIcon />
      )}
    </MainTemplate>
  );
}
