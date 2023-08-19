import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";
import { Particpant } from "../../../schema/Participant";
import dayjs from "dayjs";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEU }).base(
  process.env.AIRTABLE_BASE_ID as string
);

export async function POST(req: NextRequest) {
  const { participants, email } = await req.json();
  console.log({ participants, email });

  const fields = participants.map((participant: Particpant) => {
    return {
      fields: {
        Naam: participant.name,
        Email: email,
        Geboortedatum: dayjs(participant.dateOfBirth).format("DD/MM/YYYY"),
        Woonplaats: participant.city,
        Geboorteplaats: participant.placeOfBirth,
        Rijksregister: participant.socialSecurityNumber,
      },
    };
  });

  console.log("fields", fields);

  base("Inschrijvingen 2023").create(fields, function (err: any, records: any) {
    if (err) {
      console.log("error");
      console.error(err);
    } else {
      console.log("saved the participants");
    }
  });

  return NextResponse.json({
    success: true,
  });
}
