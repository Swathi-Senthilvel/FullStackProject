/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-useless-concat */
import axios from 'axios';

const URL = 'http://localhost:8080/booking';

class BookingService {
  getAllBookings() {
    return axios.get(URL);
  }

  createBooking(booking) {
    return axios.post(URL, booking);
  }

  getBookingById(ticket_id) {
    return axios.get(URL+'/' + ticket_id);
  }

  updateBooking(ticket_id, booking) {
  
    return axios.put(URL+ '/' + ticket_id, booking);
  }

  deleteBooking(sno) {
    return axios.delete(URL + '/' + sno);
  }

  deleteAllBookings() {
    return axios.delete(URL);
  }
}

export default new BookingService();