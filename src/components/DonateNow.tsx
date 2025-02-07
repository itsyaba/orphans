import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export default function DonateNow() {
  const [amount, setAmount] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePresetClick = (value: number) => {
    setAmount(value.toString());
    setSelectedPreset(value);
  };

  const handleCustomAmount = (value: string) => {
    setAmount(value);
    setSelectedPreset(null);
  };

  const handleCustomClick = () => {
    setSelectedPreset(null);
    setAmount("");
    inputRef.current?.focus();
  };

  return (
    <Card className="w-full border-none bg-charity-orange/30 rounded-none min-h-[75vh] text-charity-green">
      <div className="container mx-auto lg:w-3/6">
        <CardHeader>
          <CardTitle className="text-5xl font-bold text-center mb-8">Choose Amount</CardTitle>
          <CardDescription className="text-md text-center max-w-6xl mx-auto mb-16 leading-relaxed text-charity-green px-2 md:px-6">
            How much would you like to donate? As a contributor to our community projects, we make
            sure your donation goes directly to supporting our cause. Thank you for your generosity!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <Input
              ref={inputRef}
              type="number"
              value={amount}
              onChange={(e) => handleCustomAmount(e.target.value)}
              className="pl-10 py-6 bg-white border-gray-200 text-gray-700"
              placeholder="Enter amount"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {PRESET_AMOUNTS.map((presetAmount) => (
              <Button
                key={presetAmount}
                variant="ghost"
                onClick={() => handlePresetClick(presetAmount)}
                className="w-full bg-charity-orange border-none py-6 text-charity-green text-lg"
              >
                ${presetAmount}
              </Button>
            ))}
            <Button
              onClick={handleCustomClick}
              className=" py-6 bg-white border-gray-200 text-gray-700 hover:bg-white text-lg"
            >
              Custom
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full text-lg py-6 bg-zinc-900 text-white" size="lg">
            Continue
          </Button>
          <div className="flex items-center justify-center text-sm text-muted-foreground gap-2">
            <Lock className="h-4 w-4" />
            Secure Donation
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
