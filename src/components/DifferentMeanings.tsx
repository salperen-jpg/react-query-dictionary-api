import Meanings from "./Meanings";
import { nanoid } from "nanoid";
import { ISingleDef } from "../utils/Dictionary.Models";
interface IDifferentMeaningsProp {
  definition: ISingleDef[];
}

const DifferentMeanings: React.FC<IDifferentMeaningsProp> = ({
  definition,
}) => {
  return (
    <section>
      <div className='section-center'>
        {definition.map((d) => {
          return <Meanings key={nanoid()} {...d} />;
        })}
      </div>
    </section>
  );
};
export default DifferentMeanings;
