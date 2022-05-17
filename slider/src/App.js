import data from "./data";
import { ImQuotesRight } from "react-icons/im";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import React from "react";

export default function App() {
  const [people, setPeople] = React.useState(data);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className='text-center container'>
      <header className='header container-small'>
        <h1 className='header--title'>Reviews</h1>
        <hr className='header--underline' />
      </header>
      <main className='main section-center container-small'>
        {people.map((person, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={person.id}>
              <img
                className='article--image'
                src={person.image}
                alt={person.name}
                width='30px'
              />
              <h2 className='article--name'>{person.name}</h2>
              <h3 className='article--job'>{person.job}</h3>
              <p className='article--description'>{person.description}</p>
              <ImQuotesRight />
            </article>
          );
        })}
        <button onClick={() => setIndex(index - 1)}>
          <AiFillLeftCircle />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <AiFillRightCircle />
        </button>
      </main>
    </div>
  );
}

// Alternative

// function prevPerson() {
//   if (index === 0) {
//     setIndex((prevIndex) => (prevIndex = people.length - 1));
//   } else {
//     setIndex((prevIndex) => prevIndex - 1);
//   }
// }

// function nextPerson() {
//   setIndex((oldIndex) => {
//     let index = oldIndex + 1;
//     if (index > people.length - 1) {
//       index = 0;
//     }
//     return index;
//   });
// }
// function prevPerson() {
//   setIndex((oldIndex) => {
//     let index = oldIndex - 1;
//     if (index < 0) {
//       index = people.length - 1;
//     }
//     return index;
//   });
// }
//But this way, the autoslide useEffect will fail. So in useEffect, instead of index + 1, we can add the callback function of 'nextPerson'
