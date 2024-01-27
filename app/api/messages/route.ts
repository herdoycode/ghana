import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const { name, email, phone, subject, message } = await request.json();
  const newMessage = await prisma.message.create({
    data: { name, email, phone, subject, message },
  });

  return NextResponse.json(newMessage);
}
