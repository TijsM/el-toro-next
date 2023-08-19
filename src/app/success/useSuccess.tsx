import { useEffect } from "react";
import { getParticipantsFromUrl } from "../../utils/getParticipantsFromUrl";
import axios from "axios";

export const useSuccess = () => {
  useEffect(() => {
    const storeInAirtable = async () => {
      console.log("start storing in airtable");
      const participantsFromUrl = getParticipantsFromUrl();

      if (!participantsFromUrl) {
        return;
      }

      const response = await axios.post("/airtable/save-sign-up", {
        participants: participantsFromUrl.participants,
        email: participantsFromUrl.email,
      });

      console.log("end storing in airtable", response);
    };

    storeInAirtable();
  }, []);
};
