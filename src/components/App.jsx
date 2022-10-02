import React, {Fragment} from "react";
import '../styles/styles.scss';
import Recipes from "./Recipes";
import source from '../images/sample3.jpeg';
import sourceSvg from '../images/sample5.svg';

const App = () => {
    return (
        <Fragment>
            <section className='hero'></section>
            <main>
                <section>
                    <h1>{'Oh. hi React!'}</h1>
                </section>
            </main>
            <img src={source} alt="picture" width='450' />
            <img src={sourceSvg} alt='pictureSvg' width='450'/>
            <Recipes />
        </Fragment>
    )
};

export default App;