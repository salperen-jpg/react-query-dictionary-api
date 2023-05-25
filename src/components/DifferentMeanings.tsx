import { useDictionaryApp } from "../context";
import Meanings from "./Meanings";
import { nanoid } from "nanoid";
const DifferentMeanings = () => {
  const { definition } = useDictionaryApp();

  return (
    <section>
      <div className='section-center'>
        {definition?.map((d) => {
          return <Meanings key={nanoid()} {...d} />;
        })}
      </div>
    </section>
  );
};
export default DifferentMeanings;
