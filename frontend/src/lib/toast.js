import { toast } from "sonner";

// Success toast
export const showSuccess = (message) => {
  toast.success(message);
};

// Error toast
export const showError = (message) => {
  toast.error(message);
};

// Info toast
export const showInfo = (message) => {
  toast.info(message);
};

// Warning toast
export const showWarning = (message) => {
  toast.warning(message);
};

// Loading toast (returns toast id for dismissal)
export const showLoading = (message) => {
  return toast.loading(message);
};

// Promise toast (auto handles loading/success/error)
export const showPromise = (promise, messages) => {
  return toast.promise(promise, {
    loading: messages.loading || "Loading...",
    success: messages.success || "Success!",
    error: messages.error || "Something went wrong",
  });
};
