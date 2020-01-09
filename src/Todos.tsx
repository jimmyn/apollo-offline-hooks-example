import * as antd from 'antd';
import {Card, Col, Icon, List, Row, Typography} from 'antd';
import {Formik} from 'formik';
import {Form, FormItem, Input, SubmitButton} from 'formik-antd';
import React from 'react';
import styled from 'styled-components';
import {useCreateTodoMutation, useTodosQuery} from './api/generated';
import {todosQuery} from './api/operations';
import {Todo} from './Todo';

type Props = {};

const Layout = styled(antd.Layout)`
  min-height: 100%;
  flex-direction: row;
  justify-content: center;
`;

const Content = styled(antd.Layout.Content)`
  max-width: 600px;
  margin: 50px;
`;

export const Todos: React.FC<Props> = () => {
  const {data, loading} = useTodosQuery();
  const [createTodo] = useCreateTodoMutation({updateQuery: todosQuery});
  const todos = (data?.todos ?? []).sort(
    (a, b) => new Date(b!.createdAt).valueOf() - new Date(a!.createdAt).valueOf()
  );

  return (
    <Layout>
      <Content>
        <Typography.Title style={{textAlign: 'center'}}>To Do List</Typography.Title>
        <Card>
          <Formik
            onSubmit={async (values, {resetForm}) => {
              await createTodo({variables: values});
              resetForm();
            }}
            initialValues={{task: '', createdAt: new Date().toISOString()}}
          >
            <Form layout="horizontal">
              <Row type="flex" gutter={10}>
                <Col span={20}>
                  <FormItem name="task">
                    <Input name="task" placeholder="Buy me a beer" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="submit">
                    <SubmitButton block>
                      <Icon type="plus" /> Add
                    </SubmitButton>
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </Formik>
          <List
            loading={loading}
            dataSource={todos}
            renderItem={todo => (
              <List.Item>
                <Todo todo={todo!} />
              </List.Item>
            )}
          />
        </Card>
      </Content>
    </Layout>
  );
};
