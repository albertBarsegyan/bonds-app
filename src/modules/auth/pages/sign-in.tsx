import { GoogleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space, Tabs, Typography } from "antd";
import { useState } from "react";

const { TabPane } = Tabs;
const { Title, Text, Link } = Typography;

export const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Row justify="center" align="middle">
      <Col span={24} style={{ textAlign: "center", marginBottom: 24 }}>
        <Title level={3}>Logo</Title>
      </Col>

      <Col xs={22} sm={16} md={8} lg={6}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Вход" key="1">
            <Title level={2} style={{ textAlign: "center" }}>
              Вход
            </Title>
            <Text
              style={{
                display: "block",
                textAlign: "center",
              }}
            >
              Пожалуйста, введите свои данные
            </Text>

            <Form layout="vertical">
              <Form.Item
                label="Электронная почта"
                name="email"
                rules={[{ required: true, message: "Введите вашу почту!" }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: "Введите пароль!" }]}
              >
                <Input.Password
                  size="large"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                  placeholder="Пароль"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Вход
                </Button>
              </Form.Item>
            </Form>

            <Space style={{ display: "flex", justifyContent: "center" }}>
              <Button size="large" icon={<GoogleOutlined />} shape="circle" />
            </Space>

            <div style={{ textAlign: "center", marginTop: 16 }}>
              <Link>Забыли пароль?</Link>
            </div>
          </TabPane>

          <TabPane tab="Регистрация" key="2">
            <Text>Страница регистрации (не реализована)</Text>
          </TabPane>
        </Tabs>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Text type="secondary">© 2025 Название проекта</Text>
        </div>
      </Col>
    </Row>
  );
};
