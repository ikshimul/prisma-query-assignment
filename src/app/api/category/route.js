import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let category_list = await prisma.categories.findMany();
    return NextResponse.json({ status: "success", data: category_list });
  } catch (error) {
    return NextResponse.json({ status: "success", data: error.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    // let category = await prisma.categories.create({
    //   data: reqBody,
    //   //   data: {
    //   //     title: reqBody["title"],
    //   //     parentId: reqBody["parentId"],
    //   //     metaTitle: reqBody["metaTitle"],
    //   //     slug: reqBody["slug"],
    //   //     content: reqBody["content"],
    //   //   },
    // });
    let category = await prisma.categories.createMany({
      data: [
        {
          title: "MacBook",
          parentId: 0,
          metaTitle: "All kind of  macbook",
          slug: "macbook",
          content: "macbook",
        },
        {
          title: "MacBook Pro M1",
          parentId: 1,
          metaTitle: "All kind of  macbook Pro M1",
          slug: "macbook-pro-m1",
          content: "macbook Pro M1",
        },
        {
          title: "MacBook Pro M2",
          parentId: 1,
          metaTitle: "All kind of  macbook air m2",
          slug: "macbook-pro-m2",
          content: "macbook air m2",
        },
      ],
    });
    return NextResponse.json({ status: "success", data: category });
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
    const reqBody = await req.json();
    let result = await prisma.categories.update({
      where: reqBody,
      data: {
        title: "MacBook Pro M2 Max",
        parentId: 1,
        metaTitle: "All kind of  macbook Pro m2 max",
        slug: "macbook-pro-m2-max",
        content: "macbook air m2 max",
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
    let result = await prisma.categories.delete({
      where: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
