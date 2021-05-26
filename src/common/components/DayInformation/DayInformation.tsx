import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { get } from "lodash";
import {
  List,
  ListItem,
  Divider,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";

import { DELETE, UPDATE } from "common/constants/context";
import IconButton from "common/components/IconButton";
import { FormContext } from "common/context";
import { StylesInterface } from "./styles";
import locale from "./config/locale";

export type Props<T> = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  items: T[];
  emptyText: string;
  formChildren: JSX.Element;
  generateChildrenItem: (item: T) => JSX.Element;
  selectedItemList: T;
  handleClick: (item: T, action: string) => void;
};

const DayInformation = <T,>({
  classes,
  items,
  formChildren,
  generateChildrenItem,
  selectedItemList,
  handleClick,
  emptyText,
}: Props<T>): JSX.Element => {
  return items.length > 0 ? (
    <List dense={false} className={classes.list}>
      {items.map((item, index: number) => (
        <div key={get(item, "id", "")}>
          <Divider className={classes.divider} />
          <ListItem className={classes.listItem}>
            {get(selectedItemList, "id", "") !== get(item, "id", "") ? (
              <>
                <ListItemText
                  secondary={locale.listItem.date.label(get(item, "date", ""))}
                  className={classes.listItemText}
                >
                  {generateChildrenItem(item)}
                </ListItemText>
                <ListItemSecondaryAction className={classes.iconsContainer}>
                  <IconButton
                    title={locale.button.edit.label}
                    className={classes.editIcon}
                    onClick={() => handleClick(items[index], UPDATE)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    title={locale.button.delete.label}
                    className={classes.deleteIcon}
                    onClick={() => handleClick(items[index], DELETE)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </>
            ) : (
              <div className={classes.form}>
                <FormContext.Provider value={UPDATE}>
                  {formChildren}
                </FormContext.Provider>
              </div>
            )}
          </ListItem>
        </div>
      ))}
    </List>
  ) : (
    <p className={classes.text}>{emptyText}</p>
  );
};

export default DayInformation;
