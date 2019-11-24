/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateBetInput = {
  id?: string | null,
  author: string,
  bet?: string | null,
  date?: string | null,
};

export type UpdateBetInput = {
  id: string,
  author?: string | null,
  bet?: string | null,
  date?: string | null,
};

export type DeleteBetInput = {
  id?: string | null,
};

export type ModelBetFilterInput = {
  id?: ModelIDFilterInput | null,
  author?: ModelStringFilterInput | null,
  bet?: ModelStringFilterInput | null,
  date?: ModelStringFilterInput | null,
  and?: Array< ModelBetFilterInput | null > | null,
  or?: Array< ModelBetFilterInput | null > | null,
  not?: ModelBetFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateBetMutationVariables = {
  input: CreateBetInput,
};

export type CreateBetMutation = {
  createBet:  {
    __typename: "Bet",
    id: string,
    author: string,
    bet: string | null,
    date: string | null,
  } | null,
};

export type UpdateBetMutationVariables = {
  input: UpdateBetInput,
};

export type UpdateBetMutation = {
  updateBet:  {
    __typename: "Bet",
    id: string,
    author: string,
    bet: string | null,
    date: string | null,
  } | null,
};

export type DeleteBetMutationVariables = {
  input: DeleteBetInput,
};

export type DeleteBetMutation = {
  deleteBet:  {
    __typename: "Bet",
    id: string,
    author: string,
    bet: string | null,
    date: string | null,
  } | null,
};

export type GetBetQueryVariables = {
  id: string,
};

export type GetBetQuery = {
  getBet:  {
    __typename: "Bet",
    id: string,
    author: string,
    bet: string | null,
    date: string | null,
  } | null,
};

export type ListBetsQueryVariables = {
  filter?: ModelBetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBetsQuery = {
  listBets:  {
    __typename: "ModelBetConnection",
    items:  Array< {
      __typename: "Bet",
      id: string,
      author: string,
      bet: string | null,
      date: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBetSubscriptionVariables = {
  author: string,
};

export type OnCreateBetSubscription = {
  onCreateBet:  {
    __typename: "Bet",
    id: string,
    author: string,
    bet: string | null,
    date: string | null,
  } | null,
};

export type OnUpdateBetSubscriptionVariables = {
  author: string,
};

export type OnUpdateBetSubscription = {
  onUpdateBet:  {
    __typename: "Bet",
    id: string,
    author: string,
    bet: string | null,
    date: string | null,
  } | null,
};

export type OnDeleteBetSubscriptionVariables = {
  author: string,
};

export type OnDeleteBetSubscription = {
  onDeleteBet:  {
    __typename: "Bet",
    id: string,
    author: string,
    bet: string | null,
    date: string | null,
  } | null,
};
