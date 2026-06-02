import { toast } from 'sonner';

export const Alert = {
  success(title: string, description: string) {
    toast.success(title, { description });
  },

  error(title: string, description: string) {
    toast.error(title, { description });
  }
};
