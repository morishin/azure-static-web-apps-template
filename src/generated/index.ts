import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  itemUrl: Scalars['String'];
  name: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  searchItems: Array<Item>;
};


export type QuerySearchItemsArgs = {
  query: Scalars['String'];
};

export type SearchItemsQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchItemsQuery = { __typename?: 'Query', searchItems: Array<{ __typename?: 'Item', id: string, name: string, imageUrl?: string | null | undefined, price?: number | null | undefined, itemUrl: string }> };


export const SearchItemsDocument = `
    query searchItems($query: String!) {
  searchItems(query: $query) {
    id
    name
    imageUrl
    price
    itemUrl
  }
}
    `;
export const useSearchItemsQuery = <
      TData = SearchItemsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: SearchItemsQueryVariables,
      options?: UseQueryOptions<SearchItemsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SearchItemsQuery, TError, TData>(
      ['searchItems', variables],
      fetcher<SearchItemsQuery, SearchItemsQueryVariables>(client, SearchItemsDocument, variables, headers),
      options
    );

useSearchItemsQuery.getKey = (variables: SearchItemsQueryVariables) => ['searchItems', variables];
;
