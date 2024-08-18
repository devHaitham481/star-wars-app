import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMountain, faRulerVertical, faUser, faIndustry, faWeight } from '@fortawesome/free-solid-svg-icons';

//TODO: add proper types
interface CardProps {
  planet?: any;
  starship?: any;
  person?: any;
}

const Card: React.FC<CardProps> = ({ planet, starship, person }) => {
  const item = planet || starship || person;
  const type = planet ? 'planet' : (starship ? 'starship' : 'person');

  const getMainInfo = () => {
    switch(type) {
      case 'planet':
        return `Rotation period: ${item.rotation_period}`;
      case 'starship':
        return `Model: ${item.model}`;
      case 'person':
        return `Birth year: ${item.birth_year}`;
      default:
        return '';
    }
  };

  const getTagInfo = () => {
    switch(type) {
      case 'planet':
        return [
          { icon: faSun, value: item.climate },
          { icon: faMountain, value: item.terrain },
          { icon: faRulerVertical, value: item.diameter }
        ];
      case 'starship':
        return [
          { icon: faIndustry, value: item.starship_class },
          { icon: faUser, value: item.manufacturer },
          { icon: faRulerVertical, value: item.length }
        ];
      case 'person':
        return [
          { icon: faUser, value: item.gender },
          { icon: faRulerVertical, value: `${item.height} cm` },
          { icon: faWeight, value: `${item.mass} kg` }
        ];
      default:
        return [];
    }
  };

  const getDetailInfo = () => {
    switch(type) {
      case 'planet':
        return [
          { label: 'Population', value: Number(item.population).toLocaleString() },
          { label: 'Orbital Period', value: `${item.orbital_period} days` },
          { label: 'Surface Water', value: item.surface_water !== "unknown" ? `${item.surface_water}%` : "Unknown" },
          { label: 'Gravity', value: item.gravity }
        ];
      case 'starship':
        return [
          { label: 'Crew', value: item.crew },
          { label: 'Passengers', value: item.passengers },
          { label: 'Cargo Capacity', value: Number(item.cargo_capacity).toLocaleString() },
          { label: 'Hyperdrive Rating', value: item.hyperdrive_rating }
        ];
      case 'person':
        return [
          { label: 'Hair Color', value: item.hair_color },
          { label: 'Eye Color', value: item.eye_color },
          { label: 'Skin Color', value: item.skin_color },
          { label: 'Homeworld', value: item.homeworld }
        ];
      default:
        return [];
    }
  };

  const tagInfo = getTagInfo();
  const detailInfo = getDetailInfo();

  return (
    <div className="card shadow-lg h-96 w-full group gap-2 rounded-xl relative flex justify-end flex-col p-6 z-10 overflow-hidden bg-no-repeat bg-cover bg-top bg-[url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg')]">
      <div className="absolute top-0 left-0 h-full w-full"></div>

      <div className="text-white z-20 relative font-nunito flex flex-col gap-2">
        <div className="h-fit w-full">
          <h1 className="text-xl tracking-widest font-extrabold text-transparent stroke-1 stroke-white">
            {item.name.toUpperCase()}
          </h1>
          <p className="text-lg font-extrabold text-transparent stroke-1 stroke-white shadow-white">
            {getMainInfo()}
          </p>
        </div>

        <div className="flex justify-center items-center h-fit w-full gap-2">
          {tagInfo.map((tag, index) => (
            <div key={index} className="border-2 border-white rounded-md text-white font-nunito text-xs font-normal px-4 py-2 hover:bg-white hover:text-black duration-300 cursor-pointer flex items-center">
              <FontAwesomeIcon icon={tag.icon} className="text-white w-4 h-4 mr-2" />
              <p className="flex-grow text-left">{`${tag.value}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="font-nunito text-white relative h-0 group-hover:h-32 duration-500 overflow-hidden">
        <div className="grid grid-cols-2 gap-2 pt-4">
          {detailInfo.map((detail, index) => (
            <div key={index} className="flex flex-col px-4 py-2">
              <span className="text-xs uppercase text-gray-400">{detail.label}</span>
              <span className="text-sm font-semibold">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
