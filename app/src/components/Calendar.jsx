import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return <DatePicker showIcon id="calendar" selected={startDate} onChange={(date) => setStartDate(date)} />;
};