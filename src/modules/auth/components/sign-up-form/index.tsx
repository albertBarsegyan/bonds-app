import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@modules/auth/components/sign-up-form/schema.ts";
import { RegistrationFormData } from "@modules/auth/components/sign-up-form/type.ts";
import authGlobalStyles from "@modules/auth/styles/auth-global.module.css";
import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";

const { Option } = Select;
const { Title, Text } = Typography;

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      source: undefined,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <Title level={2} className={authGlobalStyles.title}>
        Регистрация
      </Title>

      <Text className={authGlobalStyles.description}>
        Заполните информацию ниже для регистрации
      </Text>

      <Form
        className={authGlobalStyles.formWrapper}
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
      >
        <Row gutter={[16, 24]} justify="center">
          <Col xs={12} sm={12} md={12}>
            <Form.Item
              label="Полное имя"
              validateStatus={errors.fullName ? "error" : ""}
              help={errors.fullName?.message}
            >
              <Controller
                control={control}
                name="fullName"
                render={({ field }) => (
                  <Input
                    size="large"
                    placeholder="Иванов Иван Иванович"
                    status={errors.fullName ? "error" : ""}
                    {...field}
                  />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Контактный номер"
              validateStatus={errors.phone ? "error" : ""}
              help={errors.phone?.message}
            >
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <Input
                    size="large"
                    placeholder="+7 (999) 123-45-67"
                    status={errors.phone ? "error" : ""}
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
                    placeholder="Пароль"
                    status={errors.password ? "error" : ""}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    {...field}
                  />
                )}
              />
            </Form.Item>
          </Col>

          <Col xs={12} sm={12} md={12}>
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
                    placeholder="example@domain.com"
                    status={errors.email ? "error" : ""}
                    {...field}
                  />
                )}
              />
            </Form.Item>

            {/* Phone */}

            <Form.Item
              label="Откуда вы о нас узнали?"
              validateStatus={errors.source ? "error" : ""}
              help={errors.source?.message}
            >
              <Controller
                control={control}
                name="source"
                render={({ field }) => (
                  <Select
                    size="large"
                    placeholder="Выберите вариант"
                    status={errors.source ? "error" : ""}
                    {...field}
                  >
                    <Option value="search">Поиск в интернете</Option>
                    <Option value="friend">От друзей/знакомых</Option>
                    <Option value="social">Социальные сети</Option>
                    <Option value="ad">Реклама</Option>
                    <Option value="other">Другое</Option>
                  </Select>
                )}
              />
            </Form.Item>

            {/* Password */}

            {/* Confirm Password */}
            <Form.Item
              label="Подтвердите Пароль"
              validateStatus={errors.confirmPassword ? "error" : ""}
              help={errors.confirmPassword?.message}
            >
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <Input.Password
                    size="large"
                    placeholder="Подтвердите пароль"
                    status={errors.confirmPassword ? "error" : ""}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    {...field}
                  />
                )}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
