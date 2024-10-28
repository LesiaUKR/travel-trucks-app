import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import InputDefault from "../InputDefault/InputDefault";
import InputDatePicker from "../InputDatePicker/InputDatePicker";
import DefaultBtn from "../DefaultBtn/DefaultBtn";

import {
  BookForm,
  BookFormInputsWrapper,
  BookFormText,
  BookFormTitle,
  InputWrapper,
} from "./BookCamperForm.styled";

export default function BookCamperForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: [null, null],
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateRangeChange = (date) => {
    setFormData((prevData) => ({ ...prevData, bookingDate: date }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.bookingDate[0] || !formData.bookingDate[1])
      newErrors.bookingDate = "Booking date range is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      toast.success("Your booking is successful!");
      setFormData({
        name: "",
        email: "",
        bookingDate: [null, null],
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
      <BookFormInputsWrapper>
      <InputWrapper>
        <InputDefault
          type="text"
          placeholder="Name*"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
        </InputWrapper>
        <InputWrapper>
        <InputDefault
          type="email"
          placeholder="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
      
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        </InputWrapper>
        <InputWrapper>
        <InputDatePicker
          className="bookFormInput"
          placeholder="Booking date*"
          startDate={formData.bookingDate[0]}
          endDate={formData.bookingDate[1]}
          onChange={handleDateRangeChange}
          name="bookingDate"
        />
        {errors.bookingDate && (
          <p className="error-text">{errors.bookingDate}</p>
        )}
        </InputWrapper>
        <InputDefault
          type="textarea"
          className="bookFormTextarea"
          placeholder="Comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </BookFormInputsWrapper>
      <DefaultBtn type="submit" text="Send" className="book-form-btn" />
      <Toaster position="top-right" />
    </BookForm>
  );
}
