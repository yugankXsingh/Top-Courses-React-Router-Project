function Filter({ filterData, category, setCategory, likedCourses }) {
  function filterHandler(title) {
    // console.log(title);
    setCategory(title);
  }

  // if (likedCourses.length > 0) {
  //   console.log(likedCourses);
  // }

  function favoritesHandler() {
    setCategory("Favorites");
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button
            className={`text-lg bg-black px-2 py-1 text-white rounded-md
            hover:opacity-80 ${
              data.title === category
                ? "border-white border-2"
                : "bg-opacity-40 border-transparent"
            } transition duration-300`}
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
      {
        // if likedCourses is not empty, show the liked courses button
        likedCourses.length > 0 && (
          <button
            className={`text-lg bg-black px-2 py-1 text-white rounded-md
            hover:opacity-80 ${
              category === "Favorites"
                ? "border-white border-2"
                : "bg-opacity-40 border-transparent"
            } transition duration-300`}
            onClick={() => favoritesHandler()}
          >
            Favorites
          </button>
        )
      }
    </div>
  );
}
export default Filter;
