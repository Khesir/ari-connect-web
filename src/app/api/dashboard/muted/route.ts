import { NextResponse } from "next/server";
import { getMuted } from "@/data/mock/dashboard";

export async function GET() {
  return NextResponse.json({ muted: getMuted() });
}
