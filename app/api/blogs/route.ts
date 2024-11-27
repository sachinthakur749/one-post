import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

async function generateUniqueSlug(title: string): Promise<string> {
  let slug = slugify(title, { lower: true, strict: true });
  let existingBlog = await prisma.blog.findUnique({
    where: { slug },
  });

  // Append a random string if the slug already exists
  while (existingBlog) {
    slug = `${slug}-${Math.random().toString(36).substr(2, 5)}`;
    existingBlog = await prisma.blog.findUnique({
      where: { slug },
    });
  }
  return slug;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        body: true,
        imageUrl: true,
        authorName: true,
      },
    });

    return NextResponse.json(blogs, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const payload = await request.json();
    const { title, body, imageUrl, authorName } = payload;

    if (!title || !body || !imageUrl || !authorName) {
      return NextResponse.json(
        { error: "Title, body, imageUrl, and authorName are required" },
        { status: 400 }
      );
    }

    // Generate slug
    const slug = await generateUniqueSlug(title);

    const newBlog = await prisma.blog.create({
      data: {
        slug,
        title,
        body,
        imageUrl,
        authorName,
      },
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error creating blog" }, { status: 500 });
  }
}
