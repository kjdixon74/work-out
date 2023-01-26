import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Toast from "../components/toast";

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={[{ title: "event 1", date: "2023-01-01" }]}
          dateClick={this.handleDateClick}
        />
        <Toast />
      </div>
    );
  }

  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

// left off here - think I need to swap toast for popover
