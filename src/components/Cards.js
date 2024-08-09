import Card from "./Card";

function Cards({ courses, category, likedCourses, setLikedCourses }) {
  if (courses.length === 0) {
    return <div></div>;
  }

  // console.log(courses);
  // console.log(courses.data[category]);
  // console.log(Object.keys(courses.data));
  // console.log(Object.values(courses.data));

  let allCourses = [];
  // it will return an array of all courses from the courses object
  const getAllCourses = () => {
    if (category === "All") {
      Object.values(courses.data).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
    } else if (category === "Favorites") {
      // filter the courses based on the likedCourses
      Object.values(courses.data).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          if (likedCourses.includes(course.id)) {
            allCourses.push(course);
          }
        });
      });
    } else {
      // filter the courses based on the category
      allCourses = [...courses.data[category]];
    }
  };

  getAllCourses();
  // console.log(allCourses);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {allCourses.map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
}

export default Cards;
