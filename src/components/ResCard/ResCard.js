
import { CDN_URL } from '../../utils/constants'

const ResCard = (props) => {
  const { resData } = props;
  const {name, cuisines, avgRating, sla, cloudinaryImageId} = resData;
    return (
      <div className="res-card">
        <img
          className="res-card-image"
          src={CDN_URL + cloudinaryImageId}
          alt="res-card"
        />
        <h3 className="res-name">{name}</h3>
        <h5>{cuisines}</h5>
        <h6>{avgRating}</h6>
        <h6>{sla.deliveryTime}{"MINS"}</h6>
      </div>
    )
};

export default ResCard;