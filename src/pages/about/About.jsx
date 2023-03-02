import axios from "axios";
import React from "react";

// import Data
import { dataDummy } from "./Data";

export default function About() {
  return (
    <div className="container">
      <h1>Welcome to About</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Id</th>
            <th scope="col">Fullname</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataDummy.map((row, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{row.id}</td>
              <td>{row.fullname}</td>
              <td>
                <a href="" className="btn btn-warning btn-sm">
                  EEdit
                </a>
                <a href="" className="btn btn-danger btn-sm ms-2">
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
