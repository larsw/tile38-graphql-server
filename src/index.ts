import express from 'express'
import { ApolloServer, gql, TypeWithResolvers, ResolveType, IResolvers } from 'apollo-server-express'
import Tile38 from 'tile38'

const tile38 = new Tile38('localhost', 9581)

const typeDefs = gql`
  input BoundsInput {
    minLat: Float!
    minLng: Float!
    maxLat: Float!
    maxLng: Float!
  }

  type Query {
    withinBounds(key: String, bounds: BoundsInput): [Track]
    keys(pattern: String): [String]
  }

  type KeyValuePair {
    key: String
    value: String
  }

  interface GeoJson {
    type: String!
    properties: [KeyValuePair] 
  }

  type PointObject implements GeoJson {
    type: String!
    properties: [KeyValuePair!]
    coordinates: [Float]
  }

  type Position {
    lat: Float!
    lng: Float!
    alt: Float
  }

  type Track {
    id: String
    object: PointObject
  }
`

const app = express()

type Bounds = {
  minLat: number,
  minLng: number,
  maxLat: number,
  maxLng: number
}

const resolvers = {
  Query: {
    withinBounds: (parent:any, args:any, context:any, info:any) => {
      const key = args.key
      const bounds = args.bounds
      return new Promise((resolve, reject) => {
        tile38.withinQuery(key)
        .bounds(bounds.minLat, bounds.minLng, bounds.maxLat, bounds.maxLng)
        .execute()
        .then((results:any) => {
          const entries = Object.entries(results.objects)
          console.log(entries)
          resolve(entries)
        })
        .catch((err: string|Error) => reject(err))
      })
    },
    keys: (pattern: string) => {
      pattern = pattern ?? '*'
      return new Promise((resolve, reject) => {
        tile38.keys(pattern)
          .then((results:any) => {
            console.log(results)
            resolve(results)
          })
          .catch((err:any) => reject(err))
      }) 
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
