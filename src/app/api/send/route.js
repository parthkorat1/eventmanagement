// api/resend/route.ts
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { getAuth } from '@clerk/nextjs/server';
import { useAuth } from '@clerk/nextjs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
 
  const userid = request.body
  console.log(userid);
  
  try {
    const user = await clerkClient.users.getUser(userid);
   

    // for devloper

    const devloper =  await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['rksingh19900601@gmail.com'],
      subject: `Visit Event Management${user.firstName}` ,
      react: emailContent,
    });

    if (errord) {
      return Response.json({ errord }, { status: 500 });
    }
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
