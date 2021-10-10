export const auth = async () => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    body: {
      login: 'developer',
      password: 'skillbox',
    },
  });

  console.log(response);
};
