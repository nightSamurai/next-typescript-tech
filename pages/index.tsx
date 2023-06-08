import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { log } from 'console';

/**
 * 1) Реализовать подгрузку списка по кнопке
 * 2) Реализовать поиск по загруженным данным
 * 3) Реализовать пререндер для первой загрузки
 */

type Passenger = {
  firstname: string;
  lastname: string;
};

const Home: NextPage = () => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakerapi.it/api/v1/persons?_quantity=5&_seed=${page}`)
      .then((resp) => setPassengers(resp.data.data));
  }, []);

  return (
    <div className="wrap">
      <h1>Passengers</h1>
      <input placeholder="Search..." />
      <ul>
        {passengers.map((p) => (
          <li>
            {p.firstname} {p.lastname}
          </li>
        ))}
      </ul>
      <button>Load more</button>
    </div>
  );
};

export default Home;
