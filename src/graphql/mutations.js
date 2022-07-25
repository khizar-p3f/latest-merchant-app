/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentAggregators = /* GraphQL */ `
  mutation CreatePaymentAggregators(
    $input: CreatePaymentAggregatorsInput!
    $condition: ModelPaymentAggregatorsConditionInput
  ) {
    createPaymentAggregators(input: $input, condition: $condition) {
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
export const updatePaymentAggregators = /* GraphQL */ `
  mutation UpdatePaymentAggregators(
    $input: UpdatePaymentAggregatorsInput!
    $condition: ModelPaymentAggregatorsConditionInput
  ) {
    updatePaymentAggregators(input: $input, condition: $condition) {
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
export const deletePaymentAggregators = /* GraphQL */ `
  mutation DeletePaymentAggregators(
    $input: DeletePaymentAggregatorsInput!
    $condition: ModelPaymentAggregatorsConditionInput
  ) {
    deletePaymentAggregators(input: $input, condition: $condition) {
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
export const createMerchantsProfile = /* GraphQL */ `
  mutation CreateMerchantsProfile(
    $input: CreateMerchantsProfileInput!
    $condition: ModelMerchantsProfileConditionInput
  ) {
    createMerchantsProfile(input: $input, condition: $condition) {
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
export const updateMerchantsProfile = /* GraphQL */ `
  mutation UpdateMerchantsProfile(
    $input: UpdateMerchantsProfileInput!
    $condition: ModelMerchantsProfileConditionInput
  ) {
    updateMerchantsProfile(input: $input, condition: $condition) {
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
export const deleteMerchantsProfile = /* GraphQL */ `
  mutation DeleteMerchantsProfile(
    $input: DeleteMerchantsProfileInput!
    $condition: ModelMerchantsProfileConditionInput
  ) {
    deleteMerchantsProfile(input: $input, condition: $condition) {
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
