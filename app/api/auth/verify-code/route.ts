import { db } from '@/lib/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();
    const emailKey = email.toLowerCase();

    // 1. Fetch the stored code from Firebase
    const docRef = doc(db, "auth_codes", emailKey);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ error: "Code expired or not found. Please request a new one." }, { status: 400 });
    }

    const data = docSnap.data();

    // 2. Validate code and expiration
    if (data.code === code && Date.now() < data.expiresAt) {
      
      // 3. SUCCESS: Delete the code so it can't be used again
      await deleteDoc(docRef);

      // 4. SESSION: Set an HTTP-only cookie to keep them logged in
      // In a real production app, you'd use a JWT here, 
      // but for now, we'll set a simple 'session' cookie.
      const cookieStore = await cookies();
      cookieStore.set('staff_session', emailKey, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 });
    }
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ error: "Server error during verification" }, { status: 500 });
  }
}