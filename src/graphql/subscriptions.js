/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMetaverse = /* GraphQL */ `
  subscription OnCreateMetaverse(
    $id: ID
    $name: String
    $description: String
    $website: String
  ) {
    onCreateMetaverse(
      id: $id
      name: $name
      description: $description
      website: $website
    ) {
      id
      name
      description
      website
    }
  }
`;
export const onUpdateMetaverse = /* GraphQL */ `
  subscription OnUpdateMetaverse(
    $id: ID
    $name: String
    $description: String
    $website: String
  ) {
    onUpdateMetaverse(
      id: $id
      name: $name
      description: $description
      website: $website
    ) {
      id
      name
      description
      website
    }
  }
`;
export const onDeleteMetaverse = /* GraphQL */ `
  subscription OnDeleteMetaverse(
    $id: ID
    $name: String
    $description: String
    $website: String
  ) {
    onDeleteMetaverse(
      id: $id
      name: $name
      description: $description
      website: $website
    ) {
      id
      name
      description
      website
    }
  }
`;
