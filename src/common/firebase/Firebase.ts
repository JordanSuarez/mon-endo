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
  public getDatabaseRef = (
    isUserRessource = true
  ): firebase.database.Reference =>
    firebase
      .database()
      .ref(
        isUserRessource ? `${this.ressource}/${this.userId}` : this.ressource
      );

  /**
   *
   */
  public getDataSnapshot = (
    isUserRessource: boolean
  ): Promise<firebase.database.DataSnapshot> =>
    this.getDatabaseRef(isUserRessource).once("value", (snap) => snap);

  /**
   *
   * @param date
   */
  public getFilteredDataSnapshotByDate = async (
    date: string
  ): Promise<firebase.database.DataSnapshot> => {
    const currentDate = format(new Date(date), fullDateWIthShortDay);
    const startDate = new Date(`${currentDate} 00:00:00`).toString();
    const endDate = new Date(`${currentDate} 23:59:59`).toString();
    return this.getDatabaseRef()
      .orderByChild("date")
      .startAt(startDate)
      .endAt(endDate)
      .once("value", (snap) => snap);
  };

  /**
   *
   * @param values
   */
  public create = async <T>(
    values: T
  ): Promise<firebase.database.Reference> => {
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
  public edit = async <T>(
    values: T & { id: string }
  ): Promise<firebase.database.Reference> =>
    this.getDatabaseRef().child(values.id).update(values);
}
