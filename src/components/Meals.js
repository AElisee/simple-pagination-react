import React from "react";

const Meals = ({ meals, currentPage }) => {
  return (
    <div>
      <div className="header">
        <h1>
          <span>s</span>imple Pagination react
        </h1>
        <p>
          <a
            href="https://levelup.gitconnected.com/a-simple-guide-to-pagination-in-react-facd6f785bd0"
            target="_blank"
            rel="noopener noreferrer"
          >
            lien tuto
          </a>
        </p>
      </div>
      <h2>Meals</h2>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Name</th>
            <th>Origin</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal, index) => (
            <tr key={index}>
              <td>
                {currentPage == 1
                  ? index + 1
                  : index + 1 > 9
                  ? (currentPage + 1).toString() + 0
                  : currentPage.toString() + (index + 1)}
              </td>
              <td> {meal.strMeal}</td>
              <td> {meal.strArea}</td>
              <td> {meal.strCategory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meals;
