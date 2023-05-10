export const safeApi = async (method, mockMethod, timeout = 1500) => {
  try {
    const response = await method();

    return response;
  } catch {
    return mockMethod(timeout);
  }
};
