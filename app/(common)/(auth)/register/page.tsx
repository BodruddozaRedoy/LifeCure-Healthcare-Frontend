import { GalleryVerticalEnd, Heart } from "lucide-react"

import { SignupForm } from "@/components/signup-form"
import Link from "next/link"

export default function RegisterPage() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link href="/" className="flex justify-center items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                        <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                    </div>
                    <span className="text-xl font-bold text-foreground">LifeCure</span>
                </Link>
                <SignupForm />
            </div>
        </div>
    )
}
