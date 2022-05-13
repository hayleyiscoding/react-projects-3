// Make mobile responsive in the future

import React from "react";
import { BiChevronsRight } from "react-icons/bi";

const url =
  "https://gist.githubusercontent.com/hayleyiscoding/9d56517e51b1dd91e2a628067966c509/raw/ec1dbe13a0e81a55108865b69dce9605e004d6a4/gistfile1.txt";

export default function App() {
  const [loading, setloading] = React.useState(true);
  const [jobs, setJobs] = React.useState([]);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setJobs(data);
        setloading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading..</h1>;
  }
  const { title, dates, duties, company } = jobs[value];

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='header--title'>Experience</h1>
        <hr className='header--underline' />
      </header>
      <main className='main col_1'>
        <div className='flex column main--col_1'>
          {jobs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`col_1--button flex column align-center ${
                index === value && "active"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <article>
          <h2 className='article--title'>{title}</h2>
          <h3 className='article--company'>{company}</h3>
          <h4 className='article--dates'>{dates}</h4>
          {duties.map((item) => (
            <div className='flex justify between align-start'>
              <BiChevronsRight className='icon' />
              <p className='article--duties'>{item}</p>
            </div>
          ))}
        </article>
      </main>
    </div>
  );
}
