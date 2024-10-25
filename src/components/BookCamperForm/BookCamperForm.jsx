import { BookForm, BookFormInputWrapper, BookFormText, BookFormTitle } from './BookCamperForm.styled'
import InputDefault from '../InputDefault/InputDefault'
import InputDatePicker from '../InputDatePicker/InputDatePicker'
import DefaultBtn from './../DefaultBtn/DefaultBtn';

export default function BookCamperForm() {
  return (
    <BookForm>
      <BookFormTitle>Book your campervan now</BookFormTitle>
      <BookFormText>Stay connected! We are always ready to help you.</BookFormText>
    <BookFormInputWrapper>
<InputDefault type="text"  placeholder="Name*"/>
<InputDefault type="email" placeholder="Email*"/>
<InputDatePicker className="bookFormInput" placeholder="Booking date*" />
<InputDefault type="textarea" className="bookFormTextarea" placeholder="Comment"/>
    </BookFormInputWrapper>
    <DefaultBtn type="submit" text="Send" className="bookFormBtn" />
    </BookForm>
  )
}
