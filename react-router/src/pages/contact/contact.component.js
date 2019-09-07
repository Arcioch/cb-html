import React from 'react';
import Accordion from '../../components/accordion/accordion.component';
import accordionData from './accordionData.json';

const Contact = () => {
    return (<div>
        To jest kontakt
        {accordionData.map((item) => <Accordion {...item} />)}
    </div>);
}

export default Contact;