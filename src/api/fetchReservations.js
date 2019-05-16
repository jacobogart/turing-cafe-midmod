export const fetchReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching reservations')
      } else {
        return response.json()
      }})
}