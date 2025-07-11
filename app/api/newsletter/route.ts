import { NextResponse } from "next/server";
import * as fs from "fs";
import path from "path";
import * as os from "os";

const FILE_PATH = path.join(process.cwd(), "data", "newsletter_new.csv");

export async function POST(request: Request) {
    try {
        const { name = "Anonymous", email } = await request.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ message: "❌ Invalid email" }, { status: 400 });
        }

        const capitalizeWords = (str: string) =>
            str.toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

        const formattedName = capitalizeWords(name.trim());
        const formattedEmail = email.trim().toLowerCase();

        const dir = path.dirname(FILE_PATH);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        
        let lines: string[] = [];

        if (fs.existsSync(FILE_PATH)) {
            const raw = fs.readFileSync(FILE_PATH, "utf8");
            lines = raw.split(/\r?\n/).filter(Boolean);
        }

        const existingEmails = new Set<string>();
        for (const line of lines.slice(1)) {
            const [, emailInFile] = line.split(",");
            if (emailInFile) existingEmails.add(emailInFile.trim().toLowerCase());
        }

        if (existingEmails.has(formattedEmail)) {
            return NextResponse.json({ message: "⚠️ Email already subscribed" }, { status: 409 });
        }

     
        if (lines.length === 0) {
            lines.push("Name,Email");
        }

        lines.push(`${formattedName},${formattedEmail}`);
        fs.writeFileSync(FILE_PATH, lines.join(os.EOL));

        console.log("✅ Subscribed:", formattedEmail);
        return NextResponse.json({ message: "✅ Subscribed!" });

    } catch (error) {
        console.error("❌ Error:", error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ message: "❌ Failed to write CSV", error: errorMessage }, { status: 500 });
    }
}
