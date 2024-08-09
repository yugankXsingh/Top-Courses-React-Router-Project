import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ course, likedCourses, setLikedCourses }) {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // course is already liked, so remove it from the likedCourses array
      setLikedCourses(
        likedCourses.filter((likedCourse) => {
          return likedCourse !== course.id;
        })
      );

      //display a toast message
      toast.error("Removed from favorites");
    } else {
      // course is not liked, so add it to the likedCourses array
      if (likedCourses.length === 0) {
        // case 1:
        setLikedCourses([course.id]);
      } else {
        // case 2:
        setLikedCourses([...likedCourses, course.id]);
      }

      //display a toast message
      toast.success("Added to favorites");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img
          className="object-cover"
          src={course.image.url}
          alt={course.image.alt}
        ></img>
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white absolute right-2 bottom-[-10px]">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2 font-light">
          {
            course.description.split(" ").slice(0, 15).join(" ") + "..." // display only the first 15 words
          }
        </p>
      </div>
    </div>
  );
}

export default Card;
