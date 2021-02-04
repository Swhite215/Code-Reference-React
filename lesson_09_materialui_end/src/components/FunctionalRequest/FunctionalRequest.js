import { useState, useEffect } from "react";
import { getPeople } from "../../services/starwars-service";

function FunctionalRequest() {

const [people, setPeople] = useState([]);

    useEffect(() => {
        // Make Network Request
        async function makeRequest() {
            try {
                let result = await getPeople();
                let people = result.results;
                setPeople(people);
            } catch(e) {
                console.log(e);
            }

        }

        makeRequest();
    }, []);

    const makePostRequest = async () => {
        // Form Body
        // Make Request
        // use setPeople() is applicable
    }


  return (
    <div>
        <h2>Functional Request</h2>
        {people.map((person) => {
            return <p key={person.name} >{person.name}</p>
        })}
    </div>
  );
}

export default FunctionalRequest;