import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: 'Will Smith', img: expert1, description : "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa."},
    {id: 2, name: 'Chris Rock', img: expert2, description : "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa."},
    {id: 3, name: 'Dwayne Rock', img: expert3, description : "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa."},
    {id: 4, name: 'Messy Vai', img: expert4,description : "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa."},
    {id: 5, name: 'Ronaldo Bro', img: expert5, description : "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa."},
    {id: 6, name: 'Stachy Jhonson', img: expert6, description : "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa."}
]

const Experts = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary text-center mt-5 mb-5'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert= {expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;