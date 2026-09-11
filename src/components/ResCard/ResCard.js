
import { CDN_URL } from '../../utils/constants'

const ResCard = (props) => {
  const { resData } = props;
  const {name, cuisines, avgRating, sla, cloudinaryImageId} = resData;
    return (
      <div className="m-4 p-4 w-[250] bg-gray-100 border-0 rounded-lg flex flex-col gap-1 flex-wrap hover:bg-gray-400 border-s-olive-50">
        <img
          className="w-60 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="res-card"
        />
        <h3 className="font-bold">{name}</h3>
        <h5 className='break-all'>{cuisines}</h5>
        <h6>{avgRating}</h6>
        <h6>{sla.deliveryTime}{"MINS"}</h6>
      </div>
    )
};

export default ResCard;