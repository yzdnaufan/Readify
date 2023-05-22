

import {authenticateToken} from '../../../utils/authTokenHandler'
import {booksData} from '../../../lib/books'

export default function handler(req, res){
    //verify method
    if(req.method !== "GET") {
        return res.status(405).json({error: "Method not allowed"});
    }

    //authenticate token
    authenticateToken(req, res, async () => {
        //fetch books
        try {
            //TODO fix integration with prisma
            // const books = await prisma.book.findMany();
            // return res.status(200).json({books: books});
            //mock data
            res.status(200).json({books: booksData});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Something went wrong"});
        }
    });
}
