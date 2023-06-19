export const getParticipantsFromUrl = () => {
  const url = window.location.href;

  // Create a URL object
  const parsedUrl = new URL(url);

  // Get the value of the "participants" parameter
  const dataFromUrl = parsedUrl.searchParams.get("participants");

  if (!dataFromUrl) {
    return undefined;
  }

  // Decode the URL-encoded value
  const decodedParticipants = decodeURIComponent(dataFromUrl);

  // Parse the JSON data
  const jsonData = JSON.parse(decodedParticipants);

  const participants = jsonData.participants;
  const email = jsonData.email;

  return { participants, email };
};
