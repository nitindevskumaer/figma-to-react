import React, { useEffect, useState } from 'react';
import { Card } from '../Components/Card';
import { casinoBets } from '../utils/utils';

export const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(casinoBets);
  }, []);

  const renderList = () => {
    return data.map((data, index) => {
      return <Card key={index} data={data} />;
    });
  };

  return (
    <>
      <div className="max-w-[1200px] container lg:mx-auto mt-5 px-3 w-full">
        <header className="w-100">
          <h1 className="text-2xl text-[#939393] font-semibold mb-3">Best Casinos 2024</h1>
        </header>
        <main>
          {renderList()}
        </main>
      </div>
    </>
  );
};
