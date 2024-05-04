import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../hooks/useForm";

const LoginModal = ({
  handleCloseModal,
  onClose,
  handleRegisterModal,
  onSubmit,
  isLoading,
}) => {
  const { values, handleChange, setValues } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <ModalWithForm title="Sign in" onClose={onClose} onSubmit={handleSubmit}>
      <div className="modal__input">
        <label>
          Email
          <input
            className="modal__input"
            type="email"
            name="email"
            minLength="1"
            maxLength="30"
            placeholder="Enter Email"
            value={values.email || ""}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            className="modal__input"
            type="password"
            name="password"
            minLength="8"
            maxLength="30"
            placeholder="Enter Password"
            value={values.password || ""}
            required
            onChange={handleChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
