import Header from "./components/Header";
import Form from "./components/Form";
import { title } from "process";

export default function Reserve() {
  return (
    <div className="border-t h-screen">
      <title>Reserve at Milestones Gril (Toronto) | OpenTable</title>
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
}
