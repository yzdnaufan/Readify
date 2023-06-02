import {authenticateToken} from '../../../utils/authTokenHandler'

export default function handler(req, res) {
    
    //verify method
    if (req.method !=="GET") {
        return res.status(405).json({error: "Method not allowed"});
    }

    //authenticate token
    authenticateToken(req, res, async () => {
        // fetch user list
        try {
            let jsonUser;
            // TODO : fetch user list from prisma

            // mock data
            jsonUser = await fetch('https://jsonplaceholder.typicode.com/users');
            jsonUser = await jsonUser.json();
            return res.status(200).json({users: jsonUser});

        } catch (err) {
            console.log(err)
            return res.status(500).json({
                error: "Something went wrong",
                message: err.message
            });
        }
    });
}
