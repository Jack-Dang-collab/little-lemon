import React, { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose Date</label>
              <input id='book-date' type='date' value={date} onChange={(e) => handleChange(e.target.value)} required />
            </div>

            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor='book-guests'>Number of Guests:</label>
              <input id='book-guests' type='number' min='1' max='30' value={guests} onChange={(e) => setGuests(e.target.value)} required />
            </div>

            <div>
              <label htmlFor='book-occasion'>Occasion:</label>
              <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)} required>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className='btnReceive'>
              <input aria-label='On Click' type='submit' value="Make Your Reservation" />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default BookingForm;
