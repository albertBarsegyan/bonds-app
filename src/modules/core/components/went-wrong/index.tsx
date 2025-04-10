import { Result } from "antd";

export function WentWrongContent() {
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
    />
  );
}
