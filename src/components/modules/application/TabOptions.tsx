"use client";
import ApplicationCard from "@/components/ApplicationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheckBig, File, PhoneOutgoing, ReceiptText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useUser } from "@/context/UserContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { updateApplication } from "@/services/Application";
import { IApplication } from "@/types";
import { Download } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import PhoneNumberModal from "./PhoneNumberModal";
const TabOptions = ({ applications }: { applications: IApplication[] }) => {
  const router = useRouter();
  const isMobile = useIsMobile(685);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState({});
  const [activeTab, setActiveTab] = useState("all");
  const { user: authUser } = useUser();

  const filteredApplications = applications?.filter((application) => {
    if (activeTab === "all") return true;
    return application.status.toLowerCase() === activeTab;
  });

  const handleStatusChange = async (applicationId: string, status: string) => {
    const toastId = toast.loading("Application Updating...");

    try {
      const payload = { status };
      const res = await updateApplication(payload, applicationId);

      if (res?.success) {
        toast.success("Application Updated", { id: toastId });
      } else {
        toast.error(res?.message || "Error updating application", {
          id: toastId,
        });
      }
    } catch (err) {
      toast.error(`Something went wrong ${err}`, { id: toastId });
    }
  };

  const handleButtonClick = (application: IApplication) => {
    if (authUser && authUser?.role === "tenant") {
      toast.error("tenant is not allowed to submit phone number");
    } else if (authUser && authUser?.role === "landlord") {
      setIsModalOpen(true);
      setSelectedApplication(application);
    } else {
      router.push("/login");
    }
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full my-5"
    >
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="approved">Approved</TabsTrigger>
        <TabsTrigger value="denied">Denied</TabsTrigger>
      </TabsList>

      {["all", "pending", "approved", "denied"].map((tab) => (
        <TabsContent key={tab} value={tab} className="mt-5 w-full">
          {filteredApplications
            .filter(
              (application) =>
                tab === "all" || application?.status?.toLowerCase() === tab
            )
            .map((application) => (
              <ApplicationCard key={application?._id} application={application}>
                <div
                  className="flex 2xl:flex-row
                 flex-col justify-between gap-5 w-full pb-4 px-4"
                >
                  {/* Colored Section Status */}
                  <div
                    className={`p-4 text-green-700 grow ${
                      application?.status === "Approved"
                        ? "bg-green-100"
                        : application?.status === "Denied"
                        ? "bg-red-100"
                        : "bg-yellow-100"
                    }`}
                  >
                    <div className="flex flex-wrap items-center">
                      <File className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="mr-2">
                        Application submitted on{" "}
                        {new Date(
                          application?.applicationDate
                        ).toLocaleDateString()}
                        .
                      </span>
                      <CircleCheckBig className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span
                        className={`font-semibold ${
                          application?.status === "Approved"
                            ? "text-green-800"
                            : application?.status === "Denied"
                            ? "text-red-800"
                            : "text-yellow-800"
                        }`}
                      >
                        {application?.status === "Approved" &&
                          "This application has been approved."}
                        {application?.status === "Denied" &&
                          "This application has been denied."}
                        {application?.status === "Pending" &&
                          "This application is pending review."}
                      </span>
                    </div>
                  </div>

                  {/* Right Buttons */}
                  <div
                    className={`${
                      isMobile ? "flex flex-col gap-2" : "flex flex-row gap-2"
                    }`}
                  >
                    {application?.status === "Approved" && (
                      <button
                        onClick={() => handleButtonClick(application)}
                        className={`cursor-pointer bg-white border border-gray-300 text-gray-700 py-4 px-4
                      rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50 2xl:py-0`}
                      >
                        <PhoneOutgoing className="w-5 sh-5 mr-2" />
                        Provide Number
                      </button>
                    )}
                    {authUser && (
                      <PhoneNumberModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        selectedApplication={
                          selectedApplication as IApplication
                        }
                      />
                    )}

                    <Link
                      href={`/search/${application?.property?._id}`}
                      className={`bg-white border border-gray-300 text-gray-700 py-4 px-4 
                      rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                      scroll={false}
                    >
                      <ReceiptText className="w-5 h-5 mr-2" />
                      Property Details
                    </Link>

                    {application?.status === "Approved" && (
                      <button
                        className={`bg-white border border-gray-300 text-gray-700 py-4 px-4
                      rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Agreement
                      </button>
                    )}
                    {application?.status === "Pending" && (
                      <>
                        <button
                          className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-500"
                          onClick={() =>
                            handleStatusChange(
                              application?._id || "",
                              "Approved"
                            )
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
                          onClick={() =>
                            handleStatusChange(application?._id || "", "Denied")
                          }
                        >
                          Deny
                        </button>
                      </>
                    )}
                    {application?.status === "Denied" && (
                      <button
                        className={`bg-gray-800 text-white py-4 px-4 rounded-md flex items-center
                      justify-center hover:bg-secondary-500 hover:text-primary-50`}
                      >
                        Contact User
                      </button>
                    )}
                  </div>
                </div>
              </ApplicationCard>
            ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabOptions;
