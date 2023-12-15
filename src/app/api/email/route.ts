import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { email, name, message, subject, phoneNumber } = await request.json()

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.RECEIVER_EMAIL,
      pass: process.env.RECEIVER_EMAIL_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: process.env.RECEIVER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: ` ${subject} - ${name}`,
    text: `
    Uma nova mensagem de contato por meio do formulário do site. Abaixo estão os detalhes fornecidos: 

    Nome do Remetente: ${name}
    Endereço de E-mail: ${email}
    Número de Telefone: ${phoneNumber}
    Mensagem: ${message}, <br>  `,
    html: `
    <p>Uma nova mensagem de contato por meio do formulário do site. Abaixo estão os detalhes fornecidos:</p>

    <ul>
      <li><strong>Nome do Remetente:</strong> ${name}</li>
      <li><strong>Endereço de E-mail:</strong> ${email}</li>
      <li><strong>Número de Telefone:</strong> ${phoneNumber}</li>
      <li><strong>Mensagem:</strong> ${message}</li>
    </ul>`,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
