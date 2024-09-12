import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'Filip',
    email: 'filip@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: false,
  },
  {
    name: 'David',
    email: 'david@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: false,
  },
];

export default users;
