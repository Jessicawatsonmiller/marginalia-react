import React, {useEffect, useState} from 'react';
// import './App.css'

const Aside = ({ target, children, moveDown }) => {
    const [style, setStyle] = useState(null);

    const align = () => {
        const rectangle = target.current.getBoundingClientRect();
        const offset = window.scrollY + rectangle.top + moveDown;

        //setStyle: ({ top: offset });
    }; 
    
    useEffect (() => {
        align();

        const listener = window.addEventListener("resize", align);
        return () => window.removeEventListener("resize", listener);
    }, []);

    return (
        <aside ClassName={CSS.aside} style={style}>
            {children}
        </aside>
    );
};


export default Aside