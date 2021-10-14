import React from "react";
const ics = require("ics");
import { Button } from "@material-ui/core";

const Calendar = () => {
  const generateEvent = () => {
    // const event = {
    //   start: [2021, 10, 14, 6, 30],
    //   duration: { hours: 0, minutes: 15 },
    //   title: 'Daily Coding Journal',
    //   description: 'Reminder to log your progress for the day',
    //   url: 'http://localhost:3000',
    //   geo: { lat: 40.0095, lon: 105.2669 },
    //   status: 'CONFIRMED',
    //   busyStatus: 'BUSY',
    // alarms: { action: 'audio', description: 'Reminder', trigger: { hours: 2, minutes: 30, before: true }, repeat: 2, attachType: 'VALUE=URI', attach: 'Glass' },
    //   recurrenceRule: 'FREQ=DAILY'
    // }
    ics.createEvent(
      {
        start: [2021, 10, 14, 17, 30],
        duration: { hours: 0, minutes: 15 },
        title: "Daily Coding Journal",
        description: "Reminder to log your progress for the day",
        url: "http://localhost:3000",
        busyStatus: "BUSY",
        recurrenceRule: "FREQ=DAILY",
        alarms: {
          action: "audio",
          description: "Reminder",
          trigger: { hours: 0, minutes: 5, before: true },
          repeat: 2,
          attachType: "VALUE=URI",
          attach: "Glass",
        },
      },
      (error, value) => {
        if (error) {
          console.log(error);
        }
        window.open("data:text/calendar;charset=utf8," + escape(value));
      }
    );
  };

  return (
    <Button variant="contained" onClick={generateEvent}>
      Create Daily Reminder
    </Button>
  );
};

export default Calendar;
