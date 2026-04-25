import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

const DB   = "codehub";
const COLL = "users";

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email");
    if (!email) return NextResponse.json({ found: false });

    const client = await clientPromise;
    const db     = client.db(DB);
    const user   = await db.collection(COLL).findOne({ email });

    if (!user) return NextResponse.json({ found: false });

    return NextResponse.json({
      found:       true,
      coins:       user.coins       || 0,
      solved_list: user.solved_list || [],
      name:        user.name        || "",
    });
  } catch (e) {
    console.error("user-coins GET error:", e);
    return NextResponse.json({ found: false });
  }
}