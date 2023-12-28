import React from 'react'
import { Rating } from 'flowbite-react';
import { Card } from 'flowbite-react';

function StarRating() {
  return (
    <div>
    <Card className="max-w-sm">      
        <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </Rating>  
    </Card>
  </div>
  )
}

export default StarRating
