export const getCurrentDateForChat = (date) => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getCurrentDateForSidebar = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const sortByDate = (a, b) => {
  let aDate = a.joinedDate;
  let bDate = b.joinedDate;

  if (a.messages.length > 0) {
    aDate = a.messages[0].createdAt;
  }

  if (b.messages.length > 0) {
    bDate = b.messages[0].createdAt;
  }

  const aDateInSec = new Date(aDate).getTime();
  const bDateInSec = new Date(bDate).getTime();

  if (aDateInSec < bDateInSec) {
    return 1;
  }

  if (aDateInSec > bDateInSec) {
    return -1;
  }

  return 0;
};
