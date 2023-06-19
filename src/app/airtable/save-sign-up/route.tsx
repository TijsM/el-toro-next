import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";
import { Particpant } from "../../../schema/Participant";
import dayjs from "dayjs";

var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEU }).base(
  process.env.AIRTABLE_BASE_ID as string
);

export async function POST(req: NextRequest) {
  const { participants, email } = await req.json();

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

  const fields2 = [
    {
      fields: {
        Naam: "Tijs",
        Email: "tijs.martens.tijs@gmail.com",
        Geboortedatum: "1999-06-14",
        Woonplaats: "Nazareth",
        Geboorteplaats: "Gent",
        Rijksregister: "SDFSDF",
      },
    },
    {
      fields: {
        Naam: "Tijs",
        Email: "tijs.martens.tijs@gmail.com",
        Geboortedatum: "1999-06-14",
        Woonplaats: "Nazareth",
        Geboorteplaats: "Gent",
        Rijksregister: "SDFSDF",
      },
    },
  ];

  console.log(fields);

  // base("Inschrijvingen 2023").create(fields
  base("Inschrijvingen 2023").create(fields, function (err: any, records: any) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record: any) {
      console.log(record.get("Naam"));
    });
  });
  return NextResponse.json({});
}
