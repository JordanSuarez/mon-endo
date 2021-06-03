import React, { useState, ChangeEvent } from "react";

import { ClassNameMap } from "@material-ui/styles";
import { AppBar as MUIAppBar, Tab, Tabs } from "@material-ui/core";

import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  className: string | undefined;
  tabs: { id: string; label: string }[];
  components: { id: string; component: JSX.Element }[];
};

const AppBar = ({
  classes,
  tabs,
  components,
  className,
}: Props): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <MUIAppBar position="sticky" className={className}>
      <Tabs
        value={value}
        onChange={(event: ChangeEvent<any>, newValue: number) =>
          handleChange(newValue)
        }
        centered
      >
        {tabs.map(({ id, label }) => (
          <Tab label={label} key={id} />
        ))}
      </Tabs>
      {components.map(({ id, component }, index) => (
        <div
          key={id}
          role="tabpanel"
          hidden={value !== index}
          className={classes.tabPanel}
        >
          {component}
        </div>
      ))}
    </MUIAppBar>
  );
};

export default AppBar;
