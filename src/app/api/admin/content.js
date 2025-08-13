import mysql from 'mysql2/promise';

export async function GET(req) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  const [rows] = await connection.query('SELECT * FROM content');
  await connection.end();
  return new Response(JSON.stringify(rows), { status: 200 });
}

export async function PUT(req) {
  const body = await req.json();
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  // Contoh update: body harus berisi { key, value }
  await connection.execute('UPDATE content SET value = ? WHERE `key` = ?', [body.value, body.key]);
  await connection.end();
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
