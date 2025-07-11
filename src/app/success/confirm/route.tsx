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
        Geboortedatum: dayjs(participant.dateOfBirth).format("YYYY-MM-DD"),
        Woonplaats: participant.city,
        Geboorteplaats: participant.placeOfBirth,
        Rijksregister: participant.socialSecurityNumber,
      },
    };
  });

  const headers = {
    Authorization: `Bearer ${process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
  };

  const airtableUrl =
    "https://api.airtable.com/v0/app1OzpZLbfIvdOUS/Inschrijvingen%202025";

  await axios
    .post(airtableUrl, { records: fields }, { headers: headers })
    .then((response) => {
      console.log("Success:", response.data);
      return NextResponse.redirect(origin);
    })
    .catch((error) => {
      console.log("Error:", error, new Date());
      return NextResponse.json({ error });
    });

  return NextResponse.redirect(origin);
}
