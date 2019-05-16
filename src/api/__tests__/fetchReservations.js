describe('fetchReservations', () => {
  const url = "http://localhost:3001/api/v1/reservations";
  const mockReservation = {
    name: 'Jacob',
    date: '12/34',
    time: '12:00pm',
    number: 1,
    id: 1
  }
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve([mockReservation, mockReservation])
  }));

  it('should call fetch with the correct params', () => {
    expect(fetch).toBeCalledWith(url);
  })
})
