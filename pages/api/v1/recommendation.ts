
import {authenticateToken} from '../../../utils/authTokenHandler'
import {booksData} from '../../../lib/books'

export default function handler(req, res){

    //verify method
    if(req.method !== "GET") {
        return res.status(405).json({error: "Method not allowed"});
    }

    //authenticate token
    authenticateToken(req, res, async () => {
        let userId;
        //fetch recomendation from database
        try {
            // req 
            
            // find user id
            // userId = await prisma.user.findUnique({where: {username: req.user.username}});
            
            
            // check if user id is inputed
            if (!req.query.uname) {
                return res.status(400).json({error: "Invalid username"});
            }
            
            //mock data
            res.status(200).json({books: booksData});
            
            //TODO fix integration with prisma
            // Just get recomendation based on user ID
            // const books = await prisma.book.findMany();
            // return res.status(200).json({books: books});
            
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Something went wrong"});
        }
    });
}