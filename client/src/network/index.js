export const auth = async (login, password) => {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
    });

    const result = await response.json();

    return result.payload != null
      ? { auth: true, token: result.payload.token }
      : { auth: false };
  } catch (error) {
    console.log(error);
  }
};

export const getAccountsByToken = async (token) => {
  try {
    const response = await fetch('http://localhost:3000/accounts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`,
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
