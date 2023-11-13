import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import "./userTable.css";

export default function UserTable({ rows, deleteRow, editRow }) {
  return (
    <div className="table-wrapper">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">user name</th>
            <th scope="col">email</th>
            <th scope="col">phone no.</th>
            <th scope="col">age</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>{row.age}</td>
                <td className="actions">
                  <span>
                    <FiEdit
                      className="edit"
                      onClick={() => {
                        editRow(idx);
                      }}
                    ></FiEdit>
                  </span>
                  <span>
                    <MdDeleteOutline
                      className="delete"
                      onClick={() => {
                        deleteRow(idx);
                      }}
                    ></MdDeleteOutline>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
