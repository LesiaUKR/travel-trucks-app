import {
  BookForm,
  BookFormInputWrapper,
  BookFormText,
  BookFormTitle,
} from "./BookCamperForm.styled";
import InputDefault from "../InputDefault/InputDefault";
import InputDatePicker from "../InputDatePicker/InputDatePicker";
import DefaultBtn from "./../DefaultBtn/DefaultBtn";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function BookCamperForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, bookingDate: date }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.bookingDate)
      newErrors.bookingDate = "Booking date is required";
    return newErrors;
  };

  console.log("formData", formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      toast.success("Booking successful!");
      setFormData({
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      });
    }
  };

  return (
    <BookForm onSubmit={handleSubmit}>
      <BookFormTitle>Book your campervan now</BookFormTitle>
      <BookFormText>
        Stay connected! We are always ready to help you.
      </BookFormText>
      <BookFormInputWrapper>
        <InputDefault
          type="text"
          placeholder="Name*"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name && "error"}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <InputDefault
          type="email"
          placeholder="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email && "error"}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <InputDatePicker
          className="bookFormInput"
          placeholder="Booking date*"
          selectedDate={formData.bookingDate}
          onChange={handleDateChange}
          name="bookingDate"
        />
        {errors.bookingDate && (
          <p className="error-text">{errors.bookingDate}</p>
        )}
        <InputDefault
          type="textarea"
          className="bookFormTextarea"
          placeholder="Comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </BookFormInputWrapper>
      <DefaultBtn type="submit" text="Send" className="bookFormBtn" />
      <Toaster position="top-right" />
    </BookForm>
  );
}
