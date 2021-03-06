import React, { useState } from 'react'
import './services.css'
import 'react-calendar/dist/Calendar.css'
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
// import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
const Services = () => {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
const events = [
  {
      title: "Azul 18",
      start: new Date(2022, 6, 20),
      end: new Date(2022, 6, 20),
  },
  {
    title: "Alhambra",
    start: new Date(2022, 6, 24),
    end: new Date(2022, 6, 24),
},
{
  title: "Fiesta Del Sol",
  start: new Date(2022, 6, 29),
  end: new Date(2022, 6, 29),
},
];

const [allEvents, setAllEvents] = useState(events);
// function handleAddEvent() {
//   setAllEvents([...allEvents, newEvent]);
// }
  return (
    <section id='calander'>Calander
    <div>
      <h1>Calendar</h1>
      {/* The below doesnt have a database events must be enetered manually.  */}
      {/* <h2>add new ebent </h2>
      <div>
        <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
      </div> */}
    <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
    </div>
    </section>
  )
}

export default Services