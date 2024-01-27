import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";

export async function POST(request: NextRequest) {
  const { name, email, phone, subject, message } = await request.json();
  const newMessage = await prisma.message.create({
    data: { name, email, phone, subject, message },
  });

  return NextResponse.json(newMessage);
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json("Unauthorized!");
  const messages = await prisma.message.findMany();
  return NextResponse.json(messages);
}
