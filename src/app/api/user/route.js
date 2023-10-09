import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let users = await prisma.users.findMany();
    return NextResponse.json({ status: "success", data: users });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const user = await prisma.users.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: user });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let result = await prisma.users.update({
      where: reqBody,
      data: {
        firstName: "Inzamamul",
        middleName: "Karim",
        lastName: "Shimulssss",
        mobile: "01737242772",
        email: "ikshimuluits@gmail.com",
        passwordHash: "$2y$10$BzZz4N/2i9MhBTknt",
        registeredAt: "2023-10-09T15:17:34.000Z",
        lastLogin: null,
        intro: null,
        profile: null,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let result = await prisma.users.delete({
      where: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
