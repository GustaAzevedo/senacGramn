import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://quick-warthog-89.hasura.app/v1/graphql',
    headers: { 'x-hasura-admin-secret': '0tYF3Ri5zYlgVGSNY1Uf9IovkQo2V311KhrOG25gacMqZsbwpoo2wbbGbMjN79HP' },
    cache: new InMemoryCache()
});

export default client;