import React from 'react'
import { Module } from '../../Types'
import ModuleCard from './ModuleCard.tsx';
import '../css/ModuleGroup.css';
import { calculateScore } from '../../scripts/Utils.ts';

interface Props {
  groupTitle: string,
  groupModule: Module[],
  modalSetter: React.Dispatch<React.SetStateAction<Module | undefined>>
}

const ModuleGroup = ({groupTitle, groupModule, modalSetter} : Props) => {
  const moduleCards = groupModule.map(module =>
      <ModuleCard module={module} modalSetter={modalSetter}/>
  );

  return <div className='module-group'>
    <h2 style={{userSelect: 'none', marginBottom: '0.5em'}}>{groupTitle}</h2>
    <div className='moduleCards-container'>{moduleCards}</div>
    <div className='group-summary'>{calculateScore(groupModule)}</div>
  </div>;
}

export default ModuleGroup;