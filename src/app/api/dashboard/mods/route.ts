import { NextResponse } from "next/server";
import { getMods } from "@/data/mock/dashboard";

export async function GET() {
  return NextResponse.json({ mods: getMods() });
}
