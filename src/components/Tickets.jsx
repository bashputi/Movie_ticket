import { useEffect, useState } from "react";
import {
    Card,
   
    Typography,
   
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Tickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then((res) => res.json())
        .then(data => {
            setTickets(data)
            setLoading(false)
        })

    }, [])
    
    return (
        <div className="container mx-auto my-16 md:my-28">
          <h1 className="text-center text-2xl md:text-5xl font-bold my-10 md:my-20">Our Movie Gallery</h1>
         <div className="flex justify-center">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                tickets.length && tickets.map((item) =>(
                    <Card key={item.show.id} className="w-48 md:w-56 lg:w-64 pt-4 px-4 group hover:bg-gray-300 ">
                   
                      <img src={ item.show.image?.medium} className="group transition transform group-hover:-translate-y-1 group-hover:opacity-75 motion-reduce:transition-none motion-reduce:hover:transform-none ..." alt="profile-picture" />
                    
                    <div className="text-center mt-3">
                 
                      <Typography variant="h4" color="blue-gray" className="mb-2 group group-hover:text-purple-600">
                       {item.show.name}
                      </Typography>
                      
                   
                    </div>
                    <div className="flex justify-end">
                    <Link to={`/${item.show.id}`}>
                      <Button variant="text" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... mb-4 flex items-center gap-1 group invisible group-hover:bg-gray-500 hover:gap-3  group-hover:visible ...">
                      Details{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                     </Button>
                     </Link>
                      </div>
                  </Card>
                ))
            }
         </div>

         </div>
        </div>
    );
};

export default Tickets;