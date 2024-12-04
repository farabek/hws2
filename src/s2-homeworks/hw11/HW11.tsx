// import React, { useState } from 'react';
// import s from './HW11.module.css';
// import s2 from '../../s1-main/App.module.css';
// import { restoreState, saveState } from '../hw06/localStorage/localStorage';
// import SuperRange from './common/c7-SuperRange/SuperRange';

// /*
//  * 1 - передать значения в оба слайдера
//  * 2 - дописать типы и логику функции change
//  * 3 - сделать стили в соответствии с дизайном
//  * */

// function HW11() {
//   // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
//   const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0));
//   const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100));

//   //   const change = (event: any, value: any) => {
//   //     // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
//   //     if (Array.isArray(value)) {
//   //       setValue1(value[0]);
//   //       setValue2(value[1]);

//   //       return;
//   //     }

//   //     setValue1(value);
//   //   };

//   //   const change = (event: any, value: any) => {
//   //     if (Array.isArray(value)) {
//   //       setValue1(value[0]);
//   //       setValue2(value[1]);

//   //       // Сохранение в localStorage
//   //       saveState('hw11-value1', value[0]);
//   //       saveState('hw11-value2', value[1]);

//   //       return;
//   //     }

//   //     setValue1(value);

//   //     // Сохранение в localStorage
//   //     saveState('hw11-value1', value);
//   //   };

//   //   const change = (event: any, value: any) => {
//   //     if (Array.isArray(value)) {
//   //       setValue1(value[0]);
//   //       setValue2(value[1]); // обновляем локальное состояние

//   //       // Сохраняем оба значения в localStorage
//   //       saveState('hw11-value1', value[0]);
//   //       saveState('hw11-value2', value[1]);
//   //     } else {
//   //       setValue1(value);
//   //       saveState('hw11-value1', value); // сохраняем одиночное значение
//   //     }
//   //   };

//   //   const change = (event: any, value: any) => {
//   //     if (Array.isArray(value)) {
//   //       setValue1(value[0]);
//   //       setValue2(value[1]); // Обновляем состояние

//   //       // Сохраняем оба значения в localStorage
//   //       saveState('hw11-value1', value[0]);
//   //       saveState('hw11-value2', value[1]);
//   //     } else {
//   //       setValue1(value); // Обновляем состояние
//   //       saveState('hw11-value1', value); // Сохраняем в localStorage
//   //     }
//   //   };

//   //   const change = (event: any, value: any) => {
//   //     console.log('onChange triggered:', value); // Посмотреть, что передаёт слайдер

//   //     if (Array.isArray(value)) {
//   //       setValue1(value[0]);
//   //       setValue2(value[1]);
//   //       console.log('Saving values:', value[0], value[1]);
//   //       saveState('hw11-value1', value[0]);
//   //       saveState('hw11-value2', value[1]);
//   //     } else {
//   //       setValue1(value);
//   //       console.log('Saving single value:', value);
//   //       saveState('hw11-value1', value);
//   //     }
//   //   };

//   const change = (event: any, value: any) => {
//     if (Array.isArray(value)) {
//       setValue1(value[0]);
//       setValue2(value[1]);
//       saveState('hw11-value1', value[0]);
//       saveState('hw11-value2', value[1]);
//     } else {
//       setValue1(value);
//       saveState('hw11-value1', value);
//     }
//   };

//   return (
//     <div id={'hw11'}>
//       <div className={s2.hwTitle}>Homework #11</div>

//       <div className={s2.hw}>
//         <div className={s.container}>
//           <div className={s.wrapper}>
//             <span id={'hw11-value'} className={s.number}>
//               {value1}
//             </span>
//             <SuperRange
//               id={'hw11-single-slider'}
//               // сделать так чтоб value1 изменялось // пишет студент
//               value={value1}
//               onChange={change}
//             />
//           </div>
//           <div className={s.wrapper}>
//             <span id={'hw11-value-1'} className={s.number}>
//               {value1}
//             </span>
//             <SuperRange
//               id={'hw11-double-slider'}
//               // сделать так чтоб value1/2 изменялось // пишет студент
//               value={[value1, value2]}
//               onChange={change}
//             />
//             <span id={'hw11-value-2'} className={s.number}>
//               {value2}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HW11;

// //

/////////////////////////////////////////////

import React, { useState } from 'react';
import s from './HW11.module.css';
import s2 from '../../s1-main/App.module.css';
import { restoreState, saveState } from '../hw06/localStorage/localStorage';
import SuperRange from './common/c7-SuperRange/SuperRange';

/*
 * 1 - передать значения в оба слайдера
 * 2 - дописать типы и логику функции change
 * 3 - сделать стили в соответствии с дизайном
 * */

function HW11() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
  const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0));
  const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100));

  //   const change = (event: Event, value: number | number[]) => {
  //     if (Array.isArray(value)) {
  //       setValue1(value[0]);
  //       setValue2(value[1]);
  //       saveState('hw11-value1', value[0]);
  //       saveState('hw11-value2', value[1]);
  //     } else {
  //       setValue1(value);
  //       saveState('hw11-value1', value);
  //     }
  //   };

  //   const change = (event: Event, value: number | number[]) => {
  //     if (Array.isArray(value)) {
  //       setValue1(value[0]);
  //       setValue2(value[1]);
  //       saveState('hw11-value1', value[0]);
  //       saveState('hw11-value2', value[1]);
  //     } else {
  //       setValue1(value);
  //       saveState('hw11-value1', value);
  //       // Если значение второго слайдера не изменилось, нужно сохранить его текущее значение.
  //       saveState('hw11-value2', value2);
  //     }
  //   };

  const change = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      // Когда изменяются оба слайдера
      setValue1(value[0]);
      setValue2(value[1]);
      saveState('hw11-value1', value[0]);
      saveState('hw11-value2', value[1]);
    } else {
      // Когда изменяется только один слайдер
      setValue1(value);
      setValue2(value); // обновляем значение второго слайдера
      saveState('hw11-value1', value);
      saveState('hw11-value2', value); // сохраняем оба значения
    }
  };

  return (
    <div id={'hw11'}>
      <div className={s2.hwTitle}>Homework #11</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={'hw11-value'} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={'hw11-single-slider'}
              // сделать так чтоб value1 изменялось // пишет студент
              value={value1}
              onChange={change}
            />
          </div>
          <div className={s.wrapper}>
            <span id={'hw11-value-1'} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={'hw11-double-slider'}
              // сделать так чтоб value1/2 изменялось // пишет студент
              value={[value1, value2]}
              onChange={change}
            />
            <span id={'hw11-value-2'} className={s.number}>
              {value2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;

//
