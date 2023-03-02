import axios from "axios";
import React, { useEffect, useState } from "react";

// Import File
import { dataDummy, dataRandom, dataCars } from "./Data";

export default function DataDummy() {
  const dataName = [
    "Jon",
    "Heri",
    "Rober",
    "Tita",
    "Oktya",
    "Wandi",
    "Astro",
    "Boy",
  ];
  const [dataDummy2, setDataDummy2] = useState([]);
  const [dataNameAscending, setDataNameAscending] = useState([]);
  const [dataNameDescending, setDataNameDescending] = useState([]);

  let addDataCar = {
    id: "4",
    color: "blue",
    type: "Mercedes",
    registration: "2023-05-01",
    capacity: 21,
  };

  let findCar = dataCars.find((car) => car.color === "red");
  console.log("findCar: ", findCar);

  const fetcDataDummyApi = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/v1/dummydatas"
      );
      console.log("dataFromAPI", response.data.data);
      setDataDummy2(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcDataDummyApi();
    setDataNameAscending(dataName.sort((a, b) => (a > b ? 1 : -1)));
    setDataNameDescending(dataName.sort((a, b) => (b > a ? 1 : -1)));
    // dataCars.unshift(carUnshift);
  }, []);

  return (
    <div className="container">
      <h1>Test View Data Dummy</h1>
      <hr />

      <h4 className="mt-4">Data Name Dummy</h4>
      <ol class="list-group list-group-numbered">
        {dataName.map((row, index) => (
          <li class="list-group-item">Name: {row}</li>
        ))}
      </ol>

      <h4 className="mt-4">Data Name Dummy - Sort Ascending</h4>
      <ol class="list-group list-group-numbered">
        {dataNameAscending.map((row, index) => (
          <li class="list-group-item">Name: {row}</li>
        ))}
      </ol>

      <h4 className="mt-4">Data Name Dummy - Sort Descending</h4>
      <ol class="list-group list-group-numbered">
        {dataNameDescending.map((row, index) => (
          <li class="list-group-item">Name: {row}</li>
        ))}
      </ol>

      <h4 className="mt-4">
        Data Car Dummy - Find Car {findCar.color.toUpperCase}
      </h4>
      <ol class="list-group list-group-numbered">
        <li class="list-group-item">
          Name: <strong>{findCar.color}</strong>
        </li>
        <li class="list-group-item">
          Type: <strong>{findCar.type}</strong>
        </li>
        <li class="list-group-item">
          Registration: <strong>{findCar.registration}</strong>
        </li>
        <li class="list-group-item">
          Capacity: <strong>{findCar.capacity}</strong>
        </li>
      </ol>

      <h4 className="mt-4">Data Car Dummy</h4>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center", width: "80px" }}>
              No
            </th>
            <th scope="col" style={{ textAlign: "center", width: "100px" }}>
              ID
            </th>
            <th scope="col" style={{ width: "100px" }}>
              Color
            </th>
            <th scope="col">Type</th>
            <th scope="col" style={{ textAlign: "center", width: "100px" }}>
              registration
            </th>
            <th scope="col" style={{ textAlign: "center", width: "100px" }}>
              Capacity
            </th>
            <th scope="col" style={{ textAlign: "center", width: "130px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataCars.map((row, index) => (
            <tr>
              <th style={{ textAlign: "center" }}>{index + 1}</th>
              <td style={{ textAlign: "center" }}>{row.id}</td>
              <td>{row.color}</td>
              <td>{row.type}</td>
              <td style={{ textAlign: "center" }}>{row.registration}</td>
              <td style={{ textAlign: "center" }}>{row.capacity}</td>
              <td style={{ textAlign: "center" }}>
                <div className="dropdown">
                  <button
                    className="btn btn-success btn-sm dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Option
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-4">Data Random Dummy - Sort Ascending By ID</h4>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center", width: "80px" }}>
              No
            </th>
            <th scope="col" style={{ textAlign: "center", width: "100px" }}>
              ID
            </th>
            <th scope="col" style={{ textAlign: "center", width: "100px" }}>
              Qty
            </th>
            <th scope="col">Size</th>
            <th scope="col" style={{ textAlign: "center", width: "130px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataRandom.map((row, index) => (
            <tr>
              <th style={{ textAlign: "center" }}>{index + 1}</th>
              <td style={{ textAlign: "center" }}>{row.id}</td>
              <td style={{ textAlign: "center" }}>{row.qty}</td>
              <td>{row.size}</td>
              <td style={{ textAlign: "center" }}>
                <div className="dropdown">
                  <button
                    className="btn btn-success btn-sm dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Option
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-4">Data Dummy in Front-End</h4>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center", width: "80px" }}>
              No
            </th>
            <th scope="col" style={{ textAlign: "center", width: "100px" }}>
              ID
            </th>
            <th scope="col">Fullname</th>
            <th scope="col" style={{ textAlign: "center", width: "130px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataDummy.map((row, index) => (
            <tr>
              <th style={{ textAlign: "center" }}>{index + 1}</th>
              <td style={{ textAlign: "center" }}>{row.id}</td>
              <td>{row.fullname}</td>
              <td style={{ textAlign: "center" }}>
                <div className="dropdown">
                  <button
                    className="btn btn-success btn-sm dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Option
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-4">Data From API</h4>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center", width: "80px" }}>
              No
            </th>
            <th scope="col" style={{ textAlign: "center", width: "100px" }}>
              ID
            </th>
            <th scope="col">Title</th>
            <th scope="col" style={{ textAlign: "center", width: "130px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataDummy2.map((row, index) => (
            <tr>
              <th style={{ textAlign: "center" }}>{index + 1}</th>
              <td style={{ textAlign: "center" }}>{row.id}</td>
              <td>{row.title}</td>
              <td style={{ textAlign: "center" }}>
                <div className="dropdown">
                  <button
                    className="btn btn-success btn-sm dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Option
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
