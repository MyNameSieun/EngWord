import React, { useState } from "react";
import styled from "styled-components";

const Word = ({ word: w }) => {
  const [word, setWord] = useState(w);

  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const handleDeleteButton = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  };

  if (word.id === 0) {
    return null;
  }

  const toggleShowWord = () => {
    setIsShow(!isShow);
  };
  const toggleIsDone = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setIsDone(!isDone);
        }
      })
      .catch((err) => {
        console.error("Error updating word:", err);
      });
  };

  return (
    <div>
      <StTableTr type={isDone ? "off" : ""}>
        <td>
          <input type="checkbox" checked={isDone} onChange={toggleIsDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button onClick={toggleShowWord}>
            {isShow ? "숨기기" : "뜻 보기"}
          </button>
          <button onClick={handleDeleteButton}>삭제</button>
        </td>
      </StTableTr>
    </div>
  );
};

export default Word;

const StTableTr = styled.tr`
  background-color: ${(props) => (props.type === "off" ? "#535353" : "")};
  color: ${(props) => (props.type === "off" ? "#646161" : "")};
`;
