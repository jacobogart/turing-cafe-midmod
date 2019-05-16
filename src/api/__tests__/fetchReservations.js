import { fetchReservations } from "../fetchReservations";

describe('fetchReservations', () => {
  const url = "http://localhost:3001/api/v1/reservations";
  const mockReservation = {
    name: 'Jacob',
    date: '12/34',
    time: '12:00pm',
    number: 1,
    id: 1
  }
  const mockResList = [mockReservation, mockReservation];
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResList)
  }));

  it('should call fetch with the correct params', () => {
    fetchReservations();
    expect(fetch).toBeCalledWith(url);
  });

  it('should return an array of reservations', async () => {
    const result = await fetchReservations();
    expect(result).toEqual(mockResList);
  });

  it('should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({ ok: false }));

    try {
      await fetchReservations() 
    } catch(error) {
      expect(error.message).toEqual("Error fetching reservations");
    }
  });
});
