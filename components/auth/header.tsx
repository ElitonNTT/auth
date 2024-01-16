import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type THeaderProps = {
  label: string;
};

export const Header = ({ label }: THeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        Entrar 🔒
      </h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};
