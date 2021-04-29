import React from "react";
import {
    BooleanField,
    BooleanInput,
    Create,
    Datagrid,
    DateField,
    DateInput,
    DeleteButton,
    Edit,
    EditButton,
    List,
    required,
    RichTextField,
    Show,
    ShowButton,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
} from "react-admin";
import RichTextQuill from "./RichTextQuill";

export const NewsList = (props) => {
    return (
        <List {...props} bulkActionButtons={false}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <BooleanField source="private" />
                <DateField source="publishedAt" label="Published At" />
                <ShowButton basePath='/news' />
                <EditButton basePath="/news" />
                <DeleteButton basePath="/news" />
            </Datagrid>
        </List>
    );
};

export const NewsCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm redirect="/news">
                <TextInput source="title" label="Title" validate={required()} />
                <RichTextQuill source="body" label="Body" />
                <DateInput
                    validate={required()}
                    source="publishedAt"
                    label="Published At"
                    defaultValue={new Date()}
                />
                <BooleanInput source="private" />
            </SimpleForm>
        </Create>
    );
};

export const NewsShow = (props) => {
    return (
        <Show {...props} title="News Show">
            <SimpleShowLayout>
                <TextField source="title" label="Title" />
                <RichTextField source="body" label="Body" />
                <DateField source="publishedAt" label="Published At" />
                <BooleanField source="private" />
            </SimpleShowLayout>
        </Show>
    );
};

export const NewsEdit = (props) => {
    return (
        <Edit title="Edit Blog" {...props}>
            <SimpleForm redirect="/news">
                <TextInput disabled label="Id" source="id" />
                <TextInput source="title" validate={required()} label="Title" />
                <RichTextQuill source="body" label="Body" />
                <BooleanInput source="private" />
                <DateInput
                    source="publishedAt"
                    label="Published At"
                    validate={required()}
                />
            </SimpleForm>
        </Edit>
    );
};
