import { Poppins, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui//button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-white">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md",
            font.className,
          )}
        >
          Auth🔒
        </h1>
        <p className="text-lg">Autenticação</p>
        <LoginButton mode="redirect">
          <Button variant="secondary" size="lg">
            Entrar
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
