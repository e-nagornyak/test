import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import { signInFormSchema, type SignInFormData } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader } from "@/components/ui/loader"
import { PasswordInput } from "@/components/ui/password-input"

interface SignInFormProps {
  onSubmit: SubmitHandler<SignInFormData>
  isPending?: boolean
}

export function SignInForm({ onSubmit, isPending }: SignInFormProps) {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  const {
    handleSubmit,
    control,
    formState: { isDirty },
  } = form

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          defaultValue=""
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          defaultValue=""
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login</FormLabel>
              <FormControl>
                <Input placeholder="Name" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          defaultValue=""
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="Password"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          size="lg"
          disabled={!isDirty || isPending}
          type="submit"
        >
          {isPending && <Loader />}
          Sign Up
        </Button>
      </form>
    </Form>
  )
}
