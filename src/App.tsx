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
    <div style={{width:"100%", height:"100%"}}>
      {/*}* Container needs a height..*/}
      {/* url="https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf" */}
      <ReactReader
        url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
        title="Moby Dick"
        location={location}
        locationChanged={(epubcifi: string) => {
          console.log('navigate to', epubcifi)
          setLocation(epubcifi)
        }}
        showToc={true}
        tocChanged={(toc: string) => console.log(toc)}
      />
    </div>
  );
}

export default App;
