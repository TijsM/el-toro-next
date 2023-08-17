import { useEffect } from "react";
import { getParticipantsFromUrl } from "../../utils/getParticipantsFromUrl";
import axios from "axios";

export const useSuccess = () => {
  useEffect(() => {
    const storeInAirtable = async () => {
      const participantsFromUrl = getParticipantsFromUrl();

      if (!participantsFromUrl) {
        return;
      }

      const response = await axios.post("/airtable/save-sign-up", {
        participants: participantsFromUrl.participants,
        email: participantsFromUrl.email,
      });
    };

    storeInAirtable();
  }, []);
};
