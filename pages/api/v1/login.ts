
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { login } from '../../../prisma/userQueries';



export default async function handler( req, res ) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { username, password } = req.body;

  try {

    const user = await login(username, password);

    //create JWT Token 
    const token = jwt.sign({username: user.username}, process.env.JWT_SECRET, {expiresIn: '1h'});

    //return token
    return res.status(200).json({token: token, user: user});

  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Something went wrong"});
  }
}

