export const getParticipantsFromUrl = () => {
  const url = window.location.href;

  // Create a URL object
  const parsedUrl = new URL(url);

  // Get the value of the "participants" parameter
  const participantFromUrl = parsedUrl.searchParams.get("participants");

  if (!participantFromUrl) {
    return undefined;
  }

  // Decode the URL-encoded value
  const decodedParticipants = decodeURIComponent(participantFromUrl);

  // Parse the JSON data
  const participants = JSON.parse(decodedParticipants);

  return participants;
};
