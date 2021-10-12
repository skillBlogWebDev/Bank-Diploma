export const Router = (name, routes) => {
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
    path: '/login',
    name: 'Login',
  },
  {
    path: '/bills',
    name: 'Bills',
  },
]);

window.onload = () => {
  const activeRoutes = Array.from(document.querySelectorAll('[route]'));

  const navigate = (event) => {
    const route = event.target.attributes[1].value;
    const routeInfo = appRouter.routes.filter((r) => r.path === route)[0];

    if (!routeInfo) {
      console.log('no route');
    } else {
      window.history.pushState({}, '', routeInfo.path);
    }
  };

  activeRoutes.forEach((route) =>
    route.addEventListener('click', navigate, false)
  );
};
