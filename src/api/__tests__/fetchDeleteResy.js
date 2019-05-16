import { fetchDeleteResy } from "../fetchDeleteResy";

describe('fetchDeleteResy', () => {
  const url = 'http://localhost:3001/api/v1/reservations/1';
  const options = { method: "DELETE" };
  const mockReservation1 = {
    name: 'Jacob',
    date: '12/34',
    time: '12:00pm',
    number: 1,
    id: 1
  }

  const mockReservation2 = {
    name: 'Tiff',
    date: '43/21',
    time: '1:00pm',
    number: 1,
    id: 2
  }

  const mockResyList = [mockReservation1, mockReservation2];

  window.fetch = jest.fn().mockImplementation((id) => Promise.resolve({
    ok: true,
    json: () => mockResyList.filter(resy => resy.id !== id)
  }))
  it('should call fetch with the correct params', () => {
    fetchDeleteResy(1);
    expect(fetch).toHaveBeenCalledWith(url, options);
  });
})