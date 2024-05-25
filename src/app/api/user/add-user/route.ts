import { NextResponse, NextRequest } from "next/server";
import { PrismaCli } from "../../../../../prismaCli/prismaClient";
import bcrypt from "bcryptjs";

function validate(text: string) {
  return !text || text.trim() === "";
}

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json();

  if (
    validate(username) ||
    validate(email) ||
    validate(password) ||
    password.length < 6
  ) {
    return NextResponse.json(
      { message: "Invalid credential" },
      { status: 404 }
    );
  }

  let existingUser, hashPass;
  try {
    existingUser = await PrismaCli.user.findFirst({
      where: {
        email,
      },
    });
  } catch (err) {
    return NextResponse.json({ message: "find email failed" }, { status: 500 });
  }

  if (existingUser) {
    return NextResponse.json(
      { email: "Sorry email already exist" },
      { status: 500 }
    );
  }

  try {
    hashPass = await bcrypt.hash(password, 10);
  } catch (err) {
    return NextResponse.json(
      { message: "Password hashed failed" },
      { status: 500 }
    );
  }

  try {
    await PrismaCli.user.create({
      data: {
        username,
        email,
        password: hashPass,
      },
    });
    return NextResponse.json(
      { message: "User create successful" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Create user failed" },
      { status: 500 }
    );
  }
}
