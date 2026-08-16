import { NextResponse } from "next/server";
import { getLobbies } from "@/data/mock/dashboard";

export async function GET() {
  return NextResponse.json({ lobbies: getLobbies() });
}
