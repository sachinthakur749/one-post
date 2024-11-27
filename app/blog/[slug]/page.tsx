import { baseUrl } from "@/lib/baseURL";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import React from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const data = await prisma.blog.findUnique({
    where: {
      slug: (await params).slug,
    },
  });

  return (
    <>
      <div className=" space-y-5 min-h-[100vh]">
        <h2 className="text-[30px] font-semibold ">{data?.title}</h2>

        <div>
          <Image
            alt="sds"
            width={100}
            height={100}
            src={data?.imageUrl || ""}
            className="w-full h-[450px] object-cover rounded-[10px] "
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: data?.body || "" }} />
      </div>
    </>
  );
}

export default page;
