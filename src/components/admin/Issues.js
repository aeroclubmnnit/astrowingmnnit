import {
  Datagrid,
  Edit,
  EditButton,
  List,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const IssueList = (props) => {
  return (
    <List {...props} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="user.name" label="Student" />
        <TextField source="component.name" label="Component" />
        <TextField source="num" label="Quantity" />
        <TextField source="status" />
        <TextField source="reason" />
        <EditButton basePath="/issue" />
      </Datagrid>
    </List>
  );
};

export const IssueEdit = (props) => {
  return (
    <Edit title="Review Request" {...props}>
      <SimpleForm redirect="/issue">
        <TextInput disabled label="Id" source="id" />
        <TextInput disabled label="Name" source="user.name" />
        <TextInput disabled label="Component" source="component.name" />
        <TextInput disabled label="Reason" source="reason" />
        <TextInput disabled label="Quantity" source="num" />
        <SelectInput
          source="status"
          choices={[
            { id: "Requested", name: "Requested" },
            { id: "Issued", name: "Issued" },
            { id: "Denied", name: "Denied" },
            { id: "Collected", name: "Collected" },
            { id: "Returned", name: "Returned" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};
