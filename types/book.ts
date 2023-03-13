import type { NextApiRequest, NextApiResponse } from 'next'

type Book = {
    book_title: {
        type: String,
        required: [true, "Harap masukkan judul buku"],
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    ISBN: {
        type: String,
        minlength: 10,
        maxlength: 13,
        trim: true
    },
    book_cat: {
        type: String,
        minlength: 5,
        maxlength: 20,
        trim: true
    },
    author: {
        type: String, 
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    publisher: {
        type: String,
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    year_published: {
        type: Number,
        min: 1700
    },
    synopsis: {
        type: String, 
        minlength: 10, 
        maxlength: 1000,
        trim: true
    },
    cover_link: {
        type: String,
        required: [true, "Harap memasukkan gambar buku"]
    }
}

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Book>
//   ) {
//     res.status(200).json({ /*Untuk diisi nanti */ })
//   }