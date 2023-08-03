"use client";

import { Landing } from "../../components/Landing";
import { useRouter } from "next/navigation";
import { getParticipantsFromUrl } from "../../utils/getParticipantsFromUrl";
import { useSuccess } from "./useSuccess";

export default function Success() {
  const router = useRouter();

  useSuccess();

  return (
    <Landing
      title={"Bedankt voor je inschriving!"}
      subtitle={"Tot op zondag 3 September"}
      cta={{
        text: "Terug naar de website",
        onClick: () => router.push("/"),
      }}
    />
  );
}
