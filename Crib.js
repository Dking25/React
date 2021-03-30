import React from 'react';
import './Crib.css';
import Nav from '../../../Components/Nav/Nav';
import {Grid} from '@material-ui/core';
import Card1 from '../../../Components/Card/Card1';



function Crib (props){
    return(
        <div style={{ backgroundImage: "url(https://i.pinimg.com/originals/30/f8/15/30f8151aecf81f09111d61073ab91378.jpg)",
                        backgroundRepeat: 'no-repeat',
                        width: '',
                        height: '1000px'}}>
            <Nav/>
        
        
        <Grid container spacing={0}>
            <Card1 
                image src= '../../../Components/Card/Pics/Anime/itadori-yuji.jpg' 
                title1= 'Itadori Yuji'
                body= 'The vessel of Sukuna and the protaganist of Jujutsu Kaisen' 
                 />
            <Card1 
                title1= 'Satoru Gojo'
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM87vyd5SAZZbbyr7yiuCWtcmF48j2JCs3Nw&usqp=CAU"
                body= 'Sensie of Itadori Yuji and the strongest Jujutsu Sorscerer alive, is a special grade Sorcerer' />
            <Card1 
                title1= 'Megumi Fushiguro'
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM87vyd5SAZZbbyr7yiuCWtcmF48j2JCs3Nw&usqp=CAU"
                body= 'Founder of the Sukuna vessel and close friend to Itadori Yuji, as well as potential Special grade Sorcerer' />
            </Grid>
            
            
            <Grid xs={3}>
            <Card1 
                title1= 'Aoi Todo'
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM87vyd5SAZZbbyr7yiuCWtcmF48j2JCs3Nw&usqp=CAU"
                body= '"Best Friend" peer-mentor to Itadori Yuji and is a Grad 1 Jujutsu Sorcerer from' />
            <Card1 
                title1= 'Nobara Kugisaki'
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM87vyd5SAZZbbyr7yiuCWtcmF48j2JCs3Nw&usqp=CAU"
                body= 'Close friend of Itadori Yuji ability scale so far unknown but ferocity as a sorcerer is unmatched' />
        </Grid>
        </div>
    )
}
export default Crib;