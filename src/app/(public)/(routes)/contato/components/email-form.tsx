'use client'

import { Button } from '@/components/ui/button'
import { TextAreaInput } from '@/components/ui/form/text-area'
import { TextInput } from '@/components/ui/form/text-input'
import { useEmailController } from './use-email-controller'
import { ControlRoot } from '@/components/ui/form/control-root'
import { FieldError } from '@/components/ui/form/field-error'

export type FormData = {
  name: string
  email: string
  message: string
  phoneNumber: string
  subject: string
}

export function EmailForm() {
  const { register, handleSubmit, errors } = useEmailController()

  return (
    <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 w-full">
        <ControlRoot>
          <TextInput
            placeholder="Nome"
            {...register('name')}
            hasError={!!errors.name}
          />
          {errors.name && <FieldError errorMessage={errors?.name?.message} />}
        </ControlRoot>

        <div className="flex gap-4 w-full">
          <ControlRoot>
            <TextInput
              placeholder="Email"
              {...register('email')}
              hasError={!!errors.email}
            />
            {errors.email && (
              <FieldError errorMessage={errors?.email?.message} />
            )}
          </ControlRoot>

          <ControlRoot>
            <TextInput
              placeholder="Número de Telefone"
              {...register('phoneNumber')}
              hasError={!!errors.phoneNumber}
            />
            {errors.phoneNumber && (
              <FieldError errorMessage={errors?.phoneNumber?.message} />
            )}
          </ControlRoot>
        </div>

        <ControlRoot>
          <TextInput
            placeholder="Assunto"
            {...register('subject')}
            hasError={!!errors.subject}
          />
          {errors.subject && (
            <FieldError errorMessage={errors?.subject?.message} />
          )}
        </ControlRoot>

        <ControlRoot>
          <TextAreaInput
            placeholder="Sua mensagem"
            {...register('message')}
            hasError={!!errors.message}
          />
          {errors.message && (
            <FieldError errorMessage={errors?.message?.message} />
          )}
        </ControlRoot>
      </div>

      <Button color="primary" type="submit">
        Enviar
      </Button>
    </form>
  )
}
