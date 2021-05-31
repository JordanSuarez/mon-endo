export type Styles = {
  [key: string]: {
    [key: string]:
      | string
      | {
          [key: string]:
            | string
            | {
                [key: string]: string;
              };
        };
  };
};
