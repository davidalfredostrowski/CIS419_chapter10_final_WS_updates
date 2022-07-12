import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Loading from '../loading';
import Error from '../error';
import gql from 'graphql-tag';

const GET_USER = gql`
  query user($username: String!) { 
    user(username: $username) { 
	user(username: $username) {
	...userAttributes
	}
	}
	${USER_ATTRIBUTES}
`;


export const useGetUserQuery = (variables) => useQuery(GET_USER, { variables: { ...variables}});
