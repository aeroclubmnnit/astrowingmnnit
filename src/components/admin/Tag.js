import React from "react";
import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  ImageField,
  List,
  number,
  NumberInput,
  required,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  ShowButton,
} from "react-admin";

export const TagList = (props) => {
  return (
    <List {...props} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="name" />
        <ShowButton basePath="/tags" />
        <DeleteButton basePath="/tags" />
        <EditButton basePath="/tags" />
      </Datagrid>
    </List>
  );
};

export const TagCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/tags">
        <TextInput source="name" validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export const TagShow = (props) => {
  return (
    <Show {...props} title="TagShow">
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
      </SimpleShowLayout>
    </Show>
  );
};

export const TagEdit = (props) => {
  return (
    <Edit title="Tag Edit" {...props}>
      <SimpleForm redirect="/tags">
        <TextInput source="name" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
