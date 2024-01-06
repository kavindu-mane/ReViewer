import React from 'react'
//import { Card } from 'flowbite-react';

function BookCard() {
  return (  
  <div className="flex flex-raw p-6 mx-auto max-w-sm text-center text-gray-900 bg-Black rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
    {/* Book image */}
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
        <img className="rounded-lg" src="src\assets\Harry-Potter-and-the-Prisoner-of-Azkaban.jpg" alt="image description"></img>
      </figure>
  </div>    
  )
}

export default BookCard
