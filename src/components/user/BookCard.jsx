import React from 'react'
import { Card } from 'flowbite-react';

function BookCard() {
  return (
    <div>
      <Card className="max-w-auto" imgSrc="src\assets\Harry-Potter-and-the-Prisoner-of-Azkaban.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Harry Potter and the Prisoner of Azkaban (by J.K. Rowling)
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">      
      Sirius Black, a notorious prisoner in Azkaban for twelve years, escapes, leaving clues that link him to Harry Potter's past and a potential threat to Hogwarts.
      </p>
    </Card>
    </div>
  )
}

export default BookCard
