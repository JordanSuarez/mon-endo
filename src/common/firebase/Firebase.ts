import firebase from "firebase/app";

export default class Firebase {
  readonly userId: string;

  readonly ressource: string;

  constructor(userId: string, ressource: string) {
    this.userId = userId;
    this.ressource = ressource;
  }

  public getDatabaseRef = (): firebase.database.Reference =>
    firebase.database().ref(`${this.ressource}/${this.userId}`);

  public getDataSnapshot = (): Promise<firebase.database.DataSnapshot> =>
    this.getDatabaseRef().once("value", (snap) => snap);

  public create = async (values: any): Promise<firebase.database.Reference> => {
    return this.getDatabaseRef().push(values);
  };

  public remove = async (id: string): Promise<firebase.database.Reference> =>
    this.getDatabaseRef().child(id).remove();

  public edit = async (values: any): Promise<firebase.database.Reference> =>
    this.getDatabaseRef().child(values.id).update(values);
}
