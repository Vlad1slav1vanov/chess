import React, { FC } from "react";
import { Figure } from "../../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFiguresComponent: FC<LostFiguresProps> = ({title, figures}) => {
  return (
    <div className="lost-figures">
      <h3>{title}</h3>
      {figures.map(figure => 
        <div key={figure.id}>
          {figure.name} 
          {figure.logo && <img src={figure.logo} width="20" height="20" alt="" />}
        </div>  
      )}
    </div>
  )
}

export default LostFiguresComponent;