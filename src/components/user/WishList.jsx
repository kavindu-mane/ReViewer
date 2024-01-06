import React from 'react'
//import { Rating } from 'flowbite-react';
import { Card } from 'flowbite-react';

function WishList() {
  return (
<Card className="max-w-sm items-center"> 
{/* Wishlist icon */} 
    <div class="flex flex-row-reverse justify-end items-center">
    <input id="hs-ratings-readonly-3" type="radio" class="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="3"></input>
  <label for="hs-ratings-readonly-3" class="peer-checked:text-red-400 text-gray-300 pointer-events-none dark:peer-checked:text-white dark:text-gray-600">
    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>
  </label>
{/* Wishlist Label */}
    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">Add to favorites</p>
    </div>
</Card>

  )
}

export default WishList
