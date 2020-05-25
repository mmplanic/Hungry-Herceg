import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar'
import './Vote.css'

// dodati servise za get poll i setVotes

let votedList = [];

const testRest = [
    {
        restaurantId: 0,
        name: "Karadjordje"
    },
    {
        restaurantId: 1,
        name: "Pera"
    },
    {
        restaurantId: 2,
        name: "Pizerija"
    },
    {
        restaurantId: 3,
        name: "Pizdarija"
    },
    {
        restaurantId: 4,
        name: "Dunja"
    }



]

export default function Vote({ history, match }) {

    const [restaurants, setRestaurants] = useState(testRest);

    const [pollName, setPollName] = useState("");
    const [endTime, setEndTime] = useState("");
    const [pollAuthor, setPollAuthor] = useState("");

    useEffect(() => {

        const { id } = match.params // uzimanje prosledjenog id poll-a preko linka

        // getPOll(id).then(({data})=>{
        //     if(data.state){
        //         setPollName(data.name);
        //         setEndTime(data.ends);
        //         setRestaurants(data.restaurants);
        //         setPollAuthor(data.author);
        //     }
        //     else{
        //         alert("Poll je zavrsen"); // usaglasiti sa dizajnom kako prikazati poruku

        //     }
        // }).catch(err=>{alert("Doslo je do greske");   // Usaglasiti se sa backendom oko odgovora ako poll ne postoji i slicno
        // })

    }, [])



    const handleVote = (e) => {

        if (e.target.className === 'vote') {

            if (votedList.length < 3) {  // ogranicenje glasanja na max 3 restorana

                e.target.className = 'voted';
                e.target.innerHTML = "Unvote";

                votedList.push(restaurants.find(el => el.restaurantId === e.target.id));
            }
            else {
                alert('Mozete odabrati najvise 3 retorana'); // usaglasiti sa dizajnom

            }
        }
        else {
            e.target.className = 'vote';
            e.target.innerHTML = "Vote";
            votedList.splice(restaurants.indexOf(restaurants.find(el => el.restaurantId === e.target.id)), 1);
        }

    }

    const confirmVotes = () => {

        const { id } = match.params;

        if (votedList.length > 0) {

            //Usaglasiti sa beckendom kako se prosledjuju glasovi votedList 

            // setVotes(id,votedList).then(res=>{


            // }).catch(err=>{})
        }
        else {
            alert("Morate odabrati makar jedan restoran");  // Usaglasiti sa dizajnom
        }
    }


    return (
        <div className='wrapper'>
            <NavBar history={history} />
            <div className='voteWrapper'>
                <div className="activeVote">
                    <div className="voteCard">
                        <div className='voteHeader'>
                            <img className='voteingIcon' src='/img/voting.png' alt='vote' />
                        </div>
                        <div className='voteCardInfowrapp'>
                            <div className='voteCardInfoHeader'>
                                <div><label>{pollName}</label> </div>
                                <div><label>{pollAuthor}</label> </div>
                                <div><label>{endTime}</label> </div>
                            </div>
                            <div>
                                <ul>
                                    {restaurants.map((restaurant, index) => {
                                        return (
                                            <div className='voteFiledWrapp' key={"res" + index}><div><label className='voteingLbl'> {restaurant.name}</label></div>
                                                <div>
                                                    <button  className="vote" id={restaurant.restaurantId} onClick={handleVote}>Vote</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className='voteBtnWrapp'>
                                <button className='voteBtn' onClick={confirmVotes}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}