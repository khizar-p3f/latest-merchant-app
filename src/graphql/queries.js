/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPaymentAggregators = /* GraphQL */ `
  query GetPaymentAggregators($id: ID!) {
    getPaymentAggregators(id: $id) {
      id
      merchant_id
      aggregator
      client_id
      secret_key
      created_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPaymentAggregators = /* GraphQL */ `
  query ListPaymentAggregators(
    $filter: ModelPaymentAggregatorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentAggregators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        merchant_id
        aggregator
        client_id
        secret_key
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPaymentAggregators = /* GraphQL */ `
  query SyncPaymentAggregators(
    $filter: ModelPaymentAggregatorsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPaymentAggregators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        merchant_id
        aggregator
        client_id
        secret_key
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMerchantsProfile = /* GraphQL */ `
  query GetMerchantsProfile($id: ID!) {
    getMerchantsProfile(id: $id) {
      id
      auth_id
      email
      name
      company
      created_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMerchantsProfiles = /* GraphQL */ `
  query ListMerchantsProfiles(
    $filter: ModelMerchantsProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMerchantsProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        auth_id
        email
        name
        company
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMerchantsProfiles = /* GraphQL */ `
  query SyncMerchantsProfiles(
    $filter: ModelMerchantsProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMerchantsProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        auth_id
        email
        name
        company
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
