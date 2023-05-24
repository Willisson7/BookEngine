const {gql} = require('apollo-server-express');

const typeDefs =  gql`

type Book {
    bookId: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
}

type auth {
    token: ID
    user: User
}

input bookInput{
       _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Query{
    me: User
}

type Mutation{
    addUser(username: String, email: String, password: String): auth
    login(email: String, password: String): auth
    saveBook(bookData: bookInput): User
    removeBook(bookId: ID): User
}
`

module.exports = typeDefs;