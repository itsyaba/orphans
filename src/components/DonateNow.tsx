import { useState, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";

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
import DonationDialog from "./donation-dialog";

// PayPal Client ID from environment variables
const clientId =
  import.meta.env.VITE_PAYPAL_CLIENT_ID || process.env.REACT_APP_PAYPAL_CLIENT_ID || "";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export default function DonateNow() {
  const [amount, setAmount] = useState<string>("10.00");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(10);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePresetClick = (value: number) => {
    setAmount(value.toFixed(2));
    setSelectedPreset(value);
  };

  const handleCustomAmount = (value: string) => {
    const parsedValue = Number.parseFloat(value);
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setAmount(parsedValue.toFixed(2));
      setSelectedPreset(null);
    } else {
      setAmount("");
    }
  };

  const handleCustomClick = () => {
    setSelectedPreset(null);
    setAmount("");
    inputRef.current?.focus();
  };

  return (
    <PayPalScriptProvider options={{ clientId }}>
      <Card
        className="w-full border-none bg-charity-orange/30 rounded-none min-h-[75vh] text-charity-green overflow-y-auto"
        id="donate"
      >
        <div className="container mx-auto lg:w-3/6 py-8">
          <CardHeader>
            <CardTitle className="text-5xl font-bold text-center mb-8">Choose Amount</CardTitle>
            <CardDescription className="text-md text-center max-w-6xl mx-auto mb-16 leading-relaxed text-charity-green px-2 md:px-6">
              How much would you like to donate? Your contribution goes directly to supporting our
              cause. Thank you for your generosity!
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
                min="1"
                step="0.01"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {PRESET_AMOUNTS.map((presetAmount) => (
                <Button
                  key={presetAmount}
                  variant="ghost"
                  onClick={() => handlePresetClick(presetAmount)}
                  className={`w-full py-6 text-lg ${
                    selectedPreset === presetAmount
                      ? "bg-charity-orange text-charity-green"
                      : "bg-white border-gray-200 text-gray-700"
                  }`}
                >
                  ${presetAmount}
                </Button>
              ))}
              <Button
                onClick={handleCustomClick}
                className={`py-6 text-lg ${
                  selectedPreset === null
                    ? "bg-charity-orange text-charity-green"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                Custom
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 w-full">
            <Button
              onClick={() => setIsDialogOpen(true)}
              className="w-full py-6 text-lg bg-charity-green text-white hover:bg-charity-green/90 rounded-3xl"
              size="lg"
            >
              Offline Donation
            </Button>

            <div className="w-full">
              <PayPalButtons
                style={{
                  layout: "horizontal",
                  color: "gold",
                  shape: "pill",
                  label: "paypal",
                  tagline: true,
                  height: 55,
                }}
                createOrder={(_data, actions) => {
                  if (!actions.order) {
                    toast.error("Order actions not available");
                    return Promise.reject(new Error("Order actions not available"));
                  }
                  return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: amount,
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (_data, actions) => {
                  if (!actions.order) {
                    toast.error("Order actions not available");
                    return Promise.reject(new Error("Order actions not available"));
                  }
                  return actions.order.capture().then((details) => {
                    const payerName =
                      details.purchase_units?.[0]?.shipping?.name?.full_name || "Donor";
                    toast.success(`Thank you, ${payerName}! You donated $${amount}`);
                  });
                }}
              />
            </div>

            <div className="flex items-center justify-center text-sm text-muted-foreground gap-2">
              <Lock className="h-4 w-4" />
              Secure Donation
            </div>
          </CardFooter>
        </div>
      </Card>

      <DonationDialog
        amount={amount}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </PayPalScriptProvider>
  );
}
