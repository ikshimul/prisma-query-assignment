import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let list = await prisma.tags.findMany();
    return NextResponse.json({ status: "success", data: list });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    //const reqBody = await req.json();
    const prisma = new PrismaClient();
    let result = await prisma.tags.create({
      data: {
        title: "Phone",
        metaTitle: "This is metaTitle",
        slug: "This is metaTitle",
        content: "This is content",
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //const reqBody = await req.json();
    let result = await prisma.tags.update({
      where: {
        id: 1,
      },
      data: {
        title: "Phone",
        metaTitle: "This is metaTitle update",
        slug: "phone",
        content: "This is content",
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //const reqBody = await req.json();
    let result = await prisma.tags.delete({
      where: {
        id: 1,
      },
      // where: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
