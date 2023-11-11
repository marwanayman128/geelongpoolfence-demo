import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const requestTimestamps = new Map<string, number[]>();
const rateLimitWindowMs = 15 * 60 * 1000; // 15 minutes
const maxRequestsPerWindow = 5; // 5 requests per 15 minutes



export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  console.log("forwardedFor",forwardedFor)
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : request.ip || 'DEFAULT_IP';

  console.log("ip",ip)
  // Check if the IP has exceeded the rate limit
  if (hasExceededRateLimit(ip)) {
    return NextResponse.json({ message: 'Rate limit exceeded. Please try again later.' }, { status: 429 });
  }
  const { email, name, message , phone , address = null, inspection = null } = await request.json();
  recordRequestTimestamp(ip);
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
    cc: ['aymanmarwan00@gmail.com'],
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
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}


function hasExceededRateLimit(ip: string): boolean {
  const timestamps = requestTimestamps.get(ip) || [];
  const currentTime = Date.now();
  const validRequests = timestamps.filter((timestamp) => currentTime - timestamp < rateLimitWindowMs);

  if (validRequests.length >= maxRequestsPerWindow) {
    return true; // Exceeded rate limit
  }

  return false;
}

function recordRequestTimestamp(ip: string): void {
  const timestamps = requestTimestamps.get(ip) || [];
  timestamps.push(Date.now());
  requestTimestamps.set(ip, timestamps);
}