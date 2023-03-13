import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
    name: {
        type: String,
        required: [true, "Harap masukkan nama"],
        minlength: 3,
        maxlength: 50,
        trim: true,
      },
    email: {
        type: String,
        required: [true, "Harap masukkan email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Harap masukkan password"],
        unique: true,
        minlength: 6,
    },
    address: {
        type: String,
        trim: true,
        maxlength: 20,
        default: "my city",
    },
    phone: {
        type: Number
    }
}

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<User>
//   ) {
//     res.status(200).json({ /*Untuk diisi nanti */ })
//   }

