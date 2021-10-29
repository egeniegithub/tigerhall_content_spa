import { ApolloClient, InMemoryCache } from '@apollo/client'

const graphQLClient = new ApolloClient({
    uri: "https://api.staging.tigerhall.io/graphql",
    cache: new InMemoryCache()
})

export default graphQLClient