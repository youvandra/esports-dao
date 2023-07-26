import { type NextRequest, NextResponse } from "next/server";
import sg from "@sendgrid/mail";
import { EMAIL_RECEIVER, EMAIL_SENDER } from "@/const";

export const POST = async (req: NextRequest) => {
  let formData = await req.formData();
  let body = Object.fromEntries(formData);
  sg.setApiKey(process.env.SENDGRID_API_KEY ?? "");

  // @ts-ignore
  const image: Blob = body.image;
  const ab = await image.arrayBuffer();
  const z = Buffer.from(ab).toString("base64");

  const res = sg
    .send({
      to: EMAIL_RECEIVER,
      from: EMAIL_SENDER,
      subject: "test",
      text: `fullName: ${body.fullName}\n
             accountNumber: ${body.accountNumber}`,
      attachments: [
        {
          content: z,
          filename: "attachment",
          // @ts-ignore
          type: body.image.type,
          disposition: "attachment",
        },
      ],
    })
    .then(() => {
      return NextResponse.json("ok");
    })
    .catch((er) => {
      console.log(er.response.body);

      return NextResponse.error();
    });

  return res;
};
