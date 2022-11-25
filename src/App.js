import React, { useEffect, useState } from "react";
import axios from "axios";
import Meals from "./components/Meals";
import Pagination from "./components/Pagination";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => {
        setMeals(res.data.meals);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(meals);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = meals.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(meals.length / recordsPerPage);
  return (
    <div>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeigth: 900,
            fontSize: "24px",
          }}
        >
          <p>chargement... !</p>
        </div>
      ) : (
        <div>
          <Meals meals={currentRecords} currentPage={currentPage} />
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default App;
