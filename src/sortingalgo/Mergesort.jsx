import React, { useState, useEffect } from "react";
import "./Sortingvisualizer.css";

const Mergesort = () => {
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

  const mergesort = async (arr = array, start = 0, end = array.length - 1) => {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      await mergesort(arr, start, mid);
      await mergesort(arr, mid + 1, end);
      await merge(arr, start, mid, end);
      setArray([...arr]);
    }
    setCurrentIdx(null);
  };

  const merge = async (arr, start, mid, end) => {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);

    let i = 0,
      j = 0,
      k = start;

    while (i < left.length && j < right.length) {
      setCurrentIdx(k);
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
      await sleep(100);
    }

    while (i < left.length) {
      setCurrentIdx(k);
      arr[k] = left[i];
      i++;
      k++;
      await sleep(100);
    }

    while (j < right.length) {
      setCurrentIdx(k);
      arr[k] = right[j];
      j++;
      k++;
      await sleep(100);
    }
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
        <button className="bg-white rounded-xl mx-2 px-4 py-2 shadow-xl hover:bg-blue-300" onClick={() => mergesort()}>
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

export default Mergesort;
