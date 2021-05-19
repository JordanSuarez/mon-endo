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
};

const Home = ({ classes, getDailyPains, pains }: Props): JSX.Element => {
  useEffect(() => {
    getDailyPains();
  }, [getDailyPains]);
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
