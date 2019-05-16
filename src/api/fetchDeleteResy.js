export const fetchDeleteResy = id => {
  const options = {
    method: 'DELETE'
  }
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
    .then(response => {
      if(!response.ok) {
        throw Error('Error deleteing reservation')
      } else {
        return response.json()
      }
    })
}
