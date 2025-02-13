import { isRedirectError } from "next/dist/client/components/redirect-error"
import { toast } from "sonner"
import { z } from "zod"

export function getErrorMessage(err: unknown) {
  const unknownError = "Something went wrong, please try again later."

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    return errors.join("\n")
  } else if (err instanceof Error) {
    return err.message
  } else if (isRedirectError(err)) {
    throw err
  } else if (
    err instanceof Object &&
    "message" in err &&
    typeof err?.message === "string"
  ) {
    return err?.message
  } else if (
    err &&
    typeof err === "object" &&
    "detail" in err &&
    typeof err?.detail === "string"
  ) {
    return err?.detail
  } else {
    return unknownError
  }
}

export function showErrorToast(err: unknown) {
  console.warn(err)
  const errorMessage = getErrorMessage(err)
  return toast.error(errorMessage)
}
