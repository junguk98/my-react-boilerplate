import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
`;

export default function MainPage() {
  const a = [
    {
      id: 1,
      name: "lee1",
    },
    {
      id: 2,
      name: "lee2",
    },
    {
      id: 3,
      name: "lee3",
    },
    {
      id: 4,
      name: "lee4",
    },
  ];
  return (
    <>
      <Wrapper>main</Wrapper>
      {a.map((e) => (
        <div key={e.id}>{e.name}</div>
      ))}
    </>
  );
}
