"use server";
import { getValidToken } from "@/lib/verifyTokent";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// get all properties
export const getAllProperties = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined },
) => {
  const params = new URLSearchParams();

  // console.log("from ", query?.priceRange);

  console.log("also", query);

  if (query?.priceRange) {
    const [min, max] = (query?.priceRange as string).split(",");
    params.append("minPrice", min);
    params.append("maxPrice", max);
  }
  if (query?.squareFeet) {
    const [min, max] = (query?.squareFeet as string).split(",");
    params.append("minSquareFeet", min);
    params.append("maxSquareFeet", max);
  }
  if (query?.location) {
    params.append("location", query?.location.toString());
  }
  if (query?.beds) {
    params.append("beds", query?.beds.toString());
  }
  if (query?.baths) {
    params.append("baths", query?.baths.toString());
  }
  if (query?.propertyType) {
    params.append("propertyType", query?.propertyType.toString());
  }
  if (query?.amenities) {
    params.append("amenities", query?.amenities.toString());
  }
  if (query?.squareFeet) {
    params.append("squareFeet", query?.squareFeet.toString());
  }

  try {
    console.log("Before fetching data");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/property?limit=${limit}&page=${page}&${params}`,
      {
        next: {
          tags: ["PROPERTY"],
        },
      },
    );
    console.log("After fetching data");
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single property
export const getSingleProperty = async (propertyId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/property/${propertyId}`,
      {
        next: {
          tags: ["PROPERTY"],
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// add property
export const addProperty = async (propertyData: FormData): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/property`, {
      method: "POST",
      body: propertyData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("PROPERTY", "");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// update property
export const updateProperty = async (
  propertyData: FormData,
  propertyId: string,
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/property/${propertyId}`,
      {
        method: "PATCH",
        body: propertyData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      },
    );
    revalidateTag("PROPERTY", "");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteproperty = async (propertyId: string): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/property/${propertyId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      },
    );
    revalidateTag("PROPERTY", "");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
