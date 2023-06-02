
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export default async function login( req, res ) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { username, password } = req.body;

  try {
    //find user
    // const user = await prisma.user.findUnique({username: username});        //TODO fix integration with prisma

    //mock user
    const user =[
      { 
        username: "johndoe",
        password: "$2a$12$2yX9/7Uxgz52DWIYx/EPK.fYc2rV7CZJneCB.D9Hn0wj8PSdrpHMS"
      },//password: "password"
      {
        username: "johndoe2",
        password:"$2b$12$h4D7ABYdz.mvlDxOUcKt..GwQDS6galgBlAMm6RDtV92YJH/SDGBS"  //baksobakso
      }    
    ];



    //user not found
    if(!user) {
      return res.status(400).json({ error: "Invalid username or password" })
    }

    //compare password hash
    for (let i = 0; i < user.length; i++) {
      if(user[i].username === username) {
        const match = await bcrypt.compare(password, user[i].password);
        if(!match) {
          return res.status(400).json({ error: "Invalid username or password" })
        }
      }
    }

    // const match = await bcrypt.compare(password, user.password);

    // //passwords don't match
    // if(!match) {
    //   return res.status(400).json({ error: "Invalid username or password" })
    // }

    //create JWT Token 
    const token = jwt.sign({username: user.username}, process.env.JWT_SECRET, {expiresIn: '1h'});

    //return token
    return res.status(200).json({token: token});

  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Something went wrong"});
  }
}

