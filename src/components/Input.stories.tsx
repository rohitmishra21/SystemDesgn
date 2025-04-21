import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = () => <Input label="Name" placeholder="Enter name" />;
export const ErrorState = () => <Input label="Name" placeholder="Enter name" error="Name is required" />;
