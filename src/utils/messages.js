export const createOwnMessage = (message) => {
  return {
    imageUrl: null,
    messageText: message,
    createdAt: new Date(),
    isMyMessage: true,
  };
};

const createOtherMessage = (imageUrl, message) => {
  return {
    imageUrl: imageUrl,
    messageText: message,
    createdAt: new Date(),
    isMyMessage: false,
  };
};

export const responseMessageFromAPI = async (imageUrl) => {
  const fetchData = await fetch('https://api.chucknorris.io/jokes/random');

  const getJsonData = await fetchData.json();

  const message = getJsonData.value;

  return createOtherMessage(imageUrl, message);
};
