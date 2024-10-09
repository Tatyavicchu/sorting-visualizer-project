import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from './cardcompo/Card';
import Bubblesort from './sortingalgo/Bubblesort';
import Heapsort from './sortingalgo/Heapsort';
import Insertionsort from './sortingalgo/Insertionsort';
import Mergesort from './sortingalgo/Mergesort';
import Quicksort from './sortingalgo/Quicksort';
import Selectionsort from './sortingalgo/Selectionsort';

const sortingAlgorithms = [
  { name: 'Bubble Sort', path: 'Bubble-sort', component: Bubblesort, info: 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.' },
  { name: 'Insertion Sort', path: 'Insertion-sort', component: Insertionsort, info: 'Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.' },
  { name: 'Merge Sort', path: 'Merge-sort', component: Mergesort, info: 'Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, sorts them, and then merges them.' },
  { name: 'Quick Sort', path: 'Quick-sort', component: Quicksort, info: 'Quick sort is an efficient sorting algorithm that uses a divide-and-conquer approach to partition the array and sort the partitions.' },
  { name: 'Selection Sort', path: 'Selection-sort', component: Selectionsort, info: 'Selection sort is a simple sorting algorithm that repeatedly finds the minimum element from the unsorted part and puts it at the beginning.' },
  { name: 'Heap Sort', path: 'Heap-sort', component: Heapsort, info: 'Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements.' },
];

function App() {
  return (
    <Router>
      <div className="bg-[url('src/img/alistair-macrobert-4TKFpJPnyU8-unsplash.jpg')] bg-fixed bg-cover w-full h-screen">
        <div className="pt-15 px-12">
          <h1 className="text-4xl text-white font-bold underline flex justify-center py-6">SORTING-VISUALIZER</h1>
          <div className="flex flex-row gap-10 justify-center py-20">
            {sortingAlgorithms.map((algorithm, index) => (
              <Card key={index} sortname={algorithm.name} sortinfo={algorithm.info} path={algorithm.path} />
            ))}
          </div> 
        </div>
        <Routes>
          {sortingAlgorithms.map((algorithm, index) => (
            <Route key={index} path={`/${algorithm.path}`} element={<algorithm.component />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
