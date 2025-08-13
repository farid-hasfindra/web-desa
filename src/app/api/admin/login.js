import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { username, password } = await req.json();
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  const [rows] = await connection.execute('SELECT * FROM admin WHERE username = ?', [username]);
  if (rows.length === 0) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 401 });
  }
  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
  }
  // You can use JWT or session here, for now just return success
  return new Response(JSON.stringify({ success: true, username: user.username }), { status: 200 });
}
