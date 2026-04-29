"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createApplication = async (propertyData: any): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/application/create-application`,
      {
        method: "POST",
        body: propertyData,
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      },
    );
    revalidateTag("APPLICATION", "");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
// export const sendNumberToTenant = async (numberData): Promise<any> => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/application/send-number`,
//       {
//         method: "POST",
//         body: numberData,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: (await cookies()).get("accessToken")!.value,
//         },
//       }
//     );
//     revalidateTag("APPLICATION");
//     return res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };

// export const getAllApplications = async (page?: string, limit?: string) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/application?limit=${limit}&page=${page}`,
//       {
//         next: {
//           tags: ["APPLICATION"],
//         },
//         headers: {
//           Authorization: (await cookies()).get("accessToken")!.value,
//         },
//       }
//     );

//     const data = await res.json();

//     console.log("data", data);
//     return data;
//   } catch (error: any) {
//     // return Error(res.message);
//     console.log("error", error);
//   }
// };

export const getAllApplications = async (token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/application`, {
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// update product
export const updateApplication = async (
  payload: { status?: string; landlordContactNumber?: string },
  applicationId: string,
): Promise<any> => {
  try {
    console.log("from services", applicationId);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/application/${applicationId}`,
      {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      },
    );
    revalidateTag("APPLICATION", "");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
