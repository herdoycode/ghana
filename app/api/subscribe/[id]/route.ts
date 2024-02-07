import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  const message = await prisma.subscriber.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(message);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const message = await prisma.subscriber.delete({ where: { id: params.id } });
  return NextResponse.json(message);
}
