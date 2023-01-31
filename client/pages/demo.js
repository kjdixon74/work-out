import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ToastEl from "../components/toast";
import Modal from "../components/modal";
import styles from "../styles/Demo.module.css";

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <ToastEl />
        <div className={styles.container}>
          <Modal />
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={[{ title: "workout 1", date: "2023-01-01" }]}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }

  handleDateClick = (arg) => {
    // bind with an arrow function
    // alert(arg.dateStr);
    document.querySelector(".log-workout-modal").click();
  };
}
