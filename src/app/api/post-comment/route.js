import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let post_list = await prisma.post_comments.findMany();
    return NextResponse.json({ status: "success", data: post_list });
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
    let result = await prisma.post_comments.create({
      data: {
        postId: 1,
        parentId: null,
        title: "This is test comment",
        content: "This is test comment",
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
    let result = await prisma.post_comments.update({
      where: {
        id: 1,
      },
      data: {
        postId: 1,
        parentId: null,
        title: "This is test comment update",
        content: "This is test comment update",
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
    let result = await prisma.post_comments.delete({
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
