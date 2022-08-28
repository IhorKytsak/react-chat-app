export const getlocalStorageData = () => {

  const chatHistory = localStorage.getItem('chat');

  return JSON.parse(chatHistory);
};

export const setlocalStorageData = (chatHistory) => {

 return localStorage.setItem('chat', JSON.stringify(chatHistory));
};
