import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const searchQuery = req.nextUrl.searchParams.get("posts");

  let posts;
  try {
    posts = await prisma.posts.findMany();
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json({ posts }, { status: 200 });
}
