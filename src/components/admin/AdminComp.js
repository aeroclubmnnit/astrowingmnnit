import React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import { BlogCreate, BlogEdit, BlogList, BlogShow } from "./Blog";
import {
  ComponentCreate,
  ComponentEdit,
  ComponentList,
  ComponentShow,
} from "./Component";
import { IssueEdit, IssueList } from "./Issues";
import { REACT_APP_BASE_TITLE } from "../../grobalVars";

import {
  ProjectCreate,
  ProjectEdit,
  ProjectList,
  ProjectShow,
} from "./Project";
import { ContactList, ContactShow } from "./Contact";
import {
  AchievementList,
  AchievementCreate,
  AchievementEdit,
  AchievementShow,
} from "./Achievement";
import { NewsCreate, NewsEdit, NewsList, NewsShow } from "./News";
import {
  WorkshopCreate,
  WorkshopEdit,
  WorkshopList,
  WorkshopShow,
} from "./Workshop";
import { UserList, UserShow, UserEdit, UserCreate } from "./Users";
import { useSelector } from "react-redux";
import { dataProvider } from "./dataProvider";
import { history } from "../../ConfigureStore";
import {
  PhotoCreate,
  PhotoEdit,
  PhotoList,
  PhotoShow,
} from "./Astrophotography";
import { TagCreate, TagEdit, TagList, TagShow } from "./Tag";

function AdminComp() {
  document.title = `Admin Panel | ${REACT_APP_BASE_TITLE}`;

  const user = useSelector((state) => state.user);
  return (
    <>
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        history={history}
      >
        <Resource
          name="users"
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
          show={UserShow}
        />
        <Resource
          name="projects"
          list={ProjectList}
          create={ProjectCreate}
          edit={ProjectEdit}
          show={ProjectShow}
        />
        <Resource
          name="blogs"
          list={BlogList}
          create={BlogCreate}
          edit={BlogEdit}
          show={BlogShow}
        />
        <Resource
          name="astrophotographies"
          list={PhotoList}
          show={PhotoShow}
          edit={PhotoEdit}
          create={PhotoCreate}
        />
        <Resource
          name="achievement"
          list={AchievementList}
          create={AchievementCreate}
          edit={AchievementEdit}
          show={AchievementShow}
        />
        <Resource name="issue" list={IssueList} edit={IssueEdit} />
        <Resource
          name="component"
          list={ComponentList}
          create={ComponentCreate}
          edit={ComponentEdit}
          show={ComponentShow}
        />
        <Resource
          name="news"
          list={NewsList}
          create={NewsCreate}
          edit={NewsEdit}
          show={NewsShow}
        />
        <Resource
          name="workshop"
          list={WorkshopList}
          create={WorkshopCreate}
          edit={WorkshopEdit}
          show={WorkshopShow}
        />
        <Resource name="Contact" list={ContactList} show={ContactShow} />
        <Resource
          name="tags"
          list={TagList}
          create={TagCreate}
          edit={TagEdit}
          show={TagShow}
        />
      </Admin>
    </>
  );
}

export default AdminComp;
