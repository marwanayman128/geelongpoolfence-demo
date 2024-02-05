import { createHash } from 'crypto';

import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const rateLimitWindowMs = 60000; // 1 minute
const maxRequestsPerWindow = 5;

// Store the timestamp of each request for each IP address
const requestTimestamps = new Map<string, number[]>();

function hasExceededRateLimit(ip: string | undefined): boolean {
  if (!ip) {
    return false; // Handle the case when the IP is undefined
  }
  const timestamps = requestTimestamps.get(ip) || [];
  const currentTime = Date.now();
  const windowStart = currentTime - rateLimitWindowMs;

  // Only keep timestamps within the current window
  const recentTimestamps = timestamps.filter((timestamp) => timestamp > windowStart);

  // Check if the number of requests within the window exceeds the limit
  return recentTimestamps.length >= maxRequestsPerWindow;
}

function recordRequestTimestamp(ip: string | undefined): void {
  if (ip) {
    const timestamps = requestTimestamps.get(ip) || [];
    const currentTime = Date.now();
    timestamps.push(currentTime);
    requestTimestamps.set(ip, timestamps);
  }
}

export async function POST(request: NextRequest) {
  const { email, name, message, phone, address = null, inspection = null } = await request.json();
  const ip = request.headers.get('x-forwarded-for') || request.ip;

  // Check if the IP has exceeded the rate limit
  if (hasExceededRateLimit(ip)) {
    return NextResponse.json({ message: 'Rate limit exceeded. Please try again later.' }, { status: 429 });
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
   
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    cc: ['danielcooper.quad@gmail.com','ajqms95@gmail.com','mick@geelongpoolfence.com.au'],
    subject: `GeeLong Pool Landing Page - Message from ${name} (${email})`,
    
    html: `<div style="background-color: #1f2937; margin-top: 8px; padding: 16px; background-image: url('https://quadsolution.com/images/case-study/rays.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
    <h3 style="text-align: left;  font-weight: bold; color: #ffffff; margin-bottom: 1rem; margin-top: 1rem;">
      Message from: <span style="color: #2FA8FD;"> ${name} </span>
      <br />
      Email: <span style="color: #2FA8FD;"> ${email} </span>
      <br />
      Phone: <span style="color: #2FA8FD;"> ${phone} </span>
      ${address ? `<br /> Address: <span style="color: #2FA8FD;"> ${address} </span>` : ''}
      ${inspection ? `<br /> Inspection: <span style="color: #2FA8FD;"> ${inspection} </span>` : ''}
    </h3>
    <h1 style="text-align: center;  font-weight: bold; color: #ffffff; margin-bottom: 1rem;">
       ${message}
    </h1>
    <div style="text-align: center;">
      <img src="https://quadsolution.com/images/logo.png" alt="Logo" style="text-align: center; margin-top: 2rem; width: 200px; height: 60px;"/>
    </div>
  </div>
 `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    recordRequestTimestamp(ip);
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
