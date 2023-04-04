import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

type Payload = {
  page: number;
  size: number;
};
export default (req: NextApiRequest, res: NextApiResponse) => {
  const payload = {
    page: req?.query?.page || 0,
    size: req?.query?.size || 5,
  } as Payload;

  res
    .status(200)
    .json(
      Array
        .from({ length: payload.size })
        .map(i => ({ name: faker.name.firstName() }))
    )
};
