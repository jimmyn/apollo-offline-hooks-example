import {gql} from 'apollo-boost';

export const todoFields = gql`
  fragment TodoFields on Todo {
    id
    done
    task
    createdAt
  }
`;

export const todosQuery = gql`
  query todos {
    todos {
      id
      done
      task
    }
  }
`;

export const todoQuery = gql`
  query todo($id: ID!) {
    todo(id: $id) {
      id
      done
      task
      createdAt
    }
  }
`;

export const createTodoMutation = gql`
  mutation createTodo($task: String!, $createdAt: String!) {
    createTodo(input: {task: $task, done: false, createdAt: $createdAt}) {
      id
      done
      task
      createdAt
    }
  }
`;

export const updateTodoMutation = gql`
  mutation updateTodo($id: ID!, $done: Boolean, $task: String) {
    updateTodo(id: $id, input: {done: $done, task: $task}) {
      id
      done
      task
      createdAt
    }
  }
`;

export const deleteTodoMutation = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;
