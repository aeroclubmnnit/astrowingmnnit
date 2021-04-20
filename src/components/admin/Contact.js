import React from "react";
import {
    Datagrid,
    DeleteButton,
    List,
    RichTextField,
    Show,
    ShowButton,
    SimpleShowLayout,
    TextField,
} from "react-admin";

export const ContactList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="subject" />
                <ShowButton basePath='/contact' />
                <DeleteButton basePath="/contact" />
            </Datagrid>
        </List>
    );
};

export const ContactShow = (props) => {
    return (
        <Show {...props} title="Contact Show">
            <SimpleShowLayout>
                <TextField source="name" label="Name" />
                <TextField source="email" label="Email" />
                <TextField source="subject" label="Subject" />
                <RichTextField source="body" label="Body" />
            </SimpleShowLayout>
        </Show>
    );
};