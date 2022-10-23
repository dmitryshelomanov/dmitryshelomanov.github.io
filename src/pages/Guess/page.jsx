import { Typography, Alert, Col, Button, Row, Space } from "antd";
import { DefaultSidebar } from "../../features/common/sidebar";
import { Card, useGuess } from "../../features/tasks/guess";
import { Content, MainTemplate } from "../../ui";

export function GuessPage() {
  const { currentCard, rest, ...guess } = useGuess();

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title>Guess</Typography.Title>

      <Content jc="center" ai="center">
        <Row>
          <Typography.Text>Еще карт: {rest}</Typography.Text>
        </Row>
        <Row style={{ marginBottom: 15 }}>
          <Card card={currentCard.card} suit={currentCard.suit} />
        </Row>

        <Space size="middle">
          <Col>
            <Button onClick={guess.greater} disabled={guess.failed}>
              Больше
            </Button>
          </Col>

          <Col>
            <Button onClick={guess.less} disabled={guess.failed}>
              Меньше
            </Button>
          </Col>

          <Col>
            <Button onClick={guess.restart}>Заново</Button>
          </Col>
        </Space>
      </Content>

      {guess.failed && <Alert type="error" message="Проиграли" showIcon />}
      {guess.winner && !guess.failed && (
        <Alert type="success" message="Победа !" showIcon />
      )}
    </MainTemplate>
  );
}
