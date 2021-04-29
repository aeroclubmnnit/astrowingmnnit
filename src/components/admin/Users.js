import {
  BooleanField,
  BooleanInput,
  ChipField,
  Create,
  CreateButton,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  NumberField,
  ReferenceArrayField,
  SelectInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput,
  required,
  NumberInput
} from "react-admin";
import { useSelector } from "react-redux";

export const UserList = (props) => {
  const user = useSelector((state) => state.user);

  return (
    <List {...props} bulkActionButtons={false}>
      <Datagrid >
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="registration_no" />
        <TextField source="role" />
        <BooleanField source="confirmed" />
        <BooleanField source="canSignIn" />
        <ShowButton basePath="/users" />
        {user.role === "Super-Admin" && <EditButton basePath="/users" />}
        {user.role === "Super-Admin" && <DeleteButton basePath="/users" />}
      </Datagrid>
    </List>
  );
};

export const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/users">
        <TextInput source="name" validate={required()} />
        <TextInput source="email" type="email" />
        <TextInput source="registration_no" validate={required()} />
        <TextInput source="linkedin_url" type="url" />
      </SimpleForm>
    </Create>
  );
};
export const UserShow = (props) => {
  return (
    <Show {...props} title="User Show">
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <BooleanField source="confirmed" />
        <TextField source="email" label="Email" />
        <TextField source="registration_no" />
        <TextField source="year" />
        <TextField source="role" />
        <ReferenceArrayField source="projects" reference="projects">
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceArrayField source="photos" reference="astrophotographies">
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceArrayField source="blogs" reference="blogs">
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceArrayField>
        <TextField source="linkedin_url" />
      </SimpleShowLayout>
    </Show>
  );
};

export const UserEdit = (props) => {
  const user = useSelector((state) => state.user);

  return (
    <Edit title="User Edit" {...props}>
      {user.role === "Super-Admin" && (
        <SimpleForm redirect="/users" {...props}>
          <TextInput label="Id" source="id" disabled />
          <TextInput label="Name" source="name" />
          <TextInput label="Email" source="email" />
          <BooleanInput source="canSignIn" />
          <TextInput source="linkedin_url" type="url" />
          <SelectInput
            source="role"
            choices={[
              { id: "Super-Admin", name: "Super Admin" },
              { id: "Admin", name: "Admin" },
              { id: "User", name: "User" },
            ]}
          />
        </SimpleForm>
      )}
    </Edit>
  );
};
