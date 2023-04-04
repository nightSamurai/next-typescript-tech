import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

/**
 * 1) Реализовать подгрузку списка по кнопке
 * 2) Реализовать поиск по загруженным данным
 */
type Passenger = { name: string };
const Home: NextPage = () => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`api/passengers?page=${page}`)
      .then((r) => r.json())
      .then((resp) => setPassengers(resp));
  }, []);

  return (
    <div className="wrap">
      <h1>Passengers</h1>
      <input placeholder="Search..." />
      <ul>
        {passengers.map((p) => (
          <li>{p.name}</li>
        ))}
      </ul>
      <button>Load more</button>
    </div>
  );
};

export default Home;
