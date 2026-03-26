import { Resend } from 'resend';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const cleanEmail = email.trim().toLowerCase();

    // 1. Check staff-members (Matches your screenshot dash)
    const staffRef = doc(db, "staff-members", cleanEmail);
    const staffSnap = await getDoc(staffRef);

    if (!staffSnap.exists()) {
      return NextResponse.json(
        { error: "Access Denied: Email not registered." }, 
        { status: 403 }
      );
    }

    // 2. Generate code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // 3. Save to auth_codes
    await setDoc(doc(db, "auth_codes", cleanEmail), {
      code,
      expiresAt: Date.now() + 5 * 60 * 1000
    });

    // 4. Send Email 
    // NOTE: Use onboarding@resend.dev if you haven't verified a domain yet
    await resend.emails.send({
      from: 'True Salvation <onboarding@resend.dev>',
      to: cleanEmail,
      subject: `${code} - Staff Login Code`,
      html: `
        <div style="font-family: sans-serif; text-align: center;">
          <h2 style="color: #E8751A;">True Salvation Church</h2>
          <p>Your portal access code is:</p>
          <h1 style="letter-spacing: 5px; font-size: 32px;">${code}</h1>
          <p>This code expires in 5 minutes.</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DEBUG:", error);
    return NextResponse.json({ error: "Check Resend API Key in .env" }, { status: 500 });
  }
}