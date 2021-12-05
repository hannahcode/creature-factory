import "./GalleryItem.scss";
import { Heads } from "../../components/Heads";
import { Bodies } from "../../components/Bodies";
import { Legs } from "../../components/Legs";
import upvote from "../../assets/icons/expand_less_black_24dp.svg";
import downvote from "../../assets/icons/expand_more_black_24dp.svg";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function GalleryItem({
  creature,
  handleDownvote,
  handleUpvote,
}) {
  const printRef = useRef();
  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "creature.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div key={creature.id} className="gallery__creature">
      <div className="gallery__print-container" ref={printRef}>
        <h2 className="gallery__creature-title">{creature.name}</h2>
        <svg width="133.33" height="233.33">
          <g transform="scale(.66)">
            {Legs[creature.legs]}
            {Bodies[creature.body]}
            {Heads[creature.head]}
          </g>
        </svg>
      </div>
      <button
        type="button"
        className="gallery__download-button"
        onClick={handleDownloadImage}
      >
        Download Creature
      </button>
      <div className="gallery__creature-likes-container">
        <img
          src={upvote}
          alt="up arrow to increase likes"
          className="gallery__creature-upvote"
          onClick={() => handleDownvote(creature.id)}
          id={creature.id}
        />
        <p className="gallery__creature-likes">{creature.likes}</p>
        <img
          src={downvote}
          alt="down arrow to decrease likes"
          className="gallery__creature-downvote"
          onClick={() => handleUpvote(creature.id)}
          id={creature.id}
        />
      </div>
    </div>
  );
}
