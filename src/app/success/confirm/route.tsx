import Airtable from "airtable";
import { NextRequest, NextResponse } from "next/server";
import { Particpant } from "../../../schema/Participant";
import dayjs from "dayjs";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEU }).base(
  process.env.AIRTABLE_BASE_ID as string
);

export async function GET(req: NextRequest) {
  const url = await req.url;

  const decodedUrl = decodeURIComponent(url);
  const urlObj = new URL(decodedUrl);

  const queryString = decodedUrl.split("?")[1];
  const queryParams = new URLSearchParams(queryString);
  const json = queryParams.get("participants");
  const participantsJson = JSON.parse(json as string);

  const { participants, email } = participantsJson;
  const origin = urlObj.origin;

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

  base("Inschrijvingen 2023").create(fields, function (err: any, records: any) {
    if (err) {
      console.log("error");
      console.error(err);
    } else {
      console.log("saved the participants");
    }
  });

  return NextResponse.redirect(origin);
}
