const users = [
          {
                    user: "admin",
                    password: "1234",
                    role: "admin",
                    token: "admin"
          },
];
export function login(user, password) {
          const foundUser = users.find((u) => u.user === user && u.password === password);
          if (foundUser) {
                    return foundUser;
          }
          return null;
}