import React, { useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter.js";
import Cards from "./components/Cards.js";
import { filterData, apiUrl } from "./data.js";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.js";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(filterData[0].title);
  const [likedCourses, setLikedCourses] = useState([]);

  const fetchData = async () => {
    setLoading(true); // set loading to true before making the request
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();

      // save the data in the state variable courses
      setCourses(output);
    } catch (error) {
      toast.error("Error fetching data");
    }
    setLoading(false); // set loading to false after the request is completed
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar />

      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
        likedCourses={likedCourses}
      />

      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]">
        {
          // if loading is true, show the loading text
          loading ? (
            <Spinner />
          ) : (
            <Cards
              courses={courses}
              category={category}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          )
        }
      </div>
    </div>
  );
};

export default App;
