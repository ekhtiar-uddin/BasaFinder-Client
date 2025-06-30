"use client";
import { selectCurrentUser } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";

const page = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <section className="flex gap-5">
      <div className="w-6/10">
        <div className="">
          <Image
            src="https://hype.my/wp-content/uploads/2024/07/4-10.jpg"
            width={500}
            alt=""
            height={200}
            className="w-full h-[350px] rounded"
          />
          <Image
            src={user?.photo}
            width={100}
            alt=""
            height={100}
            className=" rounded"
          />
        </div>
      </div>

      <div className="w-4/10">sdf</div>
    </section>
  );
};

export default page;
