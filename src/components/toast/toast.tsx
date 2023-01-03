import React, { FC } from 'react';
import styles from './toast.module.css';

const Toast = ({ onClose }: { onClose: () => void }) => (
  <div className="toast toast-center" onClick={onClose}>
    <div className="alert alert-success">
      <div>
        <span>Employee as been created successfully</span>
      </div>
    </div>
  </div>
);

export default Toast;
