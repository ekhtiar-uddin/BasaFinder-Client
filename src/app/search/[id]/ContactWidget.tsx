"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { getCurrentUser } from "@/services/AuthService";
import { ContactWidgetProps } from "@/types";

import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const ContactWidget = ({ onOpenModal }: ContactWidgetProps) => {
  // const { user: authUser } = useUser();

  const { user: userInfo, setUser } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res);
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const router = useRouter();

  // console.log("user", userInfo);

  const handleButtonClick = () => {
    if (
      (userInfo && userInfo?.role === "landlord") ||
      userInfo?.role === "admin"
    ) {
      toast.error(`${userInfo?.role} is not allowed to submit application`);
    } else if (userInfo && userInfo?.role === "tenant") {
      onOpenModal();
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="bg-white  border border-primary-200 rounded-2xl p-7 h-fit min-w-[300px]">
      {/* Contact Property */}
      <div className="flex items-center gap-5 mb-4 border border-primary-200 p-4 rounded-xl">
        <div className="flex items-center p-4 bg-primary-900 rounded-full">
          <Phone className="text-primary-50" size={15} />
        </div>
        <div>
          <p>Contact This Property</p>
          <div className="text-lg font-bold text-primary-800">
            (424) 340-5574
          </div>
        </div>
      </div>
      <Button className="w-full " onClick={handleButtonClick}>
        {userInfo ? "Submit Application" : "Sign In to Apply"}
      </Button>

      <hr className="my-4" />
      <div className="text-sm">
        <div className="text-primary-600 mb-1">Language: English, Bahasa.</div>
        <div className="text-primary-600">
          Open by appointment on Monday - Sunday
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;
