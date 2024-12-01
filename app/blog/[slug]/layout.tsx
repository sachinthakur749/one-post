import { prisma } from "@/lib/prisma";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const data = await prisma.blog.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return {
    title: data?.title,
    description: data?.body,
    openGraph: {
      title: data?.title,
      description: data?.body,
      images: [
        {
          url: data?.imageUrl,
          width: 1200,
          height: 630,
          alt: data?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.body,
      images: [
        {
          url: data?.imageUrl,
          width: 1200,
          height: 630,
          alt: data?.title,
        },
      ],
    },
  };
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" max-w-[1000px] mx-auto py-[70px] ">{children}</div>;
}
