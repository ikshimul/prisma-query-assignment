import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let post_list = await prisma.posts.findMany();
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
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    let result = await prisma.posts.create({
      data: {
        autherId: 1,
        parentId: null,
        title: "This is test post",
        metaTitle: "This is test post",
        slug: "test-post",
        summary: "test post",
        content: "This is test post",
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
    let result = await prisma.posts.update({
      // where: reqBody,
      where: {
        id: 1,
      },
      data: {
        autherId: 1,
        parentId: null,
        title: "This is test post update",
        metaTitle: "This is test post update",
        slug: "test-post",
        summary: "test post",
        content: "This is test post",
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
    const reqBody = await req.json();
    let result = await prisma.posts.delete({
      where: {
        id: 2,
      },
      // where: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
