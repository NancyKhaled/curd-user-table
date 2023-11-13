import React, { useState } from "react";
import "./modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      name: "",
      email: "",
      phone: "",
      age: "",
    }
  );

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.name && formState.email && formState.phone && formState.age) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) return onSubmit(formState);
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            onClick={closeModal}
            type="button"
            className="btn-close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              value={formState.name}
              name="name"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="User Name"
            />
            <label htmlFor="floatingInput">User Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              value={formState.email}
              name="email"
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              value={formState.phone}
              name="phone"
              type="tel"
              className="form-control"
              id="floatingTel"
              placeholder="000 000 000"
            />
            <label htmlFor="floatingTel">Phone Number</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              value={formState.age}
              name="age"
              type="text"
              className="form-control"
              id="floatingAge"
              placeholder="Age"
            />
            <label htmlFor="floatingAge">Age</label>
          </div>
        </div>

        {errors && (
          <div className="errorMsg">{`Please include: ${errors}.`}</div>
        )}

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary close-btn"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
