"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import "./calendar.css"; // We'll need some custom CSS to match the design

export default function FullCalendarWrapper() {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Md Tajuddin - Gen",
      start: "2026-04-26T09:30:00",
      end: "2026-04-26T10:00:00",
      classNames: ["event-scheduled"],
    },
    {
      id: "2",
      title: "Shakib - Follow Up",
      start: "2026-04-26T10:30:00",
      end: "2026-04-26T11:00:00",
      classNames: ["event-followup"],
    },
    {
      id: "3",
      title: "Asif Khan - Gen",
      start: "2026-04-27T09:00:00",
      end: "2026-04-27T09:30:00",
      classNames: ["event-scheduled"],
    },
    {
      id: "4",
      title: "Rakib - Checkup",
      start: "2026-04-27T11:30:00",
      end: "2026-04-27T12:00:00",
      classNames: ["event-completed"],
    },
    {
      id: "5",
      title: "Hasan - Urgent",
      start: "2026-04-28T14:00:00",
      end: "2026-04-28T15:00:00",
      classNames: ["event-cancelled"],
    },
    {
      id: "6",
      title: "Monir - Review",
      start: "2026-04-29T10:00:00",
      end: "2026-04-29T10:30:00",
      classNames: ["event-noshow"],
    }
  ]);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate="2026-04-01"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        height="700px"
        eventContent={(eventInfo) => {
          return (
            <div className="w-full truncate px-1 text-xs font-semibold">
              {eventInfo.event.title}
            </div>
          );
        }}
      />
    </div>
  );
}
