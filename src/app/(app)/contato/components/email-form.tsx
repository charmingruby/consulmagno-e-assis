import { Button } from '@/components/ui/button'
import { TextInput } from '@/components/ui/form/text-input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registerFormSchema = z.object({
  name: z
    .string()
    .min(6, {
      message: 'O usuário precisa ter pelo menos 6 letras.',
    })
    .max(20, {
      message: 'O usuário precisa pode ter no máximo 20 letras.',
    }),

  email: z.string().regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i, {
    message: 'O usuário precisa ter um formato válido de e-mail.',
  }),
})

export function EmailForm() {
  //   const {
  //     register,
  //     handleSubmit,
  //     setValue,
  //     formState: { errors, isSubmitting },
  //   } = useForm<RegisterFormData>({
  //     resolver: zodResolver(registerFormSchema),
  //   })

  return (
    <form className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4">
        <TextInput name="email" placeholder="Email" />
        <TextInput name="email" placeholder="Telefone" />
        <TextInput name="assunto" placeholder="Assunto" />
        <TextInput name="sua-mensagem" placeholder="Sua mensagem" />
      </div>

      <Button color="primary">Enviar</Button>
    </form>
  )
}
