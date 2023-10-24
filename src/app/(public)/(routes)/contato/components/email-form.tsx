'use client'

import { Button } from '@/components/ui/button'
import { TextAreaInput } from '@/components/ui/form/text-area'
import { TextInput } from '@/components/ui/form/text-input'
import { useEmailController } from './use-email-controller'

export function EmailForm() {
  const { register, handleSubmit } = useEmailController()

  return (
    <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 w-full">
        <TextInput placeholder="Nome" {...register('name')} />

        <div className="flex items-center gap-4 w-full">
          <TextInput placeholder="Email" {...register('email')} />
          <TextInput placeholder="Telefone" {...register('phoneNumber')} />
        </div>

        <TextInput placeholder="Assunto" {...register('subject')} />
        <TextAreaInput placeholder="Sua mensagem" {...register('message')} />
      </div>

      <Button color="primary" type="submit">
        Enviar
      </Button>
    </form>
  )
}
