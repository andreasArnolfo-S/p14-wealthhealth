import React, { FC } from 'react';
import styles from './showItems.module.css';

interface ShowItemsProps { }

const ShowItems: FC<ShowItemsProps> = () => (
  <div className='flex items-center gap-3' data-testid="ShowItems">
    <p>Show </p>
    <select className="select select-info w-full max-w-xs">
      <option>10</option>
      <option>25</option>
      <option>50</option>
      <option>100</option>
    </select> 
   <p> entries</p> 
  </div>
);

export default ShowItems;
