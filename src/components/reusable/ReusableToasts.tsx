import { toast } from "sonner";

export const ReusableShowToast = (
  type: "success" | "error" | "loading" | "warning" | "info",
  message: string,
  id?: string | number,
) => toast[type](message, { id });

export const toastSuccess = (message: string, id?: string | number) =>
  toast.success(message, {
    id,
  });

export const toastError = (message: string, id?: string | number) =>
  toast.error(message, {
    id,
  });

export const toastLoading = (message: string) => toast.loading(message);

export const toastWarning = (message: string, id?: string | number) =>
  toast.warning(message, {
    id,
  });

export const toastInfo = (message: string, id?: string | number) =>
  toast.info(message, {
    id,
  });
