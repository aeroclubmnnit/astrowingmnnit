import React from "react";
import {
  BooleanField,
  BooleanInput,
  ChipField,
  Create,
  Datagrid,
  DateField,
  DateInput,
  DeleteButton,
  Edit,
  EditButton,
  ImageField,
  List,
  ReferenceField,
  ReferenceInput,
  required,
  RichTextField,
  SelectInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import ImageResize from 'quill-image-resize'

export const BlogList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField
          label="Posted By"
          source="postedBy"
          reference="users"
          linkType="show"
        >
          <ChipField source="name" />
        </ReferenceField>
        <DateField source="publishedAt" label="Published On" />
        <BooleanField source="accepted" />
        <ShowButton basePath="/blogs" />
        <EditButton basePath="/blogs" />
        <DeleteButton basePath="/blogs" />
      </Datagrid>
    </List>
  );
};

export const BlogCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/blogs">
        <TextInput source="title" label="Title" validate={required()} />
        <TextInput source="pic" label="Image Link" />
        <RichTextInput
          source="body"
          label="Body"
          options={{
            modules: {
              "imageResize": ImageResize,
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
              ]
            },
          }}
          validate={required()}
        />
        <ReferenceInput label="Posted By" source="postedBy" reference="users">
          <SelectInput optionText="email" />
        </ReferenceInput>
        <DateInput
          source="publishedAt"
          label="Published At"
          defaultValue={new Date()}
        />
        <BooleanInput source="accepted" />
        <ReferenceInput label="Accepted By" source="acceptedBy" reference="users">
          <SelectInput optionText="email" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const BlogShow = (props) => {
  return (
    <Show {...props} title="Blog Show">
      <SimpleShowLayout>
        <TextField source="title" label="Title" />
        <ImageField source="pic" label="Image" />
        <RichTextField source="body" label="Body" />
        <ReferenceField
          label="Posted By"
          source="postedBy"
          reference="users"
          linkType="show"
        >
          <ChipField source="name" />
        </ReferenceField>
        <BooleanField source="accepted" />
        <ReferenceField
          label="Accepted By"
          source="acceptedBy"
          reference="users"
          linkType="show"
        >
          <ChipField source="name" />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

export const BlogEdit = (props) => {
  return (
    <Edit title="Edit Blog" {...props}>
      <SimpleForm redirect="/blogs">
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validate={required()} label="Title" />
        <TextInput source="pic" label="Image Link" />
        <RichTextInput
          label="Body"
          source="body"
          validate={required()}
          options={{
            modules: {
              "imageResize": ImageResize,
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
              ]
            },
          }
          }
        />
        <ReferenceInput label="Posted By" source="postedBy" reference="users">
          <SelectInput optionText="email" />
        </ReferenceInput>
        <DateInput
          source="publishedAt"
          label="Published At"
          validate={required()}
        />
        <BooleanInput source="accepted" />
        <ReferenceInput label="Accepted By" source="acceptedBy" reference="users">
          <SelectInput optionText="email" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
