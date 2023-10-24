'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const sendEmailFormSchema = z.object({
  name: z
    .string()
    .min(6, {
      message: 'O nome precisa ter pelo menos 6 caracteres.',
    })
    .max(20, {
      message: 'O nome pode ter no máximo 20 caracteres.',
    }),

  email: z.string().regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i, {
    message: 'O email precisa ter um formato válido de e-mail.',
  }),

  phoneNumber: z.string(),
  subject: z
    .string()
    .min(10, 'O assunto precisa ter pelo menos 10 caracteres.')
    .max(32, 'O assunto precisa ter no máximo 20 caracteres.'),
  message: z
    .string()
    .min(16, 'A mensagem precisa ter pelo menos 16 caracteres.')
    .max(240, 'A mensagem precisa ter no máximo 240 caracteres.'),
})

type SendEmailFormData = z.infer<typeof sendEmailFormSchema>

export function useEmailController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  const handleSubmit = hookFormHandleSubmit(
    ({ name, phoneNumber, email, subject, message }: SendEmailFormData) => {
      console.log({ name, phoneNumber, email, subject, message })
    },
  )

  return { register, errors, isSubmitting, handleSubmit }
}
