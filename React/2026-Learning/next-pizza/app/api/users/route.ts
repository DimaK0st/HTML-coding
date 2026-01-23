import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(){
    return NextResponse.json(await prisma.user.findMany());
}

export async function POST(req: NextRequest, res: NextResponse){
    const data = await req.json();

    const user = await prisma.user.create({
        data,
    })

    return NextResponse.json(user);
}