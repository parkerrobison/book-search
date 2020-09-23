import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks{
                    bookId
                    authors
                    image
                    description
                    title
                    link
                }
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user{
                _id
                username
                email
                bookCount
                savedBooks{
                    bookId
                    authors
                    image
                    description
                    title
                    link
                }
            }
        }
    }
`;

// export const SAVE_BOOK = gql`

// `;

// export const REMOVE_BOOK = gql`

// `;

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

// ADD_USER will execute the addUser mutation.

// SAVE_BOOK will execute the saveBook mutation.

// REMOVE_BOOK will execute the removeBook mutation.