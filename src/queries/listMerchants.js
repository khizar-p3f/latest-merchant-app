export const listMerchants =/*GraphQL */ `
query MyQuery {
    listPayments {
      items {
        email
        id
        vendor_name
        updatedAt
        secret_key
        logo
        createdAt
        api_key
        _version
        _lastChangedAt
        _deleted
      }
    }
  }
  `;
