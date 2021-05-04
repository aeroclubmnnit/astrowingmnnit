import React from "react";
import {
  ArrayField,
  Create,
  ArrayInput,
  SimpleFormIterator,
  Datagrid,
  DateField,
  DateInput,
  DeleteButton,
  Edit,
  EditButton,
  ImageField,
  List,
  required,
  RichTextField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  BooleanInput,
  BooleanField,
  SelectInput,
  ReferenceInput,
  ReferenceField,
  ChipField,
  SingleFieldList,
} from "react-admin";
import RichTextQuill from "./RichTextQuill";

export const PhotoList = (props) => {
  return (
    <List {...props} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="approved" />
        <ShowButton basePath="/astrophotographies" />
        <EditButton basePath="/astrophotographies" />
        <DeleteButton basePath="/astrophotographies" />
      </Datagrid>
    </List>
  );
};

export const PhotoShow = (props) => {
  return (
    <Show {...props} title="Photo Show">
      <SimpleShowLayout>
        <TextField source="title" label="Title" />
        <TextField source="instrumentUsed" label="instrument Used" />
        <TextField source="instrumentSettings" label="Instrument Settings" />
        <RichTextField source="desc" label="Description" />
        <ImageField source="pic" label="Image" />
        <ArrayField source="members">
          <Datagrid>
            <ReferenceField
              label="Name"
              source="user._id"
              reference="users"
              linkType="show"
            >
              <ChipField source="name" />
            </ReferenceField>
            <BooleanField source="accepted" />
            <BooleanField source="leader" />
          </Datagrid>
        </ArrayField>
        <ArrayField source="tags" label="Tags">
          <SingleFieldList>
            <ReferenceField source="_id" reference="tags" linkType="show">
              <ChipField source="name" />
            </ReferenceField>
          </SingleFieldList>
        </ArrayField>
        <DateField source="issuedon" label="Issued On" />
        <BooleanField source="approved" />
      </SimpleShowLayout>
    </Show>
  );
};

export const PhotoCreate = (props) => {
  return (
    <Create title="Create Photo" {...props}>
      <SimpleForm redirect="/astrophotographies">
        <TextInput source="pic" label="Image Link" validate={required()} />
        <TextInput
          source="instrumentUsed"
          label="instrument Used"
          validate={required()}
        />
        <TextInput
          source="instrumentSettings"
          label="Instrument Settings"
          validate={required()}
        />
        <TextInput source="title" validate={required()} label="Title" />
        <RichTextQuill source="desc" label="Description" />
        <ArrayInput source="members">
          <SimpleFormIterator>
            <ReferenceInput label="User" source="user._id" reference="users">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <BooleanInput source="accepted" label="Accepted" />
            <BooleanInput source="leader" label="Leader" />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="tags">
          <SimpleFormIterator>
            <ReferenceInput label="Tag" reference="tags">
              <SelectInput optionText="name" />
            </ReferenceInput>
          </SimpleFormIterator>
        </ArrayInput>
        <DateInput source="issuedon" label="Issued On" validate={required()} defaultValue={Date.now()} />
        <BooleanInput source="approved" />
      </SimpleForm>
    </Create>
  );
};
export const PhotoEdit = (props) => {
  return (
    <Edit title="Edit Photo" {...props}>
      <SimpleForm redirect="/astrophotographies">
        <TextInput disabled label="Id" source="id" />
        <TextInput source="instrumentUsed" label="instrument Used" />
        <TextInput source="instrumentSettings" label="Instrument Settings" />
        <TextInput source="title" validate={required()} label="Title" />
        <RichTextQuill source="desc" label="Description" />
        <TextInput source="pic" label="Image Link" validate={required()} />
        <ArrayInput source="members">
          <SimpleFormIterator>
            <ReferenceInput label="User" source="user._id" reference="users">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <BooleanInput source="accepted" label="Accepted" />
            <BooleanInput source="leader" label="Leader" />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="tags">
          <SimpleFormIterator>
            <ReferenceInput label="Tag" source="_id" reference="tags">
              <SelectInput optionText="name" />
            </ReferenceInput>
          </SimpleFormIterator>
        </ArrayInput>
        <DateInput source="issuedon" label="Issued On" validate={required()} />
        <BooleanInput source="approved" />
      </SimpleForm>
    </Edit>
  );
};
