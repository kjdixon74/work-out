import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ToastEl from "../components/toast";
import PopoverGoals from "../components/popover";
import Modal from "../components/modal";
import styles from "../styles/Demo.module.css";

export default class Demo extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <ToastEl />
        <PopoverGoals />
        <Modal />
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={[{ title: "workout 1", date: "2023-02-01" }]}
          dateClick={this.handleDateClick}
        />
      </div>
    );
  }

  handleDateClick = (arg) => {
    // bind with an arrow function
    const date = arg.date.toISOString().substring(0, 10);

    // Open workout form
    document.querySelector(".log-workout-modal").click();

    // Set date to date clicked on calendar
    document.querySelector("#date").value = date;
  };
}
// Lesson learned: must set date in ISO format (YYYY-MM-DD)

// TODOs: add responsive styling; once form is successfully filled out, validated, and submitted, add event to calendar; allow user to click on event and see details of workout
