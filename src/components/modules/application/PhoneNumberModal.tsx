import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/ui/form/FormField";
import { phoneNumberFormData, phoneNumberSchema } from "@/lib/schemas";
import { updateApplication } from "@/services/Application";
import { ApplicationModalProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const PhoneNumberModal = ({
  isOpen,
  onClose,
  selectedApplication,
}: ApplicationModalProps) => {
  const form = useForm<phoneNumberFormData>({
    resolver: zodResolver(phoneNumberSchema),
    defaultValues: {
      landlordContactNumber: "01855555555",
    },
  });

  const onSubmit: SubmitHandler<{
    landlordContactNumber: string;
  }> = async (data) => {
    const toastId = toast.loading("Sending... ");

    try {
      const payload = {
        landlordContactNumber: data?.landlordContactNumber,
      };
      // Quick fix (not recommended long-term):
      const res = await updateApplication(
        payload,
        (selectedApplication as any)?._id
      );

      // console.log(res);

      if (res.success) {
        toast.success("Phone Number Sent", { id: toastId });
        onClose();
      } else {
        toast.error(res.message, { id: toastId });
      }
    } catch (err) {
      toast.error(`Something went wrong ${err}`, { id: toastId });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogOverlay /> */}
      <DialogContent className="bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle>Send Your Contact Number to Tenant</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <CustomFormField
              name="landlordContactNumber"
              label="Phone Number"
              type="text"
              placeholder="Enter your phone number"
            />

            <Button type="submit" className=" bg-primary-700 text-white w-full">
              Send Number
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PhoneNumberModal;
