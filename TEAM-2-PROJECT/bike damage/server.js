import express from "express";
import multer from "multer";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// ===============================
// CHECK API KEY
// ===============================

if (!process.env.GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is missing.");
    console.error("Please create a .env file with:");
    console.error("GEMINI_API_KEY=YOUR_API_KEY");
    process.exit(1);
}

console.log("✅ Gemini API key loaded.");


// ===============================
// FILE UPLOAD
// ===============================

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});


// ===============================
// GEMINI
// ===============================

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


// ===============================
// STATIC WEBSITE
// ===============================

app.use(express.static("."));


// ===============================
// AI ANALYSIS
// ===============================

app.post(
    "/api/analyze",
    upload.single("image"),
    async (req, res) => {

        try {

            console.log("\n==============================");
            console.log("📷 Image analysis request");
            console.log("==============================");


            // ---------------------------
            // CHECK IMAGE
            // ---------------------------

            if (!req.file) {

                console.error("❌ No image uploaded.");

                return res.status(400).json({
                    error: "No image uploaded."
                });
            }


            console.log("✅ Image received");
            console.log("File:", req.file.originalname);
            console.log("Type:", req.file.mimetype);
            console.log("Size:", req.file.size, "bytes");


            // ---------------------------
            // CONVERT IMAGE TO BASE64
            // ---------------------------

            const imageBase64 =
                req.file.buffer.toString("base64");


            // ---------------------------
            // SEND TO GEMINI
            // ---------------------------

            console.log("🤖 Sending image to Gemini...");


            const response = await ai.models.generateContent({

                model: "gemini-2.5-flash-lite",

                contents: [

                    {
                        inlineData: {
                            mimeType: req.file.mimetype,
                            data: imageBase64
                        }
                    },

                    {
                        text: `
Analyze this two-wheeler image for visible exterior damage.

Only identify damage that is actually visible in the image.

Look for:

- scratches
- dents
- cracks
- broken panels
- damaged headlights or lights
- damaged mirrors
- damaged mudguards
- damaged fairings
- damaged indicators
- other clearly visible exterior damage

Important rules:

1. Do not claim hidden mechanical damage.
2. Do not claim internal damage that cannot be seen.
3. If there is no obvious damage, say so.
4. Be conservative and describe only what can actually be seen.
5. Give a rough repair-cost estimate in Indian Rupees.
6. Return ONLY the requested JSON structure.
`
                    }

                ],

                config: {

                    responseMimeType: "application/json",

                    responseSchema: {

                        type: Type.OBJECT,

                        properties: {

                            severity: {
                                type: Type.STRING
                            },

                            damage_areas: {
                                type: Type.ARRAY,

                                items: {
                                    type: Type.STRING
                                }
                            },

                            explanation: {
                                type: Type.STRING
                            },

                            recommended_action: {
                                type: Type.STRING
                            },

                            repair_cost: {
                                type: Type.STRING
                            }

                        },

                        required: [
                            "severity",
                            "damage_areas",
                            "explanation",
                            "recommended_action",
                            "repair_cost"
                        ]

                    }

                }

            });


            // ---------------------------
            // GET GEMINI RESPONSE
            // ---------------------------

            console.log("✅ Gemini response received.");


            const responseText = response.text;


            console.log("Gemini response:");
            console.log(responseText);


            if (!responseText) {

                throw new Error(
                    "Gemini returned an empty response."
                );

            }


            // ---------------------------
            // PARSE JSON
            // ---------------------------

            let result;

            try {

                result = JSON.parse(responseText);

            } catch (jsonError) {

                console.error(
                    "❌ Failed to parse Gemini JSON:"
                );

                console.error(responseText);

                throw new Error(
                    "Gemini returned invalid JSON."
                );

            }


            // ---------------------------
            // SEND RESULT TO FRONTEND
            // ---------------------------

            console.log("✅ Analysis successful.");

            console.log("==============================\n");


            res.json(result);


        } catch (error) {

            // ---------------------------
            // SHOW REAL ERROR
            // ---------------------------

            console.error("\n");
            console.error(
                "========================================"
            );
            console.error(
                "❌ GEMINI ANALYSIS ERROR"
            );
            console.error(
                "========================================"
            );

            console.error(error);

            if (error.message) {
                console.error(
                    "Message:",
                    error.message
                );
            }

            if (error.status) {
                console.error(
                    "Status:",
                    error.status
                );
            }

            console.error(
                "========================================"
            );
            console.error("\n");


            // ---------------------------
            // SEND ERROR TO FRONTEND
            // ---------------------------

            res.status(500).json({

                error:
                    error.message ||
                    "AI analysis failed."

            });

        }

    }
);


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {

    console.log("");
    console.log("====================================");
    console.log("🏍️  Bike Damage AI");
    console.log("====================================");
    console.log(
        `🚀 Server running at http://localhost:${PORT}`
    );
    console.log("====================================");
    console.log("");

});