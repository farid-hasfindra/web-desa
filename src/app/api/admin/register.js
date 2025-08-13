import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return new Response(JSON.stringify({ error: 'Username dan password wajib diisi.' }), { status: 400 });
  }
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  const [rows] = await connection.execute('SELECT * FROM admin WHERE username = ?', [username]);
  if (rows.length > 0) {
    await connection.end();
    return new Response(JSON.stringify({ error: 'Username sudah terdaftar.' }), { status: 400 });
  }
  const hash = await bcrypt.hash(password, 10);
  await connection.execute('INSERT INTO admin (username, password) VALUES (?, ?)', [username, hash]);
  await connection.end();
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
