import { Bot } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Bot className="h-6 w-6 text-accent" />
      <span className="font-headline text-xl font-bold">Entrevistas.io</span>
    </div>
  );
}
