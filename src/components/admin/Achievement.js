import {
  ArrayInput,
  Create,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  SimpleForm,
  TextField,
  TextInput,
  SimpleFormIterator,
  DateInput,
  Edit,
  Show,
  SimpleShowLayout,
  ArrayField,
  NumberInput,
  NumberField,
  RichTextField,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

export const AchievementList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <RichTextField source="desc" />
        <NumberField source="year" label="Year" />
        <ShowButton basePath="/achievement" />
        <EditButton basePath="/achievement" />
        <DeleteButton basePath="/achievement" />
      </Datagrid>
    </List>
  );
};

export const AchievementCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/achievement">
        <RichTextInput
          source="desc"
          label="Description"
          toolbar={[
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
            ["image"],
            ["clean"],
          ]}
        />
        <ArrayInput source="team" label="Team">
          <SimpleFormIterator>
            <TextInput source="name" label="Member Name" />
            <TextInput source='lurl' label='Linkedin URL' />
          </SimpleFormIterator>
        </ArrayInput>
        <DateInput source="date" label="Date" required={true} defaultValue={new Date()} />
      </SimpleForm>
    </Create>
  );
};

export const AchievementEdit = (props) => {
  return (
    <Edit title="Edit Project" {...props}>
      <SimpleForm redirect="/achievement">
        <RichTextInput
          source="desc"
          label="Description"
          toolbar={[
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
            ["image"],
            ["clean"],
          ]}
        />
        <ArrayInput source="team" label="Team">
          <SimpleFormIterator>
            <TextInput source="name" label="Member Name" />
            <TextInput source='lurl' label='Linkedin URL' />
          </SimpleFormIterator>
        </ArrayInput>
        <DateInput source="date" label="Date" required={true} defaultValue={new Date()} />
      </SimpleForm>
    </Edit>
  );
};

export const AchievementShow = (props) => {
  return (
    <Show {...props} title="Achievement Show">
      <SimpleShowLayout>
        <RichTextField source="desc" label="Description" />
        <ArrayField source="team" label="Team">
          <Datagrid>
            <TextField source="name" label='Member Name' />
            <TextField source='lurl' label='Linkedin URL' />
          </Datagrid>
        </ArrayField>
        <DateField source="date" label="Date" />
      </SimpleShowLayout>
    </Show>
  );
};
