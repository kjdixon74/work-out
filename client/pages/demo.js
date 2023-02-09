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
    const dateStr = arg.dateStr;
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(5, 7);
    const day = dateStr.slice(8, 10);
    const date = `${month}/${day}/${year}`;

    console.log(date);
    document.querySelector(".log-workout-modal").click();
  };
}

// TODOs: figure out how to pass date clicked on calendar to workout form, add responsive styling
