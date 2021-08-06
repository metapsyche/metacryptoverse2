/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMetaverse = /* GraphQL */ `
  query GetMetaverse($id: ID!) {
    getMetaverse(id: $id) {
      id
      name
      description
      website
    }
  }
`;
export const listMetaverses = /* GraphQL */ `
  query ListMetaverses(
    $filter: TableMetaverseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetaverses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        website
      }
      nextToken
    }
  }
`;
