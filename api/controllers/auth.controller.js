import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create user!' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return res.status(400).json({ message: 'Invalid Credentials!' });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: 'Invalid Credentials!' });

    // const { ...userInfo } = user;
    // GENERATE COOKIE TOKEN AND SEND TO USER
    // res.setHeader('Set-Cookie', 'test=' + 'myValue').json('success');
    const age = 1000 * 60 * 60 * 24 * 7;
    res
      .cookie('test2', 'myValue2', {
        httpOnly: true,
        // secure: true,
        maxAge: age,
      })
      .status(200)
      .json({ message: 'Login Successful!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to login!' });
  }
};

export const logout = (req, res) => {
  // db operations
};
