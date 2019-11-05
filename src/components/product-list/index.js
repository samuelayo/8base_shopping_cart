
import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query {
    productsList {
      items {
        id
        createdAt
        name
        price
        description
        image {
          downloadUrl
        }
      }
    }
  }
`;
export default PRODUCTS_QUERY;