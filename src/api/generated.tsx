/* eslint:disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from 'apollo-offline-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  _Any: any,
  _FieldSet: any,
  DateTime: any,
};







export type _Entity = Todo;


export type _Service = {
   __typename?: '_Service',
  sdl?: Maybe<Scalars['String']>,
};

export type CreateTodoInput = {
  task: Scalars['String'],
  done: Scalars['Boolean'],
  createdAt: Scalars['String'],
};


export enum MathOptions {
  Round = 'ROUND',
  Floor = 'FLOOR',
  Ceil = 'CEIL'
}

export type Mutation = {
   __typename?: 'Mutation',
  createTodo: Todo,
  updateTodo: Todo,
  deleteTodo: Scalars['ID'],
  _createSnapshot: Scalars['Boolean'],
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'],
  input: UpdateTodoInput
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']
};


export type Mutation_CreateSnapshotArgs = {
  key: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  todos?: Maybe<Array<Maybe<Todo>>>,
  todo?: Maybe<Todo>,
  _typeDefs: Scalars['String'],
  _entities: Array<Maybe<_Entity>>,
  _service: _Service,
  _aggregation: Scalars['Float'],
};


export type QueryTodosArgs = {
  page?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  where?: Maybe<TodosWhere>,
  ref?: Maybe<Scalars['String']>
};


export type QueryTodoArgs = {
  id: Scalars['ID']
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>
};


export type Query_AggregationArgs = {
  type?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  stat: Scalars['String'],
  ref?: Maybe<Scalars['String']>
};

export type Todo = {
   __typename?: 'Todo',
  id: Scalars['ID'],
  _nest: Todo,
  _int: Scalars['Int'],
  _float: Scalars['Float'],
  _boolean: Scalars['Boolean'],
  _string: Scalars['String'],
  task: Scalars['String'],
  done: Scalars['Boolean'],
  createdAt: Scalars['String'],
};


export type Todo_IntArgs = {
  min?: Maybe<Scalars['Int']>,
  max?: Maybe<Scalars['Int']>
};


export type Todo_FloatArgs = {
  min?: Maybe<Scalars['Float']>,
  max?: Maybe<Scalars['Float']>,
  fixed?: Maybe<Scalars['Int']>
};


export type Todo_StringArgs = {
  type?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['Int']>,
  syllables?: Maybe<Scalars['Int']>,
  casing?: Maybe<Scalars['String']>,
  min?: Maybe<Scalars['Int']>,
  max?: Maybe<Scalars['Int']>,
  pool?: Maybe<Scalars['String']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
  nationality?: Maybe<Scalars['String']>,
  full?: Maybe<Scalars['Boolean']>
};


export type TodoTaskArgs = {
  length?: Maybe<Scalars['Int']>
};


export type TodoCreatedAtArgs = {
  length?: Maybe<Scalars['Int']>
};

export type TodosWhere = {
  and?: Maybe<Array<TodosWhere>>,
  or?: Maybe<Array<TodosWhere>>,
  not?: Maybe<Array<TodosWhere>>,
  id_gt?: Maybe<Scalars['Float']>,
  id_ge?: Maybe<Scalars['Float']>,
  id_lt?: Maybe<Scalars['Float']>,
  id_le?: Maybe<Scalars['Float']>,
  id_eq?: Maybe<Scalars['Float']>,
  id_neq?: Maybe<Scalars['Float']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_nin?: Maybe<Array<Scalars['ID']>>,
  task_contains?: Maybe<Scalars['String']>,
  task_startswith?: Maybe<Scalars['String']>,
  task_endswith?: Maybe<Scalars['String']>,
  task_eq?: Maybe<Scalars['String']>,
  task_neq?: Maybe<Scalars['String']>,
  task_in?: Maybe<Array<Scalars['String']>>,
  task_nin?: Maybe<Array<Scalars['String']>>,
  task_exists?: Maybe<Scalars['Boolean']>,
  done_eq?: Maybe<Scalars['Boolean']>,
  done_exists?: Maybe<Scalars['Boolean']>,
  createdAt_contains?: Maybe<Scalars['String']>,
  createdAt_startswith?: Maybe<Scalars['String']>,
  createdAt_endswith?: Maybe<Scalars['String']>,
  createdAt_eq?: Maybe<Scalars['String']>,
  createdAt_neq?: Maybe<Scalars['String']>,
  createdAt_in?: Maybe<Array<Scalars['String']>>,
  createdAt_nin?: Maybe<Array<Scalars['String']>>,
  createdAt_exists?: Maybe<Scalars['Boolean']>,
  search?: Maybe<Scalars['String']>,
  like?: Maybe<Scalars['String']>,
};

export type UpdateTodoInput = {
  task?: Maybe<Scalars['String']>,
  done?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['String']>,
};

export type TodoFieldsFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, 'id' | 'done' | 'task' | 'createdAt'>
);

export type TodosQueryVariables = {};


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Maybe<Array<Maybe<(
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  )>>> }
);

export type TodoQueryVariables = {
  id: Scalars['ID']
};


export type TodoQuery = (
  { __typename?: 'Query' }
  & { todo: Maybe<(
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  )> }
);

export type CreateTodoMutationVariables = {
  task: Scalars['String'],
  createdAt: Scalars['String']
};


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  ) }
);

export type UpdateTodoMutationVariables = {
  id: Scalars['ID'],
  done?: Maybe<Scalars['Boolean']>,
  task?: Maybe<Scalars['String']>
};


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo: (
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  ) }
);

export type DeleteTodoMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTodo'>
);

export const TodoFieldsFragmentDoc = gql`
    fragment TodoFields on Todo {
  id
  done
  task
  createdAt
}
    `;
export const TodosDocument = gql`
    query todos {
  todos {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type TodosProps<TChildProps = {}> = ApolloReactHoc.DataProps<TodosQuery, TodosQueryVariables> & TChildProps;
export function withTodos<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TodosQuery,
  TodosQueryVariables,
  TodosProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TodosQuery, TodosQueryVariables, TodosProps<TChildProps>>(TodosDocument, {
      alias: 'todos',
      ...operationOptions
    });
};

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return ApolloReactHooks.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = ApolloReactCommon.QueryResult<TodosQuery, TodosQueryVariables>;
export const TodoDocument = gql`
    query todo($id: ID!) {
  todo(id: $id) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type TodoProps<TChildProps = {}> = ApolloReactHoc.DataProps<TodoQuery, TodoQueryVariables> & TChildProps;
export function withTodo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TodoQuery,
  TodoQueryVariables,
  TodoProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TodoQuery, TodoQueryVariables, TodoProps<TChildProps>>(TodoDocument, {
      alias: 'todo',
      ...operationOptions
    });
};

/**
 * __useTodoQuery__
 *
 * To run a query within a React component, call `useTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TodoQuery, TodoQueryVariables>) {
        return ApolloReactHooks.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, baseOptions);
      }
export function useTodoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodoQuery, TodoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TodoQuery, TodoQueryVariables>(TodoDocument, baseOptions);
        }
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export type TodoLazyQueryHookResult = ReturnType<typeof useTodoLazyQuery>;
export type TodoQueryResult = ApolloReactCommon.QueryResult<TodoQuery, TodoQueryVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($task: String!, $createdAt: String!) {
  createTodo(input: {task: $task, done: false, createdAt: $createdAt}) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type CreateTodoProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateTodoMutation, CreateTodoMutationVariables> & TChildProps;
export function withCreateTodo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTodoMutation,
  CreateTodoMutationVariables,
  CreateTodoProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTodoMutation, CreateTodoMutationVariables, CreateTodoProps<TChildProps>>(CreateTodoDocument, {
      alias: 'createTodo',
      ...operationOptions
    });
};

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      task: // value for 'task'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: ID!, $done: Boolean, $task: String) {
  updateTodo(id: $id, input: {done: $done, task: $task}) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type UpdateTodoProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateTodoMutation, UpdateTodoMutationVariables> & TChildProps;
export function withUpdateTodo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
  UpdateTodoProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTodoMutation, UpdateTodoMutationVariables, UpdateTodoProps<TChildProps>>(UpdateTodoDocument, {
      alias: 'updateTodo',
      ...operationOptions
    });
};

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      done: // value for 'done'
 *      task: // value for 'task'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = ApolloReactCommon.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export type DeleteTodoProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteTodoMutation, DeleteTodoMutationVariables> & TChildProps;
export function withDeleteTodo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  DeleteTodoProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTodoMutation, DeleteTodoMutationVariables, DeleteTodoProps<TChildProps>>(DeleteTodoDocument, {
      alias: 'deleteTodo',
      ...operationOptions
    });
};

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
export function useDeleteTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = ApolloReactCommon.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
