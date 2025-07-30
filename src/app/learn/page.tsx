"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-full">
        <Card className="w-full max-w-sm">
            <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">Contador</CardTitle>
                <CardDescription>
                    Haz clic en los botones para cambiar el valor.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
                <div className="text-7xl font-bold text-primary">{count}</div>
                <div className="flex gap-4">
                    <Button onClick={() => setCount(count - 1)} variant="outline" size="lg" aria-label="Decrement">
                        <Minus className="h-6 w-6" />
                    </Button>
                    <Button onClick={() => setCount(count + 1)} variant="default" size="lg" aria-label="Increment">
                        <Plus className="h-6 w-6" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
