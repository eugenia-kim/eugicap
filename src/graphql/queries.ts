// tslint:disable
// this is an auto generated file. This will be overwritten

export const getBet = `query GetBet($id: ID!) {
  getBet(id: $id) {
    id
    author
    bet
    date
  }
}
`;
export const listBets = `query ListBets($filter: ModelBetFilterInput, $limit: Int, $nextToken: String) {
  listBets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author
      bet
      date
    }
    nextToken
  }
}
`;
