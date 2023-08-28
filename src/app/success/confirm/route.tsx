import { NextRequest, NextResponse } from "next/server";
import { Particpant } from "../../../schema/Participant";
import dayjs from "dayjs";
import axios from "axios";

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

  const headers = {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    "Content-Type": "application/json",
  };

  const airtableUrl =
    "https://api.airtable.com/v0/app1OzpZLbfIvdOUS/Inschrijvingen%202023";

  axios
    .post(airtableUrl, { records: fields }, { headers: headers })
    .then((response) => {
      console.log("Success:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return NextResponse.redirect(origin);
}
