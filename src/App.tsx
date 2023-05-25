import DifferentMeanings from "./components/DifferentMeanings";
import Form from "./components/Form";
import Keyword from "./components/Keyword";
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
      <Keyword />
      <DifferentMeanings />
    </>
  );
}

export default App;
