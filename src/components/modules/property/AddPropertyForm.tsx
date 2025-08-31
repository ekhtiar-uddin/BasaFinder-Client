"use client";

import { Form } from "@/components/ui/form";
import { PropertyFormData, propertySchema } from "@/lib/schemas";
// import { useCreatePropertyMutation, useGetAuthUserQuery } from "@/state/api";
import { Button } from "@/components/ui/button";
import { CustomFormField } from "@/components/ui/form/FormField";
import Header from "@/components/ui/form/Header";
import { useUser } from "@/context/UserContext";
import { AmenityEnum, HighlightEnum, PropertyTypeEnum } from "@/lib/constants";
import { addProperty } from "@/services/Property";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddPropertyForm = () => {
  const { user } = useUser();
  const router = useRouter();
  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      name: "",
      description: "",
      price: 7000,
      securityDeposit: 500,
      applicationFee: 100,
      isPetsAllowed: true,
      isParkingIncluded: true,
      imageUrls: [],
      amenities: [],
      highlights: [],
      beds: 1,
      baths: 1,
      squareFeet: 1000,
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  // data: PropertyFormData
  const onSubmit: SubmitHandler<PropertyFormData> = async (data) => {
    const toastId = toast.loading("Property Creating... ");
    const formData = new FormData();

    const formattedAmenities = data?.amenities
      .join(",")
      .split(",")
      .map((a) => a.trim())
      .join(",");
    const formattedhighlights = data?.highlights
      .join(",")
      .split(",")
      .map((a) => a.trim())
      .join(",");

    const modifiedData = {
      ...data,
      landlord: user?.userId,
      price: parseFloat(data?.price?.toString()),
      beds: parseFloat(data?.beds?.toString()),
      amenities: formattedAmenities,
      highlights: formattedhighlights,
    };

    console.log("datasdf", modifiedData);

    formData.append("data", JSON.stringify(modifiedData));

    Object.entries(data).forEach(([key, value]) => {
      if (key === "imageUrls") {
        const files = value as File[];
        files.forEach((file: File) => {
          formData.append("images", file);
        });
      } else if (Array.isArray(value) || typeof value === "object") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    // Send the formData
    try {
      const res = await addProperty(formData);

      if (res.success) {
        toast.success("Property Created", { id: toastId });
        router.push("/landlord/property");
      } else {
        toast.error(res.message, { id: toastId });
      }
    } catch (err) {
      toast.error(`Something went wrong ${err}`, { id: toastId });
    }
  };

  return (
    <div className="dashboard-container">
      <Header
        title="Add New Property"
        subtitle="Create a new property listing with detailed information"
      />
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 space-y-10"
          >
            {/* Basic Information */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
              <div className="space-y-4">
                <CustomFormField name="name" label="Property Name" />
                <CustomFormField
                  name="description"
                  label="Description"
                  type="textarea"
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Fees */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">Fees</h2>
              <CustomFormField
                name="price"
                label="Price per Month"
                type="number"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomFormField
                  name="securityDeposit"
                  label="Security Deposit"
                  type="number"
                />
                <CustomFormField
                  name="applicationFee"
                  label="Application Fee"
                  type="number"
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Property Details */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CustomFormField
                  name="beds"
                  label="Number of Beds"
                  type="number"
                />
                <CustomFormField
                  name="baths"
                  label="Number of Baths"
                  type="number"
                />
                <CustomFormField
                  name="squareFeet"
                  label="Square Feet"
                  type="number"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <CustomFormField
                  name="isPetsAllowed"
                  label="Pets Allowed"
                  type="switch"
                />
                <CustomFormField
                  name="isParkingIncluded"
                  label="Parking Included"
                  type="switch"
                />
              </div>
              <div className="mt-4">
                <CustomFormField
                  name="propertyType"
                  label="Property Type"
                  type="select"
                  options={Object.keys(PropertyTypeEnum).map((type) => ({
                    value: type,
                    label: type,
                  }))}
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Amenities and Highlights */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Amenities and Highlights
              </h2>
              <div className="space-y-6">
                <CustomFormField
                  name="amenities"
                  label="Amenities"
                  type="multiple-select"
                  multiple={true}
                  options={Object.keys(AmenityEnum).map((amenity) => ({
                    value: amenity,
                    label: amenity,
                  }))}
                />
                <CustomFormField
                  name="highlights"
                  label="Highlights"
                  type="multiple-select"
                  multiple={true}
                  options={Object.keys(HighlightEnum).map((highlight) => ({
                    value: highlight,
                    label: highlight,
                  }))}
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Photos */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Photos</h2>
              <CustomFormField
                name="imageUrls"
                label="Property Photos"
                type="file"
                accept="image/*"
              />
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">
                Additional Information
              </h2>

              <CustomFormField name="city" placeholder="Boston" label="City" />
              <div className="flex justify-between gap-4">
                <CustomFormField
                  name="address"
                  placeholder="Back Bay"
                  label="Address"
                  className="w-full"
                />
                <CustomFormField
                  name="state"
                  placeholder="MA"
                  label="State"
                  className="w-full"
                />
                <CustomFormField
                  name="postalCode"
                  placeholder="02116"
                  label="Postal Code"
                  className="w-full"
                />
              </div>
              <CustomFormField
                name="country"
                placeholder="USA"
                label="Country"
              />
            </div>

            <Button
              type="submit"
              className="bg-primary-700 text-white w-full mt-8"
            >
              {isSubmitting ? "Creating Property....." : "Create Property"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddPropertyForm;
