import { useParams } from "react-router-dom";

import Header from "../common/Header";
import Word from "../Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
  const { day } = useParams();

  const word = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <Header />
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {word.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
