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

import RichTextInput from "ra-input-rich-text";

export const NewsList = (props) => {
    return (
        <List {...props}>
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
                <TextInput source="title" label="Title" />
                <RichTextInput source="body" label="Body"
                    toolbar={[['bold', 'italic', 'underline', 'strike'],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'font': [] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    ['blockquote', 'code-block'],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'align': [] }],
                    ['image'],
                    ['clean']]} />
                <DateInput
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
                <RichTextInput source="body" label="Body" validate={required()}
                    toolbar={[['bold', 'italic', 'underline', 'strike'],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'font': [] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    ['blockquote', 'code-block'],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'align': [] }],
                    ['link', 'image', 'video'],
                    ['clean']]}
                />
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
