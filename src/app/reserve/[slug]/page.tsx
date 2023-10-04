import Header from "./components/Header";
import Form from "./components/Form";

export default function Reserve() {
  return (
    <div className="border-t h-screen">
      <title>Reserve | OpenTable</title>
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
}
