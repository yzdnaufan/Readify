

import {authenticateToken} from '../../../utils/authTokenHandler'
import {booksData} from '../../../lib/books'

const BOOK_JSON_STRUCTURE = { 
    original_title: '',
    book_id: '',
    authors: [],
    original_publication_year: null,
    language_code: '',
    image_url: '',
    average_rating: 0,
    rating_count: 0,
}


export default function handler(req, res){
    //verify method
    if(req.method === "GET") {
        getBooksHandler(req,res)
    }else if (req.method === "POST") {
        postBooksHandler(req,res);
    } else {
        return res.status(405).json({error: "Method not allowed"});
    }
}


function getBooksHandler(req,res) {
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

function postBooksHandler(req,res){
    //authenticate token
    authenticateToken(req, res, async () => {
        
        //TODO validate req.body
        if (!req.body.original_title) {
            return res.status(400).json({ error: "Invalid book title" })
        }
        if (!req.body.book_id) {
            return res.status(400).json({ error: "Invalid book id" })
        }
        if (!req.body.authors) {
            return res.status(400).json({ error: "Invalid book authors" })
        }
        if (!req.body.original_publication_year) {
            return res.status(400).json({ error: "Invalid book publication year" })
        }
        if (!req.body.language_code) {
            return res.status(400).json({ error: "Invalid book language code" })
        }
        if (!req.body.image_url) {
            return res.status(400).json({ error: "Invalid book image url" })
        }
        if (!req.body.average_rating) {
            return res.status(400).json({ error: "Invalid book average rating" })
        }
        
        let bookObj = {
            ...BOOK_JSON_STRUCTURE,
        }

        //TODO check if book already exists
        // bookObj.book_id pls change to book_id from prisma
        if (bookObj.book_id === req.body.book_id) {
            return res.status(400).json({ error: "Book already exists" })
        }

        //TODO add book to database
        bookObj.original_title = req.body.original_title;
        bookObj.book_id = req.body.book_id;
        bookObj.authors = req.body.authors;
        bookObj.original_publication_year = JSON.parse(req.body.original_publication_year);
        bookObj.language_code = req.body.language_code;
        bookObj.image_url = req.body.image_url;
        bookObj.average_rating = JSON.parse(req.body.average_rating);

        try {
            //TODO fix integration with prisma
            // const books = await prisma.book.create({
            //     data: bookObj
            // });

            //return
            res.status(202).json({statusMessage: "Data Inputed"});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Something went wrong"});
        }
    });
}