import s from './Loader.module.css';

export const Loader = () => <div className={s.loader} />;

/////////////////////////////////////////////

// export const Loader = () => {
//   console.log('Loader is rendering');
//   return <div className="loader">Loading...</div>;
// };

////////////////////////////////

// import React from 'react';
// import s from './Loader.module.css';

// export const Loader = React.memo(() => {
//   console.log('Loader is rendering');
//   return <div className={s.loader} />;
// });
