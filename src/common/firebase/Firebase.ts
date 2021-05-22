import firebase from "firebase/app";
import { format } from "date-fns";
import { fullDateWIthShortDay } from "common/helpers/date";

// TODO Add doc for all methods and type method's args
export default class Firebase {
  readonly userId: string;

  readonly ressource: string;

  constructor(userId: string, ressource: string) {
    this.userId = userId;
    this.ressource = ressource;
  }

  /**
   *
   */
  public getDatabaseRef = (): firebase.database.Reference =>
    firebase.database().ref(`${this.ressource}/${this.userId}`);

  /**
   *
   */
  public getDataSnapshot = (): Promise<firebase.database.DataSnapshot> =>
    this.getDatabaseRef().once("value", (snap) => snap);

  /**
   *
   * @param date
   */
  public getFilteredDataSnapshotByDate = async (
    date: string
  ): Promise<firebase.database.DataSnapshot> => {
    const startDate = format(new Date(date), fullDateWIthShortDay);
    const endDate = new Date(`${startDate} 23:59:59`).toString();
    return this.getDatabaseRef()
      .orderByChild("date")
      .startAt(startDate)
      .endBefore(endDate)
      .once("value", (snap) => snap);
  };

  /**
   *
   * @param values
   */
  public create = async (values: any): Promise<firebase.database.Reference> => {
    return this.getDatabaseRef().push(values);
  };

  /**
   *
   * @param id
   */
  public remove = async (id: string): Promise<firebase.database.Reference> =>
    this.getDatabaseRef().child(id).remove();

  /**
   *
   * @param values
   */
  public edit = async (values: any): Promise<firebase.database.Reference> =>
    this.getDatabaseRef().child(values.id).update(values);
}