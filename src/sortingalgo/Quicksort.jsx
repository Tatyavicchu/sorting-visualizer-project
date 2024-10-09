import React, { useState, useEffect } from "react";
import "./Sortingvisualizer.css";

const Quicksort = () => {
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

  const quicksort = async (arr = array, low = 0, high = array.length - 1) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
      setArray([...arr]);
    }
    setCurrentIdx(null);
  };

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      setCurrentIdx(j);
      if (arr[j] < pivot) {
        i++;
        await swap(arr, i, j);
      }
      await sleep(100);
    }
    await swap(arr, i + 1, high);
    return i + 1;
  };

  const swap = async (arr, i, j) => {
    setSwapping(true);
    [arr[i], arr[j]] = [arr[j], arr[i]];
    setArray([...arr]);
    await sleep(500);
    setSwapping(false);
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
        <button className="bg-white rounded-xl mx-2 px-4 py-2 shadow-xl hover:bg-blue-300" onClick={() => quicksort()}>
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

export default Quicksort;
