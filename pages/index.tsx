import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * 1) Реализовать подгрузку списка по кнопке
 * 2) Реализовать поиск по загруженным данным
 * 3) Реализовать пререндер для первой загрузки
*/

type Passenger = { 
  name: string
};

const Home: NextPage = () => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get(`api/passengers?page=${page}`)
      .then((resp) => setPassengers(resp.data));
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
