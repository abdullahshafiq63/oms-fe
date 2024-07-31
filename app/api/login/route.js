import { NextResponse } from 'next/server';
import { headers, cookies } from "next/headers";

export async function POST(request) {
  try {
   
    
    const { email, password } = await request.json();

    const response = await fetch('http://oms-be.onrender.com/authentication/log-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie' : 'Authentication=Authentication'
      },
      body: JSON.stringify({ email, password }),
    });


    if (!response.ok) {
      return NextResponse.json({ error: 'Login failed' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}