const Router = (name, routes) => {
  return {
    name,
    routes,
  };
};

export const appRouter = new Router('appRouter', [
  {
    path: '/',
    name: 'Root',
  },
  {
    path: '/bills',
    name: 'Bills',
  },
  {
    path: '/currency',
    name: 'Currency',
  },
  {
    path: '/atm-machines',
    name: 'ATM machines',
  },
  {
    path: '/bills/account',
    name: 'Account',
  },
]);
