"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useActionState } from "react"
import { registerPatient } from "@/services/auth/registerPatient"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, formAction, isPending] = useActionState(registerPatient, null)
  const getFieldError = (fieldName: string): string | null => {
    if (state?.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName)
      return error.error;
    } else {
      return null;
    }
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input id="name" name="name" type="text" placeholder="John Doe" required />
                {
                  getFieldError("name") && (
                    <FieldDescription className="text-red-500">
                      {getFieldError("name")}
                    </FieldDescription>
                  )
                }
              </Field>

              <Field>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input id="address" name="address" type="text" placeholder="123 Dk BD" required />
                {
                  getFieldError("address") && (
                    <FieldDescription className="text-red-500">
                      {getFieldError("address")}
                    </FieldDescription>
                  )
                }
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                {
                  getFieldError("email") && (
                    <FieldDescription className="text-red-500">
                      {getFieldError("email")}
                    </FieldDescription>
                  )
                }
              </Field>

              <Field className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input id="password" name="password" type="password" required />
                  {
                    getFieldError("password") && (
                      <FieldDescription className="text-red-500">
                        {getFieldError("password")}
                      </FieldDescription>
                    )
                  }
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                  <Input id="confirm-password" name="confirmPassword" type="password" required />
                  {
                    getFieldError("confirmPassword") && (
                      <FieldDescription className="text-red-500">
                        {getFieldError("confirmPassword")}
                      </FieldDescription>
                    )
                  }
                </Field>
              </Field>

              <Field>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Creating Account..." : "Create Account"}
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>

        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
