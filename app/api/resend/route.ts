import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/sections/test";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const requestData = await request.json();
  console.log('this is 1:', requestData);
  console.log('this is 3:', {...requestData});

  try {
    // Create the React component with the form data
    const emailContent = EmailTemplate({ formData: requestData }); // Pass the entire form data

    const data = await resend.emails.send({
      cc: [],
      to: ["aymanmarwan00@gmail.com"],
      bcc: [],
      from: "geelongpool@resend.dev",
      html: "<p>Congrats on sending your <strong>first email </strong>!</p>",
      tags: [],
      subject: "New message from geelongpool",
      react: emailContent, // Pass the dynamic content generated from the form data
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
