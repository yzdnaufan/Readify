import bcrypt from 'bcrypt'

export default function handler(req,res) {
    let password = req.body.password;
    let username = req.body.username;
    let email = req.body.email;

    //verify method
    if(req.method !== "POST") {
        return res.status(405).json({error: "Method not allowed"});
    }
    
    //validate req.body
    if (!username) {
        return res.status(400).json({ error: "Invalid username" })
    }
    if (!password) {
        return res.status(400).json({ error: "Invalid password" })
    }

    //check if user exists
    //TODO fix integration with prisma
    // const user = await prisma.user.findUnique({username: username});
    // if(user) {
    //     return res.status(400).json({error: "User already exists"});
    // }

    //hash password
    bcrypt.hash(password, 12, async (err, hash) => {
        if(err) {
            console.log(err);
            return res.status(500).json({error: "Something went wrong"});
        }

        //create user
        //TODO fix integration with prisma
        // const newUser = await prisma.user.create({
        //     data: {
        //         username: username,
        //         email: email,
        //         password: hash
        //     }
        // });

        //mock user
        const newUser = {
            username: "johndoe2",
            email:"johndoe2@example.com",
            password: hash
        };

        //return user
        return res.status(201).json({
            user: newUser,
            statusMessage: "User created successfully"
        });
    });
};
