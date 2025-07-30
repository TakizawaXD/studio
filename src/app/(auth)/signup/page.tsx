import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SignupPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mb-4 flex justify-center">
          <Logo />
        </div>
        <CardTitle className="font-headline text-2xl">Crear una Cuenta</CardTitle>
        <CardDescription>
          Comienza tu viaje para convertirte en un ingeniero de primer nivel.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
        <div className="mt-4 text-center text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="underline text-primary">
            Iniciar Sesión
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
