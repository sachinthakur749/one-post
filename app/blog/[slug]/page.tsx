import { baseUrl } from "@/lib/baseURL";
import Image from "next/image";
import React from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const blog = await fetch(`${baseUrl}/api/blogs/${(await params).slug}`, {
    cache: "no-cache",
  });
  const data = await blog.json();

  return (
    <>
      <div className=" space-y-5 min-h-[100vh]">
        <h2 className="text-[30px] font-semibold ">{data?.title}</h2>

        <div>
          <Image
            alt="sds"
            width={100}
            height={100}
            src={data.imageUrl}
            className="w-full h-[450px] object-cover rounded-[10px] "
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: data?.body }} />
      </div>
    </>
  );
}

export default page;
