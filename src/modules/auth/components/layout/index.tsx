import { innerRoutePath } from "@core/utils/route.ts";
import { SignInForm } from "@modules/auth/components/sign-in-form";
import { SignUpForm } from "@modules/auth/components/sign-up-form";
import { Tabs } from "antd";
import { useLocation, useNavigate } from "react-router";

import styles from "./styles.module.css";

const { TabPane } = Tabs;

export function AuthLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Tabs
      onChange={navigate}
      defaultActiveKey={pathname}
      centered
      className={styles.tabPane}
      items={[
        {
          label: `Вход`,
          key: innerRoutePath.getSignIn(),
          children: <SignInForm />,
        },
        {
          label: `Регистрация`,
          key: innerRoutePath.getSignUp(),
          children: <SignUpForm />,
        },
      ]}
    >
      <TabPane tab="Вход" key={innerRoutePath.getSignIn()}>
        <SignInForm />
      </TabPane>

      <TabPane tab="Регистрация" key={innerRoutePath.getSignUp()}>
        <SignUpForm />
      </TabPane>
    </Tabs>
  );
}
