import React, { useRef, useState } from "react";
import useFetch from "./hooks/useFetch";
import Header from "./common/Header";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CreateWord = () => {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      })
        .then((res) => {
          if (res.ok) {
            alert("생성이 완료되었습니다!");
            history(`/day/${dayRef.current.value}`);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error updating word:", err);
        });
    }
  };

  const days = useFetch(`http://localhost:3001/days`);
  return (
    <form onSubmit={onSubmit}>
      <Header />
      <div>
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div>
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div>
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <StIsLoading isLoading={isLoading}>
        {isLoading ? "Saving..." : "저장"}
      </StIsLoading>
    </form>
  );
};

export default CreateWord;

const StIsLoading = styled.button`
  background-color: ${(props) => (props.isLoading ? "#ff0000" : "#ffff")};
`;
