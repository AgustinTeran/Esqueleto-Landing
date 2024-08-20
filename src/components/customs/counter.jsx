import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function Counter() {
  const [startCount1, setStartCount1] = useState(false);
  const [startCount2, setStartCount2] = useState(false);
  const [startCount3, setStartCount3] = useState(false);

  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);

  useEffect(() => {
    const createObserver = (ref, setState) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState(true);
          } else {
            setState(false); // Reinicia el estado cuando el elemento sale de la vista
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    };

    const observer1 = createObserver(counterRef1, setStartCount1);
    const observer2 = createObserver(counterRef2, setStartCount2);
    const observer3 = createObserver(counterRef3, setStartCount3);

    return () => {
      observer1();
      observer2();
      observer3();
    };
  }, []);

  return (
    <div className='flex gap-10 items-center justify-center flex-wrap flex-col xs:flex-row'>
      <span ref={counterRef1} className='text-3xl text-primary font-semibold'>
        +{startCount1 && <CountUp start={0} end={100} duration={2.5} />} Proyectos
      </span>
      <span ref={counterRef2} className='text-3xl text-primary font-semibold'>
        +{startCount2 && <CountUp start={0} end={20} duration={2.5} />} Países
      </span>
      <span ref={counterRef3} className='text-3xl text-primary font-semibold'>
        +{startCount3 && <CountUp start={0} end={15} duration={2.5} />} Años
      </span>
    </div>
  );
}
