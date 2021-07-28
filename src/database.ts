// import pg from 'pg';

// const { Pool } = pg;

// const connection = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   port: Number(process.env.DB_PORT),
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE
// });

// export default connection;

import { getConnectionManager } from "typeorm";

export default async function connectDatabase () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url: "postgres://postgres:123456@localhost:5432/repoprovas",
    entities: ["src/entities/*.ts"]
  });
  await connection.connect();
  return connection;
}