import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import { useEffect, useState } from "react";
import {
  Scheduler,
  DayView,
  AppointmentForm,
  AppointmentTooltip,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import Paper from "@mui/material/Paper";
import "./Calendar.scss";

//
const Calendar = () => {
    
  const [date, setDate] = useState<string>(); //hook for holding date State
 
  const currentDate = "2022-06-30";  //current date(It may come from Date Object)
  useEffect(() => {
    const newDate = new Date();

    let dateIntext = newDate.toISOString();
    let combinedText = dateIntext.split("T");
    let r = combinedText[0] + "T";

    console.log("date", r);
    setDate(r);
  }, []);

  const data = [
    { from: 10, to: 11, title: "work" },
    { from: 10, to: 13, title: "work" },
    { from: 19, to: 21, title: "ka" },
    { from: 7, to: 9, title: "oo" },
  ];

  const sch = data.map((v) => {
    return {
      startDate: `${date}${v.from}`,
      endDate: `${date}${v.to}`,
      title: v.title,
    };
  });

  const saveAppointment = (data: any) => {
    //function for save 
     
  };

  return (
    <>
      <Paper>
        <Scheduler data={sch}>
          {/* <ViewState /> */}
          <ViewState currentDate={currentDate} />
          <EditingState onCommitChanges={saveAppointment} />
          <IntegratedEditing />
          <DayView startDayHour={8} endDayHour={19} />
          <Appointments />
          <AppointmentTooltip visible={false} />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </>
  );
};
export default Calendar;
