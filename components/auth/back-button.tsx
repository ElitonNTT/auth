"use client";

import Link from "next/link";
import { Button } from "../ui/button";

type TBackButtonProps = {
  href: string;
  label: string;
};

const BackButton = ({ href, label }: TBackButtonProps) => {
  return (
    <Button variant="link" className="w-full font-normal" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
