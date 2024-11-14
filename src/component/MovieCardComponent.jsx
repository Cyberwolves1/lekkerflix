import PropTypes from 'prop-types';

function MovieCardComponent({ imagePath, title, date }) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });

    return (
        <div className="w-[248px] h-[369px] rounded-[10px] overflow-hidden flex flex-col bg-[#2D2170] text-white font-roboto">
            <div className="h-[90%] w-full overflow-hidden">
                <img src={imagePath} alt={title} className="h-full w-full object-" />
            </div>
            <div className="p-2.5">
                <h1 className="text-[20px] m-0">{title}</h1>
                <p className="text-[14px] m-0">{formattedDate}</p>
            </div>
        </div>
    );
}

MovieCardComponent.propTypes = {
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default MovieCardComponent;