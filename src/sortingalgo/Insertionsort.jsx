import React, { useState, useEffect } from "react";
import "./Sortingvisualizer.css";

const Insertionsort = () => {
  const [array, setArray] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(null);
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    createArray();
  }, []);

  const createArray = () => {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 200) + 5);
    setArray(newArray);
    setCurrentIdx([]);
    setSwapping(false);
  };

  const insertionsort = async () => {
    let arr = [...array];
    let n = arr.length;

    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        setCurrentIdx(j + 1);
        arr[j + 1] = arr[j];
        j = j - 1;
        await sleep(100);
      }
      arr[j + 1] = key;
      setArray([...arr]);
    }
    setCurrentIdx(null);
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  return (
    <div className="flex flex-row items-center">
      <div className="mb-4">
        <button className="bg-white rounded-xl mx-2 px-4 py-2 shadow-xl hover:bg-blue-300" onClick={createArray}>
          CREATE/RESET array
        </button>
        <button className="bg-white rounded-xl mx-2 px-4 py-2 shadow-xl hover:bg-blue-300" onClick={() => insertionsort()}>
          START
        </button>
      </div>
      {array.map((value, idx) => (
        <div
          key={idx}
          className={`h-10 w-10 flex flex-row gap-5 mx-3 justify-center items-center text-white ${
            idx === currentIdx
              ? "bg-red-500"
              : swapping && (idx === currentIdx + 1 || idx === currentIdx - 1)
              ? "bg-green-500"
              : "bg-blue-500"
          }`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Insertionsort;
