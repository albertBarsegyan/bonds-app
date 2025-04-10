import { AuthLayout } from "@modules/auth/components/layout";
import { Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

export const AuthPage = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24} style={{ textAlign: "center", marginBottom: 24 }}>
        <Title level={3}>Logo</Title>
      </Col>

      <Col xs={22} sm={16} md={8} lg={6}>
        <AuthLayout />

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Text type="secondary">© 2025 Название проекта</Text>
        </div>
      </Col>
    </Row>
  );
};
