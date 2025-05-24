import { NextResponse, NextRequest } from "next/server";
import Project from "@/models/projectModel";
import connectMongoDB from "@/lib/config";

export async function POST(request: NextRequest) {
    await connectMongoDB();
    try {

        const body = await request.json();
        console.log("Success: ", body);


        if (!body || !body.title || !body.description) {
            return NextResponse.json(
                { success: false, message: "Invalid request body" },
                { status: 400 }
            );
        }

        const res = await Project.create(body);
        console.log("Success: ", res);
        return NextResponse.json({ success: true, data: res });
    } catch (err) {
        console.error("Error while storing in db: ", err);
        return NextResponse.json(
            { success: false, message: "Error while storing in database", error: err },
            { status: 500 }
        );
    }
}

export async function GET() {
    await connectMongoDB();
    try {

        const res = await Project.find({});
        console.log("Resss---> ", res);
        return NextResponse.json({ success: true, message: "Success", data:res },
            { status: 200 })
    } catch (error) {
        console.log("Error while fetching project list : ", error);
        return NextResponse.json(
            { success: false, message: "Error while fetching project list :", error },
            { status: 500 }
        );
    }
}