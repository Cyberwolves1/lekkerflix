/* eslint react/prop-types: 0 */
function Card(props) {
  const { title, subtitle, image, onClick } = props;

  return (
    <div
      className="flex flex-col shadow-md justify-between rounded-xl overflow-hidden w-60 h-80 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-50">
        <img
          className="w-full h-full object-cover bg-red-600"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col p-4 gap-2 bg-[#2D2170]">
        <text className="font-semibold text-lg line=clamp-2">{title}</text>
        <text className="font-sm text-gray-400 line-clamp-2">{subtitle}</text>
      </div>
    </div>
  );
}
export default Card;
