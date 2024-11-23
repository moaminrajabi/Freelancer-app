import React from "react";
import DatePiker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePikerField({ label, date, setDate }) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700"> {label} </span>
      <DatePiker
        containerClassName="w-full "
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePikerField;
