function BookCard({ bookDetails }) {
  return (
    // Book image card
    <figure className="relative max-w-sm rounded-md border grayscale-0 filter transition-all duration-300 hover:grayscale dark:border-slate-700">
      {bookDetails ? (
        <>
          <img
            className="rounded-lg"
            src={
              import.meta.env.VITE_BASE_URL?.slice(0, -4) +
              bookDetails.cover_image
            }
            alt="book cover"
          />
        </>
      ) : (
        <p className="h-full w-full">Loading book details...</p>
      )}
    </figure>
  );
}

export default BookCard;
