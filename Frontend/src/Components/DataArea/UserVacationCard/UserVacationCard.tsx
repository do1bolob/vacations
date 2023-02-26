import VacationModel from "../../../Models/VacationModel";
import vacationService from "../../../Services/VacationService";
import notify from "../../../Utils/Notify";
import "./UserVacationCard.css";

interface UserVacationCard {
  vacation: VacationModel;
}
function UserVacationCard(props: UserVacationCard): JSX.Element {
  function isFollowing(isFollowing: number): boolean {
    return isFollowing === 1 ? true : false;
  }

  async function follow(vacationId: number): Promise<void> {
    try {
      await vacationService.follow(vacationId);
    } catch (err: any) {
      notify.error(err);
    }
  }
  async function unfollow(vacationId: number): Promise<void> {
    try {
      await vacationService.unfollow(vacationId);
    } catch (err: any) {
      notify.error(err);
    }
  }

  function formatTime(time: string): string {
    const d = new Date(time);
    return d.toLocaleDateString("he-IL");
  }

  return (
    <div className="UserVacationCard">
      <div>
        {isFollowing(props.vacation.isFollowing) ? (
          <button
            className="unfollow"
            onClick={() => unfollow(props.vacation.vacationId)}
          >
            Following ({props.vacation.followersCount})
          </button>
        ) : (
          <button
            className="follow"
            onClick={() => follow(props.vacation.vacationId)}
          >
            + Follow ({props.vacation.followersCount})
          </button>
        )}
        <br />
      </div>

      <img src={props.vacation.imageUrl} />
      <div className="destination">{props.vacation.destination}</div>
      <div className="date">
        🗓️{formatTime(props.vacation.startDate)} —
        {formatTime(props.vacation.endDate)}
      </div>
      <div className="description">{props.vacation.description}</div>
      <div className="price">{props.vacation.price}$</div>
    </div>
  );
}

export default UserVacationCard;
