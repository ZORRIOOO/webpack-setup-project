import React, {Fragment} from "react";
import '../styles/styles.scss';
import Recipes from "./Recipes";

const App = () => {
    return (
        <Fragment>
            <section className='hero'></section>
            <main>
                <section>
                    <h1>{'Oh. hi React!'}</h1>
                </section>
            </main>
            <Recipes />
        </Fragment>
    )
};

export default App;