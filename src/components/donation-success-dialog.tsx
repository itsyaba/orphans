import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";

interface DonationDialogSuccessProps {
  formData: { firstName: string; lastName: string; email: string };
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationDialogSuccess({
  formData,
  isOpen,
  onClose,
}: DonationDialogSuccessProps) {
  const { firstName, lastName, email } = formData;

  console.log(firstName, lastName, email);

  const handleClose = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Thank you, ${firstName} ${lastName} ! `);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white text-charity-green font-medium">
        <DialogHeader>Donation Confirmation</DialogHeader>
        <DialogDescription>
          <div className="space-y-4 rounded-lg border p-4 text-gray-800">
            <h1 className="font-semibold text-lg">Your Donation Is Almost Complete!</h1>
            <h4 className="font-semibold text-md">Offline Donation Instructions</h4>
            <div className="space-y-2 text-md">
              <p>
                In order to make an offline donation we ask that you please follow these
                instructions:
              </p>
              <ol className="list-decimal space-y-2 pl-4">
                <li>Make a check payable to "huht orphans"</li>
                <li>
                  On the memo line of the check, please indicate that the donation is for "huht
                  orphans"
                </li>
                <li>Please mail your check to:</li>
              </ol>
              <div className="rounded-md bg-charity-orange/30 p-3">
                <p className="font-medium">huht orphans</p>
                <p>9869 jasper street Commerce city Colorado 80022</p>
              </div>
              <p className="mt-4 text-muted-foreground">
                All contributions will be gratefully acknowledged and are tax deductible.
              </p>
            </div>
          </div>
        </DialogDescription>
        <DialogFooter>
          <Button
            className="bg-charity-orange text-white w-full hover:bg-charity-orange/80"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
