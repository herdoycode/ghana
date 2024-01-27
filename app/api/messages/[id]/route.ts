import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  const message = await prisma.message.findUnique({ where: { id: params.id } });
  return NextResponse.json(message);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const message = await prisma.message.delete({ where: { id: params.id } });
  return NextResponse.json(message);
}
