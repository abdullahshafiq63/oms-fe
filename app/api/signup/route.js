
import { NextResponse } from 'next/server';
// import cookie from 'cookie';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    const response = await fetch('http://oms-be.onrender.com/authentication/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Registration failed' }, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
