export const fetchAddReservation = ({ name, date, time, number }) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ name, date, time, number }),
    headers: { "Content-Type": "application/json" }
  };
  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Error adding reservation')
      } else {
        return response.json();
      }
    })
}