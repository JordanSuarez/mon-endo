import React, { useRef, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import DayInformation from "common/components/DayInformation";
import { DayInformationInterface } from "common/types/dayInformation";

import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
};

const Home = ({ classes }: Props): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<JSX.Element>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const items = [
    { id: 2, label: "Lorem ipsum dolor sit amet", date: "A 8h00" },
    {
      id: 1,
      label:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ameLorem ipsum dolor sit amet, Lorem ipsum dolor sit ameLorem ipsum dolor sit amet, Lorem ipsum dolor sit ame",
      date: "A 8h00",
    },
    { id: 3, label: "Lorem ipsum dolor sit amet", date: "A 8h00" },
    { id: 4, label: "Lorem ipsum dolor sit amet", date: "A 8h00" },
    { id: 5, label: "Lorem ipsum dolor sit amet", date: "A 8h00" },
    { id: 6, label: "Lorem ipsum dolor sit amet", date: "A 8h00" },
    { id: 7, label: "Lorem ipsum dolor sit amet", date: "A 8h00" },
  ] as Array<DayInformationInterface>;

  return (
    <Page
      title="Home"
      drawerRef={drawerRef}
      toggleDrawer={toggleDrawer}
      isOpen={isDrawerOpen}
    >
      <div className={classes.root}>
        <DayInformation items={items} toggleDrawer={toggleDrawer} />
      </div>
    </Page>
  );
};

export default Home;
