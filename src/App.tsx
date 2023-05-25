import Dictionary from "./components/Dictionary";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { useDictionaryApp } from "./context";

function App() {
  const { isLoading } = useDictionaryApp();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <Form />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Form />
      <Dictionary />
    </>
  );
}

export default App;
