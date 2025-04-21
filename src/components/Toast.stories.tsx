import { useState } from "react";
import { Toast } from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const Example = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && <Toast message="This is a toast!" type="success" onClose={() => setVisible(false)} />}
    </>
  );
};
