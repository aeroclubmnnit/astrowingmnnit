import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  FileInput,
  ImageField,
  ImageInput,
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
} from "react-admin";

const types_arr = [
  "Transmitter And Receiver",
  "Batteries",
  "Mechanical Tools",
  "Electronic Components and Sensors",
  "Development Boards",
  "Material For Drones and Planes",
];
const types = types_arr.map((type) => ({
  id: type,
  name: type
}));

export const ComponentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" label="Type" />
        <ImageField source="image_url" label="Image" />
        <TextField source="available" />
        <TextField source="issued" />
        <EditButton basePath="/component" />
        <DeleteButton basePath="/component" />
      </Datagrid>
    </List>
  );
};

export const ComponentCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/component">
        <TextInput source="name" label="Name" validate={[required()]} />
        <SelectInput
          source="type"
          choices={types}
          validate={[required()]}
          label="Type"
        />
        <TextInput source="image_url" label="Image" validate={[required()]} />
        <NumberInput source="available" validate={[required(), number()]} />
      </SimpleForm>
    </Create>
  );
};

export const ComponentEdit = (props) => {
  return (
    <Edit title="Review Request" {...props}>
      <SimpleForm redirect="/component">
        <TextInput source="name" label="Name" validate={[required()]} />
        <SelectInput
          source="type"
          choices={types}
          validate={[required()]}
          label="Type"
        />
        <TextInput source="image_url" label="Image" validate={[required()]} />
        <NumberInput source="available" validate={[required(), number()]} />
      </SimpleForm>
    </Edit>
  );
};

export const ComponentShow = (props) => {
  return (
    <Show {...props} title="Component Show">
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" label="Type" />
        <TextInput source="image_url" label="Image" validate={[required()]} />
        <TextField source="available" />
        <TextField source="issued" />
      </SimpleShowLayout>
    </Show>
  );
};
