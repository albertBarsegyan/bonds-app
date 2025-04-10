import { Button, Card, Col, Radio, Row, Typography } from "antd";
import { useState } from "react";

const { Title, Text } = Typography;

export const PricingPlansPage = () => {
  const [plan, setPlan] = useState("1");

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>
      <Text type="secondary" style={{ display: "block", textAlign: "center" }}>
        Тарифный план
      </Text>
      <Title level={2} style={{ textAlign: "center" }}>
        Выберите подходящее для вас решение
      </Title>
      <Row gutter={24} justify="center" style={{ marginTop: 40 }}>
        <Col xs={24} md={12}>
          <Card
            title={<Title level={4}>Демо версия</Title>}
            style={{ textAlign: "center" }}
          >
            <Text>1 портфель, 5 сделок</Text>
            <Title level={2} style={{ margin: "20px 0" }}>
              ₽0<span style={{ fontSize: "16px" }}>/мес</span>
            </Title>
            <Button type="default" block>
              Попробовать бесплатно
            </Button>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            title={<Title level={4}>Полная версия</Title>}
            style={{
              backgroundColor: "#f0fff4",
              textAlign: "center",
              borderColor: "#b7eb8f",
            }}
          >
            <Text>∞ портфель, ∞ сделок, агрегатор новостей</Text>
            <Title level={2} style={{ margin: "20px 0" }}>
              ₽1500<span style={{ fontSize: "16px" }}>/На 1 месяц</span>
            </Title>
            <Radio.Group
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              style={{ marginBottom: 20 }}
            >
              <Radio.Button value="1">На 1 месяц</Radio.Button>
              <Radio.Button value="3">На 3 месяца</Radio.Button>
              <Radio.Button value="12">На 12 месяцев</Radio.Button>
            </Radio.Group>
            <Button type="primary" block>
              Начать прямо сейчас
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
