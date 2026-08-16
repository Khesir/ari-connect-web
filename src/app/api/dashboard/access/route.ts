import { NextResponse } from "next/server";
import { getAccess } from "@/data/mock/dashboard";

export async function GET() {
  return NextResponse.json(getAccess());
}
