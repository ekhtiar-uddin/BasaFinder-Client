"use client";

import { useUser } from "@/context/UserContext";
import { createOrder } from "@/services/cart";
import { IApplication } from "@/types";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const MakePayment = ({ application }: { application: IApplication }) => {
  const user = useUser();

  const router = useRouter();

  const handleOrder = async (propertyId: string) => {
    const orderLoading = toast.loading("Order is being placed");
    try {
      if (!user.user) {
        router.push("/login");
        throw new Error("Please login first.");
      }

      const order = {
        properties: [
          {
            property: propertyId, // application?.property?._id
            color: "White",
            quantity: 1,
          },
        ],
        shippingAddress: "",
        paymentMethod: "Online",
      };

      const res = await createOrder(order);

      if (res.success) {
        toast.success(res.message, { id: orderLoading });

        router.push(res.data.paymentUrl);
      }

      if (!res.success) {
        toast.error(res.message, { id: orderLoading });
      }
    } catch (error: any) {
      toast.error(error.message, { id: orderLoading });
    }
  };
  return (
    <>
      {application?.status === "Approved" && (
        <button
          onClick={() => handleOrder(application?.property?._id)}
          className={`cursor-pointer bg-white border border-gray-300 text-gray-700 py-2 px-4
                  rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
        >
          <Download className="w-5 h-5 mr-2" />
          Make Payment
        </button>
      )}
    </>
  );
};

export default MakePayment;
