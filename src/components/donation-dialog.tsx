import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import DonationDialogSuccess from "./donation-success-dialog";

interface DonationDialogProps {
  amount: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationDialog({ amount, isOpen, onClose }: DonationDialogProps) {
  const [isDialogSuccessOpen, setIsDialogSuccessOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  const handleSuccess = () => {
    setIsDialogSuccessOpen(true);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <ScrollArea className="h-[60vh] pr-4">
            <DialogHeader>
              <DialogTitle>Offline Donation</DialogTitle>
              <DialogDescription>
                Please provide your information for the offline donation process
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-4">
                  <h4 className="font-medium">Personal Info</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="bg-gray-200 text-gray-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="bg-gray-200 text-gray-800"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-gray-200 text-gray-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Donation Total</Label>
                  <div className="rounded-md border px-3 py-2">${amount}</div>
                </div>
              </div>
            </form>
            <DialogFooter className="mt-8">
              <Button onClick={onClose}>Cancel</Button>
              <Button
                onClick={handleSuccess}
                className="bg-charity-orange text-white hover:bg-charity-orange/80"
              >
                Confirm Donation
              </Button>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>
      <DonationDialogSuccess
        formData={formData}
        isOpen={isDialogSuccessOpen}
        onClose={() => setIsDialogSuccessOpen(false)}
      />
    </>
  );
}
