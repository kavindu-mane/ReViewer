import React, { useState } from 'react';

function BookDetails() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Book topic */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Harry Potter and the Prisoner of Azkaban
      </h1>
      {/* Book author */}
      <h1 className="text-3xl italic tracking-tight text-gray-900 dark:text-white">
        by J.K. Rowling
      </h1>
<br />
      {/* Book details */}
      <p className="leading-relaxed">
      Harry is spending another dreadful summer at home with the Dursley's when an unfortunate run in with Aunt Marge ends in her sudden balloon like inflation. Harry runs away and fears expulsion from Hogwarts for his use of magic outside of term time. At the same time Sirius Balck escapes from Azkaban Prison and this adds to Harry's woes as it appears that Black seeks to kill him for his part in foiling Voldemort's plans.
Harry arrives back at Hogwarts where the Quidditch season is welcome relief to the presence of the Dementors, mysterious gaurds from Azkaban searching for Sirius Black. Harry, and his friends attempt to unearth the truth surrounding Sirius Black and discover why the Dementor's presence cause im such pain.
This is the best Harry Potter book of the series so far, which seems to get stronger as each book is released. If you read the first two books then The Prisoner of Azkaban really is like revisiting ols friends. The thoughts and actions of the characters are firmly establised within your own mind and this is one of JK Rowling's great strengths as a writer.
<br></br>
      <span id="more-text" className={isExpanded ? '' : 'hidden'}>
        The narrative will once again sit comfortably with both children and adults and those expecting the series to weaken like so many fantasy series in the past have done will be sorely dissapointed.
The characters are expanded upon and we learn more about Harry's parents and the character that really shines in Azkaban is Sirius Black and he story is by far the highlight, he really is a great addition, as is Remus Lupin.
This book is another must read and Rowling continues to go from strength to strength.
      </span>
      </p>
      {/* Read more function */}
      <button
        id="toggle-btn"
        onClick={handleToggle}
        className={`mt-4 text-blue-500 focus:outline-none ${isExpanded ? 'hidden' : ''}`}
      >
        Read More
      </button>
      <button
        id="hide-btn"
        onClick={handleToggle}
        className={`mt-4 text-blue-500 focus:outline-none ${isExpanded ? '' : 'hidden'}`}
      >
        Hide
      </button>
    </div>
  );
}

export default BookDetails;
