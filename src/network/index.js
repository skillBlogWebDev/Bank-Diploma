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

    return result.payload != null ? true : false;
  } catch (error) {
    console.log(error);
  }
};
