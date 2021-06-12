import React from 'react'
import ReactDOM from 'react-dom'

import { csrfToken } from '@rails/ujs'
import { Photos } from './Photos'
import { NewPhoto } from './NewPhoto'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const httpLink = new HttpLink({ 
  uri: 'http://localhost:3000/graphql',
  headers: {
    'X-CSRF-Token': csrfToken()
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <NewPhoto />
      <hr />
      <br />
      <Photos />
    </ApolloProvider>,
    document.body.appendChild(document.createElement("div")),
  )
})
