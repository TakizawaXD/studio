import { LoginForm } from "@/components/auth/login-form";
import { Logo } from "@/components/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mb-4 flex justify-center">
          <Logo />
        </div>
        <CardTitle className="font-headline text-2xl">Bienvenido de Nuevo</CardTitle>
        <CardDescription>
          Inicia sesión en tu cuenta para usar el contador.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <div className="mt-4 text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <Link href="/signup" className="underline text-primary">
            Regístrate
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
