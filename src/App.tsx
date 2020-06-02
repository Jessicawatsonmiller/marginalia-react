import React, {useState, useEffect} from 'react';
import { ReactReader, EpubView } from "react-reader";
import logo from './logo.svg';
import './App.css';



function CoolComponent(props: {name: string}) {
  // console.log('props is', props)

  return <div>{props.name} is super cool</div>

}


function App() {
  const onLocationChanged = (newLocation: string) => {
    console.log('new location', newLocation)
  }

const [location, setLocation] = useState("introduction_001.xhtml")

  // CoolComponent({
  //   name: "asjkdfhaksjdhf"
  // })

  // EpubView({
  //   url: "https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf",
  //   title: "Moby Dick",
  //   // ....
  // })

  return (
    <div>
      Now Reading
      <CoolComponent name="something" />
      {/*}* Container needs a height..*/}
      <ReactReader
        url="https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"
        title="Moby Dick"
        location={location}
        locationChanged={(epubcifi: string) => {
          console.log('navigate to', epubcifi)
          setLocation(epubcifi)
        }}
        tocChanged={(toc: string) => console.log(toc)}
      />
    </div>
  );
}

export default App;
