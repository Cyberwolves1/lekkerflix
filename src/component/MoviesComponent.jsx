import PropTypes from 'prop-types';
import { PiInfoBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

function MoviesComponent({
                            image,
                            title,
                            rating,
                            type, // 'movie' or 'series'
                            rolesPlayed,
                            yearOfProduction,
                            numberOfEpisodes,
                            length
                        }) {
    return (
        <div className="movie-component w-[1063px] h-[159px] flex items-center">
            <img src={image} alt={title} className="movie-image w-[88px] h-[124px] rounded-[10px]"/>
            <div className="ml-4 flex-1 flex flex-col justify-between h-[124px]">
                <h1 className="font-roboto font-bold text-[32px]">{title}</h1>
                <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-2" size={25} />
                    <p className="text-[24px] mr-6">{rating}</p>
                    <p className="text-[24px]">{type}</p>
                </div>
                <p className="text-[24px]">{rolesPlayed}</p>
            </div>
            <div className="text-right flex items-center">
                <div>
                    <p className="text-[24px]">{yearOfProduction}</p>
                    {type === 'series' ? (
                        <p className="text-[24px]">{numberOfEpisodes}</p>
                    ) : (
                        <p className="text-[24px]">{length}</p>
                    )}
                </div>
                <button className="ml-4">
                    <PiInfoBold size='40px'/>
                </button>
            </div>
        </div>
    );
}

MoviesComponent.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['movie', 'series']).isRequired,
    rolesPlayed: PropTypes.string.isRequired,
    yearOfProduction: PropTypes.number.isRequired,
    numberOfEpisodes: PropTypes.number,
    length: PropTypes.string
};

export default MoviesComponent;