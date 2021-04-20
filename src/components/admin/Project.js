import React from "react";
import {
  ArrayField,
  ArrayInput,
  SimpleFormIterator,
  Create,
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

import RichTextInput from "ra-input-rich-text";
import ImageResize from "quill-image-resize";
import TextArrayField from "./TextArrayField";

export const ProjectList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="issuedon" label="Issued On" />
        <TextField source="status" />
        <BooleanField source="approved" />
        <BooleanField source="featured" />
        <ShowButton basePath="/projects" />
        <EditButton basePath="/projects" />
        <DeleteButton basePath="/projects" />
      </Datagrid>
    </List>
  );
};

export const ProjectCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/projects">
        <TextInput source="title" label="Project Name" />
        <TextInput label="Objective" validate={required()} source="objective" />
        <RichTextInput
          source="overview"
          label="Overview"
          options={{
            modules: {
              imageResize: ImageResize,
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ font: [] }],
                [{ color: [] }, { background: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                ["blockquote", "code-block"],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: "rtl" }],
                [{ align: [] }],
                ["link", "image", "video"],
                ["clean"],
              ],
            },
          }}
        />
        <RichTextInput
          source="description"
          label="Description"
          options={{
            modules: {
              imageResize: ImageResize,
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ font: [] }],
                [{ color: [] }, { background: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                ["blockquote", "code-block"],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: "rtl" }],
                [{ align: [] }],
                ["link", "image", "video"],
                ["clean"],
              ],
            },
          }}
        />

        <TextInput source="pic" label="Image Link" />
        <SelectInput
          source="status"
          choices={[
            { id: "Ongoing", name: "Ongoing" },
            { id: "Completed", name: "Completed" },
          ]}
        />
        <ArrayInput source="members">
          <SimpleFormIterator>
            <ReferenceInput label="User" source="user" reference="users">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <BooleanInput source="accepted" label="Accepted" />
            <BooleanInput source="leader" label="Leader" />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="compTech" label="Components and technologies used">
          <SimpleFormIterator>
            <TextInput label="" />
          </SimpleFormIterator>
        </ArrayInput>
        <DateInput
          source="issuedon"
          label="Issued On"
          defaultValue={new Date()}
        />
        <TextInput source="ytID" label="Youtube Embed ID" />
        <BooleanInput source="featured" label="Featured" />
        <BooleanInput source="home" />
        <BooleanInput source="approved" />
      </SimpleForm>
    </Create>
  );
};

export const ProjectShow = (props) => {
  return (
    <Show {...props} title="Project Show">
      <SimpleShowLayout>
        <TextField source="title" label="Project Name" />
        <TextField source="objective" label="Objective" />
        <RichTextField source="overview" label="Overview" />
        <RichTextField source="description" label="Description" />
        <ImageField source="pic" label="Image" />
        <TextField source="status" label="Status" />
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
        <DateField source="issuedon" label="Issued On" />
        <BooleanField source="featured" label="Featured" />
        <TextArrayField source='compTech' label='Components and Technologies used'>
          <SingleFieldList>
            <ChipField source='id' />
          </SingleFieldList>
        </TextArrayField>
        <BooleanField source="home" />
        <BooleanField source="approved" />
      </SimpleShowLayout>
    </Show>
  );
};

export const ProjectEdit = (props) => {
  return (
    <Edit title="Edit Project" {...props}>
      <SimpleForm redirect="/projects">
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validate={required()} label="Project Name" />
        <TextInput label="Objective" validate={required()} source="objective" />
        <RichTextInput
          source="overview"
          label="Overview"
          options={{
            modules: {
              imageResize: ImageResize,
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ font: [] }],
                [{ color: [] }, { background: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                ["blockquote", "code-block"],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: "rtl" }],
                [{ align: [] }],
                ["link", "image", "video"],
                ["clean"],
              ],
            },
          }}
        />
        <RichTextInput
          source="description"
          validate={required()}
          label="Description"
          modules={{
            imageResize: {
              displaySize: true,
            },
          }}
          options={{
            modules: {
              imageResize: ImageResize,
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ font: [] }],
                [{ color: [] }, { background: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                ["blockquote", "code-block"],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: "rtl" }],
                [{ align: [] }],
                ["link", "image", "video"],
                ["clean"],
              ],
            },
          }}
        />
        <TextInput source="pic" label="Image Link" />
        <ArrayInput source="members">
          <SimpleFormIterator>
            <ReferenceInput label="User" source="user._id" reference="users">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <BooleanInput source="accepted" label="Accepted" />
            <BooleanInput source="leader" label="Leader" />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="compTech" label="Components and technologies used">
          <SimpleFormIterator>
            <TextInput label="" />
          </SimpleFormIterator>
        </ArrayInput>
        <DateInput source="issuedon" label="Issued On" validate={required()} />
        <TextInput source="ytID" label="Youtube Embed ID" />
        <BooleanInput source="featured" label="Featured" />
        <BooleanInput source="home" />
        <BooleanInput source="approved" />
        <SelectInput
          source="status"
          choices={[
            { id: "Ongoing", name: "Ongoing" },
            { id: "Completed", name: "Completed" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};
