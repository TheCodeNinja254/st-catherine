import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import EventModal from "@/components/common/event_modal";

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
const fakeFetch = (date: Dayjs, { signal }: { signal: AbortSignal }) => {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    const handleAbort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };

    signal.addEventListener("abort", handleAbort);

    // Cleanup the event listener when the promise settles
    return () => {
      signal.removeEventListener("abort", handleAbort);
    };
  });
};

// const initialValue = dayjs("2022-04-17");
const initialValue = dayjs();

function ServerDay(
  props: PickersDayProps<Dayjs> & {
    highlightedDays?: number[];
    onClick?: (day: Dayjs) => void;
  }
) {
  const {
    highlightedDays = [],
    day,
    outsideCurrentMonth,
    onClick,
    ...other
  } = props;

  const isSelected =
    !outsideCurrentMonth && highlightedDays.indexOf(day.date()) >= 0;

  const handleClick = () => {
    if (onClick) {
      onClick(day);
    }
  };

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "🥰" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        onClick={handleClick} // Add click handler
      />
    </Badge>
  );
}

const EventCalendar = () => {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 8]);

  const [selectedDate, setSelectedDate] = React.useState<Dayjs>();

  const [open, setOpen] = React.useState(false);
  const handleOpen = (passedDay: Dayjs) => {
    setOpen(true);
    setSelectedDate(passedDay);
  };
  const handleClose = () => setOpen(false);

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);

    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  const handleDayClick = (day: Dayjs) => {
    handleOpen(day);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
          onMonthChange={handleMonthChange}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
              onClick: handleDayClick, // Pass click handler to day slot
            } as any,
          }}
        />
      </LocalizationProvider>
      <EventModal open={open} handleClose={handleClose} date={selectedDate} />
    </div>
  );
};

export default EventCalendar;
