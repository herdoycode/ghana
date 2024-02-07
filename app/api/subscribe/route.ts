import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "../auth/authOptions";

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const newMessage = await prisma.subscriber.create({
    data: { email },
  });

  return NextResponse.json(newMessage);
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json("Unauthorized!");
  const subscribers = await prisma.subscriber.findMany();
  return NextResponse.json(subscribers);
}
