import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../App.css'

export default function CalendarPage() {

  return (
    <>
      <div className='calendar-container'>
        <Calendar className='calendar'/>
      </div>
    </>
  )
}
