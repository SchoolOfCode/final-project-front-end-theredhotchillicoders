


We want to make the tiles on the front page & maske these dynamic when you click on them. 
We will use the database & change of state to make this happen. 



>> 

We've got an array of objects with all the tile details. 

We map over this array to produce each activity card << 

           send the details of the object into the activity card tile. 
           update the state of the fitness info with this information. 

            FitnessInfo {
                title: running,
                category: fitness,
                description: run to the shops
                
            }


 Then the user will select the time and this will add on to the end of the object. 

 We then need to send this object to the data base.            

When the tile is clicked we need to obtain the details of the acitivty from the object and post them to the database. 


<div>
<NavBar>
<h1>

 {if not exercise chosen show ? (


 <Grid> 
    {map over data ((exercise)=> <Activity/>)}
    </Grid>
    <Link> HOME </Link>
 ) : (
     <Grid> 
    {map over data ((exercise)=> <TIMES/>)}
    </Grid>
    <Link> FITNESS </Link>
 )
<div>




