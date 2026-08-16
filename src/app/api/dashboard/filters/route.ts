import { NextResponse } from "next/server";
import { getFilters } from "@/data/mock/dashboard";

export async function GET() {
  return NextResponse.json(getFilters());
}
