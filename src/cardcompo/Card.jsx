import React from 'react'
import { Link } from 'react-router-dom';
const Card=({sortname,sortinfo,path})=> {
  return (
    <div className="relative h-[300px] w-[200px] rounded-md">
      <img
        src="src/img/prev.jpg"
        alt="IMG"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{sortname}</h1>
        <p className="mt-2 text-sm text-red-400 font font-bold ">
          {sortinfo}
        </p>
        <Link to={`/${path}`}>
        <button className="mt-2 inline-flex cursor-pointer items-center text-xl font-semibold text-white">
          View visualizer &rarr;
        </button>
        </Link>
        
      </div>
    </div>
  )
}
export default Card;
