/* eslint:disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '../';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
  _FieldSet: any;
  DateTime: any;
};

export type _Entity = Todo;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type CreateTodoInput = {
  task: Scalars['String'];
  done: Scalars['Boolean'];
};

export enum MathOptions {
  Round = 'ROUND',
  Floor = 'FLOOR',
  Ceil = 'CEIL'
}

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  updateTodo: Todo;
  deleteTodo: Scalars['ID'];
  _createSnapshot: Scalars['Boolean'];
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: UpdateTodoInput;
};

export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};

export type Mutation_CreateSnapshotArgs = {
  key: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todos?: Maybe<Array<Maybe<Todo>>>;
  todo?: Maybe<Todo>;
  _typeDefs: Scalars['String'];
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  _aggregation: Scalars['Float'];
};

export type QueryTodosArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<TodosWhere>;
  ref?: Maybe<Scalars['String']>;
};

export type QueryTodoArgs = {
  id: Scalars['ID'];
};

export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};

export type Query_AggregationArgs = {
  type?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  stat: Scalars['String'];
  ref?: Maybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  _nest: Todo;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  task: Scalars['String'];
  done: Scalars['Boolean'];
};

export type Todo_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};

export type Todo_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};

export type Todo_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};

export type TodoTaskArgs = {
  length?: Maybe<Scalars['Int']>;
};

export type TodosWhere = {
  and?: Maybe<Array<TodosWhere>>;
  or?: Maybe<Array<TodosWhere>>;
  not?: Maybe<Array<TodosWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  task_contains?: Maybe<Scalars['String']>;
  task_startswith?: Maybe<Scalars['String']>;
  task_endswith?: Maybe<Scalars['String']>;
  task_eq?: Maybe<Scalars['String']>;
  task_neq?: Maybe<Scalars['String']>;
  task_in?: Maybe<Array<Scalars['String']>>;
  task_nin?: Maybe<Array<Scalars['String']>>;
  task_exists?: Maybe<Scalars['Boolean']>;
  done_eq?: Maybe<Scalars['Boolean']>;
  done_exists?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
};

export type UpdateTodoInput = {
  task?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
};

export type TodoFieldsFragment = {__typename?: 'Todo'} & Pick<Todo, 'id' | 'done' | 'task'>;

export type TodosQueryQueryVariables = {};

export type TodosQueryQuery = {__typename?: 'Query'} & {
  todos: Maybe<Array<Maybe<{__typename?: 'Todo'} & TodoFieldsFragment>>>;
};

export type TodoQueryQueryVariables = {
  id: Scalars['ID'];
};

export type TodoQueryQuery = {__typename?: 'Query'} & {
  todo: Maybe<{__typename?: 'Todo'} & TodoFieldsFragment>;
};

export type CreateTodoMutationMutationVariables = {
  task: Scalars['String'];
};

export type CreateTodoMutationMutation = {__typename?: 'Mutation'} & {
  createTodo: {__typename?: 'Todo'} & TodoFieldsFragment;
};

export type UpdateTodoMutationMutationVariables = {
  id: Scalars['ID'];
  done?: Maybe<Scalars['Boolean']>;
  task: Scalars['String'];
};

export type UpdateTodoMutationMutation = {__typename?: 'Mutation'} & {
  updateTodo: {__typename?: 'Todo'} & TodoFieldsFragment;
};

export type DeleteTodoMutationVariables = {
  id: Scalars['ID'];
};

export type DeleteTodoMutation = {__typename?: 'Mutation'} & Pick<Mutation, 'deleteTodo'>;

export const TodoFieldsFragmentDoc = gql`
  fragment TodoFields on Todo {
    id
    done
    task
  }
`;
export const TodosQueryDocument = gql`
  query todosQuery {
    todos {
      ...TodoFields
    }
  }
  ${TodoFieldsFragmentDoc}
`;
export type TodosQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  TodosQueryQuery,
  TodosQueryQueryVariables
> &
  TChildProps;
export function withTodosQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    TodosQueryQuery,
    TodosQueryQueryVariables,
    TodosQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    TodosQueryQuery,
    TodosQueryQueryVariables,
    TodosQueryProps<TChildProps>
  >(TodosQueryDocument, {
    alias: 'todosQuery',
    ...operationOptions
  });
}

/**
 * __useTodosQueryQuery__
 *
 * To run a query within a React component, call `useTodosQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<TodosQueryQuery, TodosQueryQueryVariables>
) {
  return ApolloReactHooks.useQuery<TodosQueryQuery, TodosQueryQueryVariables>(
    TodosQueryDocument,
    baseOptions
  );
}
export function useTodosQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosQueryQuery, TodosQueryQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<TodosQueryQuery, TodosQueryQueryVariables>(
    TodosQueryDocument,
    baseOptions
  );
}
export type TodosQueryQueryHookResult = ReturnType<typeof useTodosQueryQuery>;
export type TodosQueryLazyQueryHookResult = ReturnType<typeof useTodosQueryLazyQuery>;
export type TodosQueryQueryResult = ApolloReactCommon.QueryResult<
  TodosQueryQuery,
  TodosQueryQueryVariables
>;
export const TodoQueryDocument = gql`
  query todoQuery($id: ID!) {
    todo(id: $id) {
      ...TodoFields
    }
  }
  ${TodoFieldsFragmentDoc}
`;
export type TodoQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  TodoQueryQuery,
  TodoQueryQueryVariables
> &
  TChildProps;
export function withTodoQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    TodoQueryQuery,
    TodoQueryQueryVariables,
    TodoQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    TodoQueryQuery,
    TodoQueryQueryVariables,
    TodoQueryProps<TChildProps>
  >(TodoQueryDocument, {
    alias: 'todoQuery',
    ...operationOptions
  });
}

/**
 * __useTodoQueryQuery__
 *
 * To run a query within a React component, call `useTodoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodoQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<TodoQueryQuery, TodoQueryQueryVariables>
) {
  return ApolloReactHooks.useQuery<TodoQueryQuery, TodoQueryQueryVariables>(
    TodoQueryDocument,
    baseOptions
  );
}
export function useTodoQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodoQueryQuery, TodoQueryQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<TodoQueryQuery, TodoQueryQueryVariables>(
    TodoQueryDocument,
    baseOptions
  );
}
export type TodoQueryQueryHookResult = ReturnType<typeof useTodoQueryQuery>;
export type TodoQueryLazyQueryHookResult = ReturnType<typeof useTodoQueryLazyQuery>;
export type TodoQueryQueryResult = ApolloReactCommon.QueryResult<
  TodoQueryQuery,
  TodoQueryQueryVariables
>;
export const CreateTodoMutationDocument = gql`
  mutation createTodoMutation($task: String!) {
    createTodo(input: {task: $task, done: false}) {
      ...TodoFields
    }
  }
  ${TodoFieldsFragmentDoc}
`;
export type CreateTodoMutationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreateTodoMutationMutation,
  CreateTodoMutationMutationVariables
> &
  TChildProps;
export function withCreateTodoMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateTodoMutationMutation,
    CreateTodoMutationMutationVariables,
    CreateTodoMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateTodoMutationMutation,
    CreateTodoMutationMutationVariables,
    CreateTodoMutationProps<TChildProps>
  >(CreateTodoMutationDocument, {
    alias: 'createTodoMutation',
    ...operationOptions
  });
}

/**
 * __useCreateTodoMutationMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutationMutation, { data, loading, error }] = useCreateTodoMutationMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useCreateTodoMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateTodoMutationMutation,
    CreateTodoMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateTodoMutationMutation,
    CreateTodoMutationMutationVariables
  >(CreateTodoMutationDocument, baseOptions);
}
export type CreateTodoMutationMutationHookResult = ReturnType<typeof useCreateTodoMutationMutation>;
export type CreateTodoMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateTodoMutationMutation
>;
export type CreateTodoMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateTodoMutationMutation,
  CreateTodoMutationMutationVariables
>;
export const UpdateTodoMutationDocument = gql`
  mutation updateTodoMutation($id: ID!, $done: Boolean, $task: String!) {
    updateTodo(id: $id, input: {done: $done, task: $task}) {
      ...TodoFields
    }
  }
  ${TodoFieldsFragmentDoc}
`;
export type UpdateTodoMutationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  UpdateTodoMutationMutation,
  UpdateTodoMutationMutationVariables
> &
  TChildProps;
export function withUpdateTodoMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateTodoMutationMutation,
    UpdateTodoMutationMutationVariables,
    UpdateTodoMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateTodoMutationMutation,
    UpdateTodoMutationMutationVariables,
    UpdateTodoMutationProps<TChildProps>
  >(UpdateTodoMutationDocument, {
    alias: 'updateTodoMutation',
    ...operationOptions
  });
}

/**
 * __useUpdateTodoMutationMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutationMutation, { data, loading, error }] = useUpdateTodoMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      done: // value for 'done'
 *      task: // value for 'task'
 *   },
 * });
 */
export function useUpdateTodoMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateTodoMutationMutation,
    UpdateTodoMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateTodoMutationMutation,
    UpdateTodoMutationMutationVariables
  >(UpdateTodoMutationDocument, baseOptions);
}
export type UpdateTodoMutationMutationHookResult = ReturnType<typeof useUpdateTodoMutationMutation>;
export type UpdateTodoMutationMutationResult = ApolloReactCommon.MutationResult<
  UpdateTodoMutationMutation
>;
export type UpdateTodoMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateTodoMutationMutation,
  UpdateTodoMutationMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;
export type DeleteTodoProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
> &
  TChildProps;
export function withDeleteTodo<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteTodoMutation,
    DeleteTodoMutationVariables,
    DeleteTodoProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteTodoMutation,
    DeleteTodoMutationVariables,
    DeleteTodoProps<TChildProps>
  >(DeleteTodoDocument, {
    alias: 'deleteTodo',
    ...operationOptions
  });
}

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument,
    baseOptions
  );
}
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = ApolloReactCommon.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;
