import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/ui/form/FormField";
import { useUser } from "@/context/UserContext";
import { ApplicationFormData, applicationSchema } from "@/lib/schemas";

import { createApplication } from "@/services/Application";
import { ApplicationModalProps } from "@/types";
// import { useCreateApplicationMutation, useGetAuthUserQuery } from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ApplicationModal = ({
  isOpen,
  onClose,
  propertyId,
}: ApplicationModalProps) => {
  // const [createApplication] = useCreateApplicationMutation();
  const { user: authUser } = useUser();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: authUser?.name,
      email: authUser?.email,
      phoneNumber: authUser?.phoneNumber || "01699234324",
      message: "",
    },
  });

  // console.log("here", authUser);

  const onSubmit = async (data: ApplicationFormData) => {
    if (!authUser || authUser?.role !== "tenant") {
      toast.error("You must be logged in as a tenant to submit an application");
      return;
    }

    const toastId = toast.loading("Application Creating... ");

    // Send the Data
    try {
      const modifiedData = {
        ...data,
        message: data?.message || "Not Given",
        status: "Pending",
        property: propertyId,
        tenant: authUser?.userId,
      };
      const res = await createApplication(JSON.stringify(modifiedData));

      console.log("application res", res);

      if (res.success) {
        toast.success("Application Created", { id: toastId });
        onClose();
      } else {
        toast.error(res.message, { id: toastId });
      }
    } catch (err) {
      toast.error(`Something went wrong : ${err}`, { id: toastId });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogOverlay /> */}
      <DialogContent className="bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle>Submit Application for this Property</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <CustomFormField
              name="name"
              label="Name"
              type="text"
              placeholder="Enter your full name"
            />
            <CustomFormField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address"
            />
            <CustomFormField
              name="phoneNumber"
              label="Phone Number"
              type="text"
              placeholder="Enter your phone number"
            />
            <CustomFormField
              name="message"
              label="Message (Optional)"
              type="textarea"
              placeholder="Enter any additional information"
            />
            <Button type="submit" className=" bg-primary-700 text-white w-full">
              Submit Application
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
