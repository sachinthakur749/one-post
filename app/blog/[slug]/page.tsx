import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      <div className=" space-y-7 min-h-[100vh] ">
        <h2 className="text-[30px] font-extrabold ">{data?.title}</h2>

        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8 aspect-square">
            <AvatarImage
              sizes="medium"
              src={data?.imageUrl || ""}
              className="h-full w-full object-cover"
            />
            <AvatarFallback className="h-full w-full text-lg">
              author
            </AvatarFallback>
          </Avatar>
          <p className="text-[15px]">{data?.authorName}</p>
        </div>

        <div>
          <Image
            alt="sds"
            width={1000}
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
