exports.main = async (context = {}, sendResponse) => {
  const staticCard = {
    objectId: 1,
    title: 'Sample data',
    data: "Some random data to display!!",
  };

  try {
    sendResponse({
      results: [staticCard],
      primaryAction: {
        type: 'SERVERLESS_ACTION_HOOK',
        serverlessFunction: 'gh-card',
        label: 'GH-Created Card',
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
