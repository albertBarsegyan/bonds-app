import { GoogleOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInFormDataType,
  signInSchema,
} from "@modules/auth/components/sign-in-form/schema.ts";
import authGlobalStyles from "@modules/auth/styles/auth-global.module.css";
import { Button, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import styles from "./styles.module.css";

const { Title, Text, Link } = Typography;

export const SignInForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormDataType>({
    resolver: zodResolver(signInSchema),

    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInFormDataType) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className={styles.formWrapper}>
      <Title className={authGlobalStyles.title} level={1}>
        Вход
      </Title>
      <Text className={authGlobalStyles.description}>
        Пожалуйста, введите свои данные
      </Text>

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Электронная почта"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                size="large"
                status={errors.email ? "error" : ""}
                {...field}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Пароль"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input.Password
                size="large"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
                placeholder="Пароль"
                status={errors.password ? "error" : ""}
                {...field}
              />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" block>
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
    </div>
  );
};
