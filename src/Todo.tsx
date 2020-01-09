import {Checkbox, Icon, Typography} from 'antd';
import React from 'react';
import styled from 'styled-components';
import {TodoFieldsFragment, useDeleteTodoMutation, useUpdateTodoMutation} from './api/generated';
import {todosQuery} from './api/operations';

type Props = {
  todo: TodoFieldsFragment;
};

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TodoText = styled(Typography.Text)`
  flex: 1;
  margin: 0 20px;
`;

const DeleteButton = styled(Icon)`
  color: red;
  cursor: pointer;
`;

export const Todo: React.FC<Props> = ({todo}) => {
  const [deleteTodo] = useDeleteTodoMutation({
    updateQuery: todosQuery,
    mapResultToUpdate: data => todo
  });
  const [updateTodo] = useUpdateTodoMutation();
  return (
    <TodoItem>
      <Checkbox
        checked={todo.done}
        onClick={() => updateTodo({variables: {id: todo.id, done: !todo.done}})}
      />
      <TodoText type={todo.done ? 'secondary' : undefined}>{todo.task}</TodoText>
      <DeleteButton type="minus-circle" onClick={() => deleteTodo({variables: {id: todo.id}})} />
    </TodoItem>
  );
};
