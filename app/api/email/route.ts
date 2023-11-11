import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


export async function POST(request: NextRequest) {
  const { email, name, message , phone , address = null, inspection = null } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
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