import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import clientPromise from "@/app/lib/mongodb";

const DB   = "codehub";
const COLL = "users";

// POST — save user coins + solved list
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { coins, solved, solved_list } = await req.json();

    const client = await clientPromise;
    const db     = client.db(DB);

    await db.collection(COLL).updateOne(
      { email: session.user.email },
      {
        $set: {
          name:        session.user.name || session.user.email.split("@")[0],
          email:       session.user.email,
          coins:       coins       ?? 0,
          solved:      solved      ?? 0,
          solved_list: solved_list ?? [],
          updatedAt:   new Date(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Save coins error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// GET — leaderboard
export async function GET() {
  try {
    const client = await clientPromise;
    const db     = client.db(DB);

    const users = await db
      .collection(COLL)
      .find({})
      .sort({ coins: -1 })
      .limit(100)
      .toArray();

    const leaderboard = users.map((u, i) => ({
      rank:   i + 1,
      name:   u.name   || "Anonymous",
      coins:  u.coins  || 0,
      solved: u.solved || 0,
    }));

    return NextResponse.json({ users: leaderboard });
  } catch (e) {
    console.error("Leaderboard error:", e);
    return NextResponse.json({ users: [] });
  }
}