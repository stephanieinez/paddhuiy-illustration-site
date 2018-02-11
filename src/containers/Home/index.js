import React from 'react';
import { HomeBanner } from '../../components';

/**
What are props ?
Props are the object that we pass our component. (remember component is just a function)

So
<HomeBanner homeImage="/location/img.jpg" size={20} disabled={false} />
Is the same as doing
HomeBanner({homeImage: "/location/img.jpg", size: 20, disabled: false})

There are two ways that we can acesses the properties on the prop object.

1) Using the dot notation
Given in the code below props is of type object, and to acess the props on that
object we must the dot notation.
So for example if I want the size property I would do props.size

const Home = props => <HomeBanner homeImage={props.homeImage} />; // pass from props down to component

2) Deconstructing (New ES6 Feature) //TODO Study this and Spread operator
 Allows us to pick properties from our object without using the dot notation
 E.G const {size, homeImage, disabled} = props;

const Home = ({homeImage, size, disabled}) => <HomeBanner size={size} disabled={disabled} homeImage={homeImage} />; // pass from props down to component

* */
const Home = ({ homeImage }) => <HomeBanner homeImage={homeImage} />; // pass from props down to component

export default Home;
