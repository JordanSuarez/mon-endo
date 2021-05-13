export type Locale = {
  title: string;
  form: {
    title: string;
    field: {
      email: {
        label: string;
        name: string;
        invalid: string;
      };
      password: {
        label: string;
        name: string;
      };
      required: string;
      minLength: (arg: string) => string;
      maxLength: (arg: string) => string;
    };
    button: {
      submit: {
        label: string;
      };
    };
    link: {
      text: string;
      span: string;
    };
  };
};
