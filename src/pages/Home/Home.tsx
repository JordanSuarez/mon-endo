import React, { useEffect } from "react";

import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import DayInformation from "common/components/DayInformation";
import { Pain } from "common/types/pains";
import { DispatchType } from "common/redux/actions/pains/types";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  getDailyPains: DispatchType;
  pains: Array<Pain>;
  currentDate: string;
};

const Home = ({
  classes,
  getDailyPains,
  pains,
  currentDate,
}: Props): JSX.Element => {
  useEffect(() => {
    getDailyPains(currentDate);
  }, [currentDate, getDailyPains]);
  console.log(currentDate, pains);
  return (
    <Page title="Home">
      <div className={classes.root}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <DayInformation items={pains} />
      </div>
    </Page>
  );
};

export default Home;
