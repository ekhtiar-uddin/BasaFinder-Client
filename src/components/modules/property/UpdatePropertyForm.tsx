"use client";

import { Form } from "@/components/ui/form";
import { PropertyFormData, propertySchema } from "@/lib/schemas";
// import { useCreatePropertyMutation, useGetAuthUserQuery } from "@/state/api";
import Logo from "@/app/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import { CustomFormField } from "@/components/ui/form/FormField";
import { useUser } from "@/context/UserContext";
import { AmenityEnum, HighlightEnum, PropertyTypeEnum } from "@/lib/constants";
import { updateProperty } from "@/services/Property";
import { IProperty } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdatePropertyForm = ({ property }: { property: IProperty }) => {
  const { user } = useUser();
  const router = useRouter();
  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      ...property,
      amenities: [],
      highlights: [],
    },
  });
  const {
    formState: { isSubmitting },
  } = form;

  // console.log("skdfj", property?.imageUrls);

  // data: PropertyFormData
  const onSubmit: SubmitHandler<PropertyFormData> = async (data) => {
    const toastId = toast.loading("Property Updating... ");

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
      price: parseFloat(data.price.toString()),
      beds: parseFloat(data.beds.toString()),
      amenities: formattedAmenities,
      highlights: formattedhighlights,
    };

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
      const res = await updateProperty(formData, property?._id);

      if (res.success) {
        toast.success("Property Updated", { id: toastId });
        if (user?.role === "landlord") {
          router.push("/landlord/property");
        } else {
          router.push("/admin/manage-property");
        }
      } else {
        toast.error(res.message, { id: toastId });
      }
    } catch (err) {
      toast.error(`Something went wrong ${err}`, { id: toastId });
    }
  };

  // const onSubmit = async (data) => {
  //   console.log("data", data);
  // };

  return (
    <div className="dashboard-container">
      <div className="flex items-center space-x-4 mb-5 ">
        <Logo />

        <h1 className="text-xl font-bold">Update Property Info</h1>
      </div>
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
              <CustomFormField
                name="address"
                initialValue={property?.location?.address}
                label="Address"
              />
              <div className="flex justify-between gap-4">
                <CustomFormField
                  name="city"
                  label="City"
                  className="w-full"
                  initialValue={property?.location?.city}
                />
                <CustomFormField
                  name="state"
                  label="State"
                  className="w-full"
                  initialValue={property?.location?.state}
                />
                <CustomFormField
                  name="postalCode"
                  label="Postal Code"
                  className="w-full"
                  initialValue={property?.location?.postalCode}
                />
              </div>
              <CustomFormField
                name="country"
                label="Country"
                initialValue={property?.location?.country}
              />
            </div>

            <Button
              type="submit"
              className="bg-primary-700 rounded text-white w-full mt-8"
            >
              {isSubmitting ? "Updating Property....." : "Update Property"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePropertyForm;
