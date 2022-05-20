import React from 'react';
import './scss/MainPage.scss';
export default function MainPage() {
  const a = [
    {
      id: 1,
      name: 'lee1',
    },
    {
      id: 2,
      name: 'lee2',
    },
    {
      id: 3,
      name: 'lee3',
    },
    {
      id: 4,
      name: 'lee4',
    },
  ];
  return (
    <>
      <div className="mymain">main</div>
      {a.map((e) => (
        <div key={e.id}>{e.name}</div>
      ))}
    </>
  );
}
