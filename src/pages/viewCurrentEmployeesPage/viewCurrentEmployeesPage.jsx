import "../../sass/viewCurrentEmployeesPage.scss";
import EmployeesTable from "../components/table/table.jsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ViewCurrentEmployeesPage() {
  const employeeList = useSelector((state) => state.database);
  const [flated, setFlated] = useState([]);

  useEffect(() => {
    console.log("EmployeeList from store:", employeeList); // Vérifiez l'état brut du store

    // Vérifiez la longueur et le contenu de employeeList
    if (employeeList.length === 0) {
      console.log("EmployeeList is empty.");
    } else {
      console.log("EmployeeList contains:", employeeList);
    }

    const flattenedData = employeeList
      .flatMap((item) => {
        console.log("Processing item:", item);
        if (item.employeeInfo && item.adress && item.service) {
          const { employeeInfo, adress, service } = item;
          const { firstName, lastName, birthDate } = employeeInfo;
          const { street, city, state, zip } = adress;
          const { startDate, department } = service;

          return {
            firstName,
            lastName,
            birthDate,
            department,
            street,
            city,
            abbreviation: state?.abbreviation || "", // Vérifiez si abbreviation existe
            zip,
            startDate,
          };
        } else {
          console.log("Skipping item due to missing data:", item);
          return null;
        }
      })
      .filter(Boolean);

    console.log("Flattened Data:", flattenedData);
    setFlated(flattenedData);
  }, [employeeList]);

  console.log("Flated Data before rendering:", flated);

  if (!flated.length) {
    return <p>Loading...</p>; // Affiche un message de chargement si aucune donnée n'est disponible
  }

  return (
    <main className="ViewCurrentEmployeesPageMain">
      <h1 className="ViewCurrentEmployeesPageMain__Title">Database</h1>
      <EmployeesTable datas={flated} />
    </main>
  );
}
