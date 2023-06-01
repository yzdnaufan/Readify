import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllUsers() {
    return prisma.user.findMany()
  }
  
  async function getUserById(userId: string) {
    return prisma.user.findUnique({
      where: {
        id: userId,
      }
    })
  }
  
  async function createUser(name: string, email: string, password: string) {
    return prisma.user.create({
      data: {
        name: name, 
        email: email, 
        password: password,
      }
    })
  }
  
  async function createBook(book_title: string, ISBN: string, ISBN13: string,author: string, language_code: string, average_rating: number, ratings_1: number, ratings_2: number, ratings_3: number, ratings_4: number, ratings_5:number, year_published: number, image_url: string, small_image_url:string, rating_count: number, genreIds: string[]){
    // Create the book using Prisma's create method
    return prisma.book.create({
      data: {
        book_title: book_title,
        ISBN: ISBN,
        ISBN13: ISBN13,
        author: author,
        language_code: language_code,
        average_rating: average_rating,
        ratings_1: ratings_1,
        ratings_2: ratings_2,
        ratings_3: ratings_3,
        ratings_4: ratings_4,
        ratings_5: ratings_5,
        year_published: year_published,
        image_url: image_url,
        small_image_url: small_image_url,
        rating_count: rating_count,
        genres: {
          connect: genreIds.map((id) => ({ id })),
        },
      },
    });
  }
  
  async function getAllBooks(){
    return prisma.book.findMany();
  }

  async function getBookById(id: string) {
    return prisma.book.findUnique({ where: { id } });
  }
  
  async function getBookByName(title: string) {
    return prisma.book.findUnique({ where: { book_title: title } });
  }
  
  async function createBookGenre(genreName: string) {
    return prisma.genre.create({ data: { name: genreName } });
  }
  
  async function getBooksByGenre(genre: string) {
    return prisma.book.findMany({
      where: { genres: { some: { genre } } },
    });
  }

  export {
    prisma, 
    getAllUsers,
    getUserById, 
    createUser, 
    createBook, 
    createBookGenre, 
    getAllBooks,
    getBookById, 
    getBookByName, 
    getBooksByGenre
  }