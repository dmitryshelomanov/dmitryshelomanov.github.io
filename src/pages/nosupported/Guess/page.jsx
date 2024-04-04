import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Typography, Alert, Col, Button, Row, Space } from "antd";
import { DefaultSidebar } from "../../features/common/sidebar";
import { Card, useGuess } from "../../features/tasks/guess";
import { Content, MainTemplate } from "../../ui";

export function GuessPage() {
  const { i18n } = useLingui();
  const { currentCard, rest, ...guess } = useGuess();

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title>{t`Угадай карту`}</Typography.Title>

      <Space direction="vertical">
        <Alert
          message={t`Правила`}
          description={t`
            Нужно угадать больше или меньше следующая карта чем предыдущее.
            (Туз меньше двойки, но больше остальных)
          `}
        />

        {guess.failed && <Alert type="error" message={t`Проиграли`} showIcon />}
        {guess.winner && !guess.failed && (
          <Alert type="success" message={t`Победа !`} showIcon />
        )}
      </Space>

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
              {t`Больше`}
            </Button>
          </Col>

          <Col>
            <Button onClick={guess.less} disabled={guess.failed}>
              {t`Меньше`}
            </Button>
          </Col>

          <Col>
            <Button onClick={guess.restart}>{t`Заново`}</Button>
          </Col>
        </Space>
      </Content>
    </MainTemplate>
  );
}
