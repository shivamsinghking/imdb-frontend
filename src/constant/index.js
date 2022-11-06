const constants = {
  development:{
    SERVER_URL: 'https://imdb-api.onrender.com/'
  },
  local:{
    SERVER_URL: 'http://localhost:8080/'
  }
}

export const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
export const SERVER_URL = constants[NODE_ENV].SERVER_URL
export const USER_TOKEN = 'token'